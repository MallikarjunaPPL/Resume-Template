import Study from "./Components/Study";
import Skills from "./Components/Skills";
import './App.css';
import MainHeader from "./Components/MainHeader";
import SideNav from "./Components/SideNav";
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
      <SideNav/>
    <div className="app-conatiner">
      <MainHeader/>
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
