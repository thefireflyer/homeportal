import Head from 'next/head'
import Image from 'next/image'
import React, { Component, useState } from 'react'
import styles from '../styles/Home.module.scss'

class Bookmark extends Component {
  constructor(props, name){
    super(props)
    this.state = {
      name : this.props.name,
      link : "/",
      icon : "/temp.ico",
    }
  }
  componentDidMount() {
    this.state.link = (localStorage.getItem(this.state.name+"-href")?localStorage.getItem(this.state.name+"-href"):"/")
    this.state.icon = localStorage.getItem(this.state.name+"-icon")?localStorage.getItem(this.state.name+"-icon"):"/temp.ico"
    this.forceUpdate()
  }
  render(){
    return (<div className={styles.bookmark}>
      <a href={this.state.link} >
        <img src={this.state.icon} alt={this.state.name} height={`70vh`} width={`auto`}></img>
      </a>
      <a className={styles.editBookmark} onClick={() => {
          let bookmark_settings = document.getElementById(styles.editBookmark)

          bookmark_settings.querySelector("a").onclick = () => {
            localStorage.setItem(this.state.name+"-href",bookmark_settings.querySelector("#href").value)
            localStorage.setItem(this.state.name+"-icon", bookmark_settings.querySelector("#icon").value)
            this.state.link = bookmark_settings.querySelector("#href").value
            this.state.icon = bookmark_settings.querySelector("#icon").value
            this.forceUpdate()
          }

          bookmark_settings.querySelector("#href").value = this.state.link
          bookmark_settings.querySelector("#icon").value = this.state.icon
          
          
          bookmark_settings.style.display = `block`
          document.getElementById(styles.closeSettings).style.display = `block`
        }} ><span class="material-icons-outlined">
        edit
        </span></a>
      </div>
    )
  }
}


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {bookmarks: [
      "bookmark0",
      "bookmark1",
      "bookmark2",
      "bookmark3"
    ],
    background: "https://theflyingfire.github.io/website/static/8913dc387c4ecdbb689c4e673be2646b/d3b28/img6.avif",
    clock_mode: false,
    bookmarks_visible: true
    }
  }
  
  componentDidMount() {
    
    let mainLoop = window.setInterval(state => {
        
      let clock = document.getElementById(styles.clock)
      
      const date = new Date();
      let hours = (date.getHours()<12)?(date.getHours()):(date.getHours()-12)
      clock.innerHTML = ((this.state.clock_mode)?hours:date.getHours()) + ":" + date.getMinutes()

      document.getElementById(styles.offlineIcon).style.display = navigator.onLine?`none`:`block`;
      this.forceUpdate()

    }, 10000, this.state);

    let setup = (localStorage.getItem("setup")==null||localStorage.getItem("bookmarks")==null)
    
    if (setup)
    {
      localStorage.setItem("setup", "success")
      localStorage.setItem("clock-mode", this.state.clock_mode)
      localStorage.setItem("bookmarks-visible", this.state.bookmarks_visible)
      localStorage.setItem("background", this.state.background)

      this.state.bookmarks.forEach(bookmark => {
        localStorage.setItem(bookmark+"-href", "")
        localStorage.setItem(bookmark+"-icon", "/edit.ico")
      })
    }
    
    this.state.background = localStorage.getItem("background");
    this.state.clock_mode = localStorage.getItem("clock-mode")=='true';
    this.state.bookmarks_visible = localStorage.getItem("bookmarks-visible")=='true';

    document.getElementById('clock-mode').checked = this.state.clock_mode;
    document.getElementById('bookmarks-visible').checked = this.state.bookmarks_visible;
    document.getElementById('background-url').value = this.state.background

    document.getElementById(styles.bookmarks).style.display = this.state.bookmarks_visible?`grid`:`none`

    document.body.style.backgroundImage = "url("+this.state.background.replaceAll("\"", "")+")";
    

    let clock = document.getElementById(styles.clock)
    
    const date = new Date();
    let hours = (date.getHours()<12)?(date.getHours()):(date.getHours()-12)
    clock.innerHTML = ((this.state.clock_mode)?hours:date.getHours()) + ":" + date.getMinutes()

    document.getElementById(styles.offlineIcon).style.display = navigator.onLine?`none`:`block`;
    
    
    this.forceUpdate()

  }

  render() {
    
    return (
      <div className={styles.container}>
        <Head>
          <title>HomePortal</title>
          <meta name="description" content="A better defualt homepage" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet" />
        </Head>

        <main className={styles.main}>

          <h1 id={styles.clock}>00:00</h1>

          <div id={styles.bookmarks}>
            {this.state.bookmarks.map(bookmark => {
              return (<Bookmark name={bookmark}></Bookmark>)
            })}
          </div>
          
          <a onClick={() => {
            document.getElementById(styles.settings).style.top = `0vh`
            document.getElementById(styles.closeSettings).style.display = `block`
          }} id={styles.openSettings}><span className="material-icons-outlined md-48">settings</span></a>

          <a onClick={() => {
            document.getElementById(styles.settings).style.top = `100vh`
            document.getElementById(styles.closeSettings).style.display = `none`
            document.getElementById(styles.editBookmark).style.display = `none`
          }} id={styles.closeSettings}></a>



          <div id={styles.editBookmark}>
            <input id="href" type={`text`} placeholder={`url`}></input><span>link url</span>
            <br></br>
            <input id="icon" type={`text`} placeholder={`url`}></input><span>link icon url</span>
            <br></br>
            <a>update and save</a>
          </div>


          <div id={styles.offlineIcon}>
          <span className="material-icons-outlined">
          offline_pin
          </span>
          </div>

          <div id={styles.settings}>
            <center id={styles.settingsPanel}>
              <h1>Settings</h1>

              <h2>general</h2>
              <input type={`checkbox`} id='clock-mode'></input><span>12 hour clock</span>
              <br></br>
              <input type={`checkbox`} id='bookmarks-visible'></input><span>bookmarks</span>
              <br></br>
              <input id="background-url" type={`url`} placeholder='url'></input><span>background image url</span>

              <br></br>

              <a onClick={() => {
                localStorage.setItem("clock-mode", document.getElementById('clock-mode').checked)
                localStorage.setItem("bookmarks-visible", document.getElementById('bookmarks-visible').checked)
                localStorage.setItem("background", document.getElementById('background-url').value)
                
                this.state.clock_mode = document.getElementById('clock-mode').checked
                this.state.bookmarks_visible = document.getElementById('bookmarks-visible').checked
                this.state.background = document.getElementById('background-url').value
                this.forceUpdate()
              }} ><h2>Update and save</h2></a>

            </center>
          </div>

        </main>

        <footer className={styles.footer}>
          <a
            href="https://theflyingfire.github.io/website/"
          >
            By theflyingfire
          </a>
        </footer>
      </div>
    )
  }
}
