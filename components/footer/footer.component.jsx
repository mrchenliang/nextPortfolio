
import React from 'react';
import 'font-awesome/css/font-awesome.css';

const Footer = (props) => {
    const year = new Date().getFullYear();
    return (
            <div className = 'footer'>
            <ul className="Social-Icons">
              <li>
                <div>
                  <a href="mailto:hi@chenliang.ca" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope icon tooltip" style ={{color: props.darkMode ? '#fff' : '#333', border : props.darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"backgroundColor": props.darkMode ? '#fff' : '#333', color: props.darkMode ? '#333' : '#fff'}}>Email</div></i>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a href="http://instagram.com/mr_chenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram icon tooltip" style ={{color: props.darkMode ? '#fff' : '#333', border : props.darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"backgroundColor": props.darkMode ? '#fff' : '#333', color: props.darkMode ? '#333' : '#fff'}}>Instagram</div></i></a>              
                </div>
              </li>
              <li>
                <div>
                  <a href="http://twitter.com/mr_chenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter icon tooltip" style ={{color: props.darkMode ? '#fff' : '#333', border : props.darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"backgroundColor": props.darkMode ? '#fff' : '#333', color: props.darkMode ? '#333' : '#fff'}}>Twitter</div></i></a>              
                </div>
              </li>
              {/* <li>
                <div>
                  <a href="http://medium.com/@chen.liang" rel="noopener noreferrer" target="_blank"><i className="fa fa-medium icon tooltip" style ={{color: props.darkMode ? '#fff' : '#333', border : props.darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"backgroundColor": props.darkMode ? '#fff' : '#333', color: props.darkMode ? '#333' : '#fff'}}>Medium</div></i></a>              
                </div>
              </li> */}
              <li>
                <div>
                  <a href="http://linkedin.com/in/mrchenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin icon tooltip" style ={{color: props.darkMode ? '#fff' : '#333', border : props.darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"backgroundColor": props.darkMode ? '#fff' : '#333', color: props.darkMode ? '#333' : '#fff'}}>LinkedIn</div></i></a>              
                </div>
              </li>
              <li>
                <div>
                  <a href="http://github.com/mrchenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-github icon tooltip" style ={{color: props.darkMode ? '#fff' : '#333', border : props.darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"backgroundColor": props.darkMode ? '#fff' : '#333', color: props.darkMode ? '#333' : '#fff'}}>Github</div></i></a>              
                </div>
              </li>
              {/* <li>
                <div>
                  <a href="/resume.pdf" rel="noopener noreferrer" target="_blank"><i className="fa fa-file icon tooltip"><div className = 'tooltiptext'>Resume</div></i></a>              
                </div>
              </li> */}
            </ul>
            <footer>
                <p>Copyright © Chen Liang {year}</p>
            </footer>
            </div>
    );
};

export default Footer;
