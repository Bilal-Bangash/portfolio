import React, { Component } from 'react'
import Slide from 'react-reveal'

class Resume extends Component {
  getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  render() {
    if (!this.props.data) return null

    const skillmessage = this.props.data.skillmessage
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      )
    })

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      )
    })
    console.log(
      '%cthis.props.data.skills',
      'color:red;font-size:50px',
      this.props.data.skills
    )
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                {/* <ul className="skills">{skills}</ul> */}
                <h3 align="center">Languages and Tools:</h3>

                <p align="center">
                  {this.props.data.skills.map(({ skill, logo }) => (
                    <img
                      key={logo}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${logo}.svg`}
                      alt={skill}
                      width="60"
                      height="60"
                      style={{ margin: 5 }}
                    />
                  ))}
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    )
  }
}

export default Resume
