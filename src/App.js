import './App.css';
import { FaGithub, FaLaptop, FaWhatsapp } from "react-icons/fa6";
import { FiSun, FiGlobe} from "react-icons/fi";
import { HiBriefcase, HiPhone, HiUser } from "react-icons/hi";


function App() {
  return (
  <div className='body'>
      <header>  
      
     <div className='nav'>
      
      <div className='img1'><img alt='' src='talogo.jpg'></img></div>
      <div className='ook'>
      <div><h3 className='loo'>  < FaGithub/> </h3></div>
      <div><h3 className='loo'>  <FaWhatsapp /> </h3></div>
        <div><h3 className='loo'>  <FiSun /> </h3></div>
      </div>
      </div>
      </header>
        <div className='bod'>
      <div className='section1'>
        <div className='img2'><img  alt="" src='hero.svg'></img></div>
        <div className='cont1'>
        <p className='hi'>Hi! I'm</p>
        <p className='name'>Tiamiyu Ahmed</p>
        <p className='im'>I am a frontend 
          developer with hands on experience 
          building web apps using React js and next Js</p>
          </div>
      </div>
        
           <div className='pip'><p className='nam'>Featured Project's </p></div>
           <div className='section2'>
           <div className='img'> <img alt='' src='sneakylegss.png'></img></div>
           <div className='sneak'>  <p className='skit'>SNEAKYLEGS</p> 
                  <p className='blur'>Sneakylegs is an E-commerce website</p>
                  <div className='button'>
                    <div className='btn'><button className='bttn'>Next.js</button></div>
                    <div><button className='bttn'>JavaScript</button></div>
                    <div><button className='bttn'>Firebase</button></div>
                    </div>
                    <p className='by'>Design by twitter: @priscilla</p>
                    <button className='yell'> CLICK TO VIEW DESIGN</button>
                    <button className='view'> <span>VIEW LIVE PROJECT</span><FiGlobe/></button>
           </div>
           
        </div>
        
        <div className='section3'> 
           <div className='img'><img  className = 'img' alt='' src='AN.PNG'></img></div>
           <div className='sneak' id='ngo'>  <p className='skit'>All Nations</p> 
                  <p className='blur'>This is a website for an NGO</p>
                  <div className='button'>
                    <div className='btn'><button className='bttn'>Next.js</button></div>
                    <div><button className='bttn'>JavaScript</button></div>
                    <div><button className='bttn'>Firebase</button></div>
                    </div>
                    <p className='by'>Design by twitter: @priscilla</p>
                    <button className='yell'> CLICK TO VIEW DESIGN</button>
                    <button className='view'> <span>VIEW LIVE PROJECT</span><FiGlobe/></button>
           </div> </div>
      
           <div className='section4'> 
           <div className='img'> <img alt='' src='ramen.png'></img></div>
           <div className='rah'>
             <p className='skit'>RAMEN</p> 
                  <p className='blur'>A book Search app, the Google books api Powers search feature</p>
                  <div className='button'>
                    <div className='btn'><button className='bttn'>Next.js</button></div>
                    <div><button className='bttn'>JavaScript</button></div>
                    <div><button className='bttn'>Firebase</button></div>
                    </div>
                    <p className='by'>Design by twitter: @Caramel</p>
                    
                <button className='yell'> CLICK TO VIEW DESIGN</button>
                  <button className='view'> <span> LIVE PROJECT</span><FiGlobe/></button>
                    
                  </div>
           </div>
        
        
           <div className='section5'> 
         
           <div className='img'> <img alt='' src='library.png'></img></div>
           <div className='rah' id='ng'>  
             <p className='skit'>LIBRARIE</p> 
                  <p className='blur'>A book Search app, the Google books api Powers search feature</p>
                  <div className='button'>
                    <div className='btn'><button className='bttn'>Next.js</button></div>
                    <div><button className='bttn'>JavaScript</button></div>
                    <div><button className='bttn'>Firebase</button></div>
                    </div>
                    <p className='by'>Design by twitter: @Caramel</p>
                    <button className='yell'> CLICK TO VIEW DESIGN</button>
                    <button className='view'> <span> LIVE PROJECT</span><FiGlobe/></button>
           </div>
           </div>
        
        
          <div className='section6'> 
           <div className='img'><img alt='' src='crypt.PNG'></img></div>
             <div className='crap'>
              <p className='skit'>CRAPPO</p>
              <p  className='blur'>CRAPPO is a crypto currency landing page Coingecko API 
                is used to get the crypto currency prices
              </p>
           <div className='button'>
                    <div><button className='bttn'>React.js</button></div>
                    <div><button className='bttn'>JavaScript</button></div>
                    <div><button className='bttn'> CoingeckoAPI</button></div>
                    </div>
                    <button className='yell'> <span> LIVE PROJECT</span><FiGlobe/></button>
           </div>
           </div>
           
        
 </div>
 <footer>
  <div className='footer'>
  <div> <HiUser/></div>
  <div> <HiBriefcase/></div>
  <div><FaLaptop/></div>
  <div><HiPhone/></div>
  </div>
 </footer>
 </div>
  );
}

export default App;
