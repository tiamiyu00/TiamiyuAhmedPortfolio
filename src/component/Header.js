import "./file.css";
import { FaGithub,  FaWhatsapp } from "react-icons/fa6";
import { FiSun} from "react-icons/fi";

const Header = () => {
 
    return (   
    <div className='header'>
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
  </div>
    );
  };
  
  export default Header;