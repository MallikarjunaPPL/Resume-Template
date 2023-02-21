import Study from "./Components/Study";
import Skills from "./Components/Skills";
import './App.css';
import logo_1 from "./Images/resume icon.png";
import Project from "./Components/Project";
import Proffesional from "./Components/Proffesional";
import Activities from "./Components/Activities";
import Acheivements from "./Components/Acheivements";
import Copyright from "./Components/Copyright";
import Header from "./Components/Header";
import {GrAchievement} from 'react-icons/gr';
import {ImMail3} from 'react-icons/im';
import { GiAchievement } from 'react-icons/gi';
import { ImProfile} from 'react-icons/im';
import {ImLinkedin} from 'react-icons/im';
import { GiSkills} from 'react-icons/gi';
import { MdOutlineCastForEducation} from 'react-icons/md';
import { GrProjects } from 'react-icons/gr';
import { FaPhoneSquare} from 'react-icons/fa';
function App() {
  return (
    <>
    
    <Header/>
    <div className="background">
      <div className="side_nav">
        <div className="manage_icon">
        
        <a href="#Acheivements"> <GrAchievement className="icon_achieve" /></a>
        <a className="anchor_hidden" href="#Acheivements">  Acheivements</a>
        </div>
      
        <div className="manage_icon">
        <a href="#Activities"><GiAchievement className="icon_activity" /></a>
        <a className="anchor_hidden" href="#Activities">Activities</a>
        </div>


      <div className="manage_icon">
       <a href="#Proffesional"><ImProfile className="icon_size" /></a>
       <a className="anchor_hidden" href="#Proffesional">Proffesional Exp.</a></div>

       <div className="manage_icon">
        <a href="#Project"><GrProjects className="icon_size" /></a>
        <a className="anchor_hidden" href="#Project">Projects</a></div>

        <div className="manage_icon">
        <a href="#Skills"><GiSkills className="icon_size" /></a>
        <a className="anchor_hidden" href="#Skills">Skills</a></div>

        <div className="manage_icon">
        <a href="#Study"><MdOutlineCastForEducation className="icon_size"/></a>
        <a className="anchor_hidden" href="#Study">Education</a></div>



      </div>
      
    <div className="app-conatiner">
      
      <div className="container">
        <div className="image_cont">
      <img src={logo_1} alt="Wrong_Url" className="logo"/> 
      <h1 className="heading">Sai Mallikarjuna Ponnpalli</h1>
      </div>
     <div className="para_cont">
     <p className="paragraph_1"><ImMail3 className="icon_size "/>-mallikarjunasai174@gmail.com </p>
      
     <ImLinkedin className="icon_size "/><a className="anchor_ele" rel="noreferrer" href="https://www.linkedin.com/in/sai-mallikarjuna/" target="_blank">-www.linkedin.com/in/sai-mallikarjuna</a>
      <p className="paragraph_1"><FaPhoneSquare className="icon_size"/>-:9948922146 </p></div>
      </div>
      <p className="para_1">Education</p>

      <hr className='line'/>
      
      <Study/>
      <Skills/>
      <Project/>
      <Proffesional/>
      <Activities/>
      <Acheivements/>
      
        </div>
        </div>
        <Copyright/>
        </>
  );
}

export default App;
