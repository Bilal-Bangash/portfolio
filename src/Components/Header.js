import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import Fade from 'react-reveal'
import icon from './icon'
import gif from './react.png'

class Header extends Component {
  render() {
    if (!this.props.data) return null

    const project = this.props.data.project
    const github = this.props.data.github
    const name = this.props.data.name
    const description = this.props.data.description

    let config = {
      num: [1, 1],
      rps: 0.1,
      radius: [50, 100],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.2, 5],
      scale: [2, 2],
      body: gif,
      position: 'all',
      //color: ["random", "#ff0000"],
      cross: 'bround',
      random: 5,
    }

    let config2 = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [0.1, 0.4],
      position: 'all',
      color: ['random', '#ff0000'],
      cross: 'dead',
      // emitter: "follow",
      random: 15,
    }

    return (
      <header id="home">
        <ParticlesBg type="custom" config={config} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    )
  }
}

export default Header
