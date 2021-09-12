
import React from 'react';
import 'font-awesome/css/font-awesome.css';
import Typical from 'react-typical';
import Image from 'next/image';

import ParticleComponent from "../components/particles/ParticleComponent";
import image from '../public/image.jpeg';
import Footer from "../components/footer/footer.component";

const Home = () => {

  const [darkMode, setDarkMode] = React.useState(true);

  const year = new Date(Date.now() - new Date("02/15/1995").getTime()).getUTCFullYear();  
  const age = Math.abs(year - 1970);  

  return (
    <div className={"home-page", `${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="home-header">
      <ParticleComponent color={darkMode ?  '#fff' : '#333'}/>
      <div className = "home-content">
        <span className = 'toggle'>
          <span onClick={() => setDarkMode(prevMode => !prevMode)}>{darkMode ? '☀️' : '🌚'}</span>
        </span>
        <div className = 'header'>
          <Image src={image} className="headshot" height="400vh" width="400vh" alt="logo" />
          <div className = 'info'>
            <div>Hello | 你好
              <div>
                My name is <b> Chen Liang</b>
              </div>
            </div>
            <div className = 'title'>I am a {''}
              <Typical 
                loop={Infinity}
                wrapper='b'
                steps={[
                  'Software Engineer ⚙️', 
                  1000,
                  'Full Stack Developer 💻',
                  1000,
                  'Mentor 👨‍🏫',
                  1000,
                ]}
              />
          </div>
            <div className = 'location'><i className="fa fa-map-marker pin"/>Toronto <span role="img" aria-label="Canada">  🇨🇦</span></div>
          </div>
          <div className = 'about'>
              I'm a {age}-year-old, Chinese-Canadian.
            <br/>
              My passion is to work with talented individuals and solve complex problems with simple, elegant solutions.
            <br/>
              In my career, I have sought out diverse opportunities to apply my technical skills.
          </div>
          <div className = 'hobbies'>
            I also enjoy: 
            <span role="img" aria-label="Tech"> 💻 |</span>
            <span role="img" aria-label="Beer"> 🍺 | </span>
            <span role="img" aria-label="Basketball"> 🏀 |</span> 
            <span role="img" aria-label="Coffee"> ☕️</span>
          </div>
        </div>
        </div>
      <Footer darkMode = {darkMode}/>
      </header>
    </div>
  );
};

export default Home;
