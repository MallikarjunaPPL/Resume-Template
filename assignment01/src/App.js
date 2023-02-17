import Study from "./Components/Study";
import Skills from "./Components/Skills";
import './App.css';
import Project from "./Components/Project";
import Proffesional from "./Components/Proffesional";
import Activities from "./Components/Activities";
import Acheivements from "./Components/Acheivements";
import Copyright from "./Components/Copyright";
import Header from "./Components/Header";
function App() {
  return (
    <>
    
    <Header/>
    <div className="background">
    <div className="app-conatiner">
      
      <div className="container">
     
      <h1 className="heading">Sai Mallikarjuna Ponnpalli</h1>
      <p className="paragraph">Guntur, Andhra Pradesh, 522003 | mallikarjunasai174@gmail.com | <a className="anchor_ele" rel="noreferrer" href="https://www.linkedin.com/in/sai-mallikarjuna/" target="_blank">www.linkedin.com/in/sai-mallikarjuna</a></p>
    
      <p className="para_1">Education</p>
      <hr className='line'/>
      </div>
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
