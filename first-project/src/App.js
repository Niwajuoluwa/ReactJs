// import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <>
    <Holder/>
    </>
  );
}

function Holder(){
  return(
    <div className='gra'>
      <Logo/>
      <Header/>
      <Body/>
      </div>
      
  )
}
function Logo(){
  return(
    <div id="logo"></div>
  )
}
function Header(){
  return(
<ul>
  <li>GET KALI</li>
  <li>BLOG</li>
  <li>DOCUMENTATION</li>
  <li>COMMUNITY</li>
  <li>COURSES</li>
  <li>DEVELOPERS</li>
  <li>ABOUT</li>
</ul>
)
}
function Body(){
  return(
    <div className='text'>
      <p class="Text"><h1>The most advanced<br></br>Penetration Testing Distribution </h1><br></br>Kali Linux is an open-source, Debian-based Linux distribution<br></br> geared towards various information security tasks, such as<br></br> Penetration Testing, Security Research, Computer Forensics and <br></br>Reverse Engineering.</p>
<div>
  <button className='btn'>Download<i class='fa-solid fa-downlaod'></i></button>
  <button className='btc'>Documentation<i class='fa-solid fa-book-open'></i></button></div>
  <div className='arg'>
<i class='fa fa-angle-down'></i>
  </div>
  </div>
)
}


export default App;
