import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import learnjp from './learnjp.gif';
import overtime from './overtime.gif'
import Nav from './components/Nav.js'


class App extends Component{
  render() {
    return (
      <div className="App">
      <Nav />
        <h1>Bora Kim</h1>
        <h2>Junior DevOps / Frontend engineer</h2>
        <h2>stellakkkk@hotmail.com</h2><br />
        <p>Book_tracker <a href="https://github.com/Kimovi/Book_tracker" className="link">(https://github.com/Kimovi/Book_tracker)</a> skills : Trello board, GCP VM instance, SQL DB, Python, Flask, Jinja2, Unit testing, Git, Jenkins CI server, ERD</p><br />
        <p>Soap-recipe-generator <a href="https://github.com/Kimovi/Soap-recipe-generator" className="link">(https://github.com/Kimovi/Soap-recipe-generator)</a> skills : Trello board, GCP VM instance, SQL DB, Python, Flask, Jinja2, Unit testing, Git, Jenkins pipeline, ERD, Nginx for the load balancer, Ansible, Docker Compose and Swarm</p><br />
        <img src={learnjp} alt="learnjp" className="logo" /><br />
        <p>Live webpage <a href="https://learn-japanese.netlify.app/" className="link">(https://learn-japanese.netlify.app/)</a><br />
        Vanilla JavaScript CRUD application. Skills : HTML, CSS, JavaScript and Pair programming </p><br />
        <img src={overtime} alt="overtime" className="logo" /><br />
        <p>Live webpage <a href="https://overtime-calculator.netlify.app/" className="link">(https://overtime-calculator.netlify.app/)</a><br />
        Another Vanilla JavaScript CRUD application. This time, I have built the project on my own. Skills : HTML, CSS and JavaScript</p><br />
      </div>
    )
  }
}

export default App;