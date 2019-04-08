import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showMenu: false
    }
  }

  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    return (
      <div className="App">
        <section className='top'>
          <nav className='navigate'>
            <h1 className='title'>Start Bootstrap</h1>
            <button className='menuIcon'
              onClick={() => this.toggleMenu()} >MENU &#9776;
            </button>
            <div className='links'>
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </div>
          </nav>
          <div className={this.state.showMenu ? 'showMenu' : 'hideMenu'}>
              <span className='span2'>SERVICES</span>
              <span className='span2'>PORTFOLIO</span>
              <span className='span2'>ABOUT</span>
              <span className='span2'>TEAM</span>
              <span className='span2'>CONTACT</span>
          </div>
          <div className='message'>
            <h3 className='welcome'>Welcome To Our Studio!</h3>
            <h1 className='meet'>IT'S NICE TO MEET YOU</h1>
            <button className='tellMeMore'><p>TELL ME MORE</p></button>
          </div>
        </section>
        <section className='section2'>
          <div className='services'>
            <h3>SERVICES</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className='threedivs'>
            <div className='three'></div>
            <div className='three'></div>
            <div className='three'></div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
