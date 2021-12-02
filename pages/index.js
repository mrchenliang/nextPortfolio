
import { useState, useEffect } from 'react';
import Head from "next/head"

import 'font-awesome/css/font-awesome.css';
import Typist from 'react-typist';
import Image from 'next/image';

import ParticleComponent from "../components/particles/ParticleComponent";
import image from '../public/image.jpeg';
import Footer from "../components/footer/footer.component";

const Home = () => {

  const [darkMode, setDarkMode] = useState(true);
  const [count, setCount] = useState(1);


  const year = new Date(Date.now() - new Date("02/15/1995").getTime()).getUTCFullYear();  
  const age = Math.abs(year - 1970);  

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <>
    <Head>
      <title>Chen Liang | Full Stack Software Engineer</title>
      <meta name="description" content="Chen is a software engineer. His passion is to work with talented individuals and solve complex problems with simple, elegant solutions." />
    </Head>
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
            <div className = 'title'>I am a &nbsp;
            {count ? (
              <Typist avgTypingDelay={50} onTypingDone={() =>  setTimeout(setCount(0), 3000)}>
                <b>
                  <span>Software Engineer ⚙️</span>
                  <Typist.Backspace count={20} delay={800} />
                  <span bold>Full Stack Developer 💻</span>
                  <Typist.Backspace count={25} delay={1600} />
                  <span bold>Coding BootCamp Mentor 👨‍🏫</span>
                </b>
              </Typist>
              ) : (
                ""
              )}
          </div>
            <div className = 'location'><i className="fa fa-map-marker pin"/>
              Toronto <span role="img" aria-label="Canada">  🇨🇦</span> / 
              San Francisco <span role="img" aria-label="USA">  🇺🇸 </span>
            </div>
          </div>
          <div className = 'about'>
              I am a {age}-year-old, Chinese-Canadian.
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
            <span role="img" aria-label="Traveling"> ✈️ |</span> 
            <span role="img" aria-label="Coffee"> ☕️</span>
          </div>
        </div>
        </div>
      <Footer darkMode = {darkMode}/>
      </header>
    </div>
    </>
  );
};

export default Home;
