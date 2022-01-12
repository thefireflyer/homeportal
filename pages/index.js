import Head from 'next/head'
import React, { Component, useState } from 'react'
import styles from '../styles/Home.module.scss'

class Bookmark extends Component {
  constructor(props, name){
    super(props)
    this.state = {
      name : this.props.name,
      link : "",
      icon : "",
    }
  }
  componentDidMount() {
    this.state.link = (localStorage.getItem(this.state.name+"-href")?localStorage.getItem(this.state.name+"-href"):"")
    this.state.icon = localStorage.getItem(this.state.name+"-icon")?localStorage.getItem(this.state.name+"-icon"):""
    this.forceUpdate()
  }
  render(){
    return (<div className={styles.bookmark}>
      <a href={this.state.link} >
        <img src={this.state.icon} height={`70vh`} width={`auto`} style={{display:(this.state.link!=""&&this.state.icon!="")?"block":"none"}}></img>
        
      </a>
      <a className={this.state.link!=""&&this.state.icon!=""?styles.editBookmark:styles.createBookmark} onClick={() => {
          let bookmark_settings = document.getElementById(styles.editBookmark)

          bookmark_settings.querySelector("a").onclick = () => {
            localStorage.setItem(this.state.name+"-href",bookmark_settings.querySelector("#href").value)
            localStorage.setItem(this.state.name+"-icon", bookmark_settings.querySelector("#icon").value)
            this.state.link = bookmark_settings.querySelector("#href").value
            this.state.icon = bookmark_settings.querySelector("#icon").value
            this.forceUpdate()
            closeAll()
          }

          bookmark_settings.querySelector("#href").value = this.state.link
          bookmark_settings.querySelector("#icon").value = this.state.icon
          
          
          bookmark_settings.style.top = `30vh`
          document.getElementById(styles.closeSettings).style.display = `block`
        }} ><span className="material-icons-outlined">
        {this.state.link!=""&&this.state.icon!=""?"edit":"add_link"}
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

    //TESTING: FIXME: !!!
      document.getElementById(styles.offlineIcon).style.display = navigator.onLine?`none`:`block`;
      this.forceUpdate()

    }, 10000, this.state);

    let setup = (localStorage.getItem("setup")==null)
    
    if (setup)
    {
      localStorage.setItem("setup", "success")
      localStorage.setItem("clock-mode", this.state.clock_mode)
      localStorage.setItem("bookmarks-visible", this.state.bookmarks_visible)
    }
    if (localStorage.getItem("setup") == "success")
    {
      localStorage.setItem("setup", "v0.2.0")
    }
    
    this.state.background = localStorage.getItem("background");
    this.state.clock_mode = localStorage.getItem("clock-mode")=='true';
    this.state.bookmarks_visible = localStorage.getItem("bookmarks-visible")=='true';

    document.getElementById('clock-mode').checked = this.state.clock_mode;
    document.getElementById('bookmarks-visible').checked = this.state.bookmarks_visible;
    document.getElementById('background-url').value = this.state.background

    

    let clock = document.getElementById(styles.clock)
    
    const date = new Date();
    let hours = (date.getHours()<12)?(date.getHours()):(date.getHours()-12)
    clock.innerHTML = ((this.state.clock_mode)?hours:date.getHours()) + ":" + date.getMinutes()

    document.getElementById(styles.offlineIcon).style.display = navigator.onLine?`none`:`block`;
    
    
    this.forceUpdate()

  }

  render() {
    return (
      <div id={styles.container}>
        <Head>
          <title>HomePortal</title>
          <meta name="description" content="A better defualt homepage" />
          <link rel="icon" href="icon.png" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
        </Head>

        <main id={styles.main} style={{backgroundImage:"url("+this.state.background.replaceAll("\"", "")+")"}}>
          
          <div id={styles.background}><video width="1920" height="1080" autoPlay muted loop 
          style={{display:this.state.background!=""?'none':'block'}}>
            TODO: make background animation!!
            <source src="homeportal/bg.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
          </video></div>
          

          <h1 id={styles.clock}>00:00</h1>

          <div id={styles.bookmarks} style={{display:this.state.bookmarks_visible?"grid":"none"}}>
            {this.state.bookmarks.map(bookmark => {
              return (<Bookmark name={bookmark}></Bookmark>)
            })}
          </div>
          
          <a onClick={() => {
            if (screen.width > 600){
            document.getElementById(styles.container).style.left = `-20vw`
            }
            else {
              document.getElementById(styles.container).style.left = `-85vw`
            }
            document.getElementById(styles.closeSettings).style.display = `block`
          }} id={styles.openSettings}><span className={"material-icons-outlined "+styles.pin} >settings</span></a>

          <a onClick={closeAll} id={styles.closeSettings}></a>



          <div id={styles.editBookmark}>
            <input id="href" type={`text`} placeholder={`url`}></input><span>link url</span>
            <br></br>
            <input id="icon" type={`text`} placeholder={`url`}></input><span>link icon url</span>
            <br></br>
            <a>update and save</a>
          </div>

          <div id={styles.bottomPins} >
            <span id={styles.offlineIcon} className={"material-icons-outlined "+styles.pin} >
            offline_pin
            </span>
            
            <span className={"material-icons-outlined "+styles.pin} onClick={() => {
              window.location.href = "https://github.com/theflyingfire/homeportal"
            }}>
            code
            </span>
          </div>

        </main>
        

          <div id={styles.settings}>
            <center id={styles.settingsPanel}>
              <h1>Settings</h1>

              <h2>general</h2>
              <input type={`checkbox`} id='clock-mode'></input><span>12 hour clock</span>
              <br></br>
              <input type={`checkbox`} id='bookmarks-visible'></input><span>bookmarks</span>
              <br></br>
              <input id="background-url" type={`url`} placeholder='url'></input><br></br><span>background image url</span>

              <br></br>

              <a onClick={() => {
                localStorage.setItem("clock-mode", document.getElementById('clock-mode').checked)
                localStorage.setItem("bookmarks-visible", document.getElementById('bookmarks-visible').checked)
                localStorage.setItem("background", document.getElementById('background-url').value)
                
                this.state.clock_mode = document.getElementById('clock-mode').checked
                this.state.bookmarks_visible = document.getElementById('bookmarks-visible').checked
                this.state.background = document.getElementById('background-url').value
                this.forceUpdate()

                closeAll()

              }} ><h2>Update and save</h2></a>

            </center>
          </div>
      </div>
    )
  }
}
function closeAll()
{
  document.getElementById(styles.container).style.left = `0`
  document.getElementById(styles.closeSettings).style.display = `none`
  document.getElementById(styles.editBookmark).style.top = `100vh`
}