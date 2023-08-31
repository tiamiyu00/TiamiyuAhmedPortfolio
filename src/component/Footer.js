import "./file.css";
import { HiBriefcase, HiPhone, HiUser } from "react-icons/hi";
import {  FaLaptop } from "react-icons/fa6";

const Footer = () => {
 
  return (   
  <div className='footer'>
  <div> <HiUser/></div>
  <div> <HiBriefcase/></div>
  <div><FaLaptop/></div>
  <div><HiPhone/></div>
  </div>
  );
};

export default Footer;