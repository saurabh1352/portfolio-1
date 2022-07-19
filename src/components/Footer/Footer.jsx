import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import { Typography } from '@mui/material'
import {BsGithub , BsYoutube , BsInstagram ,BsLinkedin } from "react-icons/bs"
const Footer=()=>{
    return(
  <div className="footer">
      <div>
            <Typography variant ="h5">
About me
            </Typography>
            <Typography> 
                Hey , my name is Saurabh Mishra . I am a Full-Stack Developer , a learner and a Tutorial Channel on Youtube  called <b>Engineer bro</b> 
            </Typography>
            <Link to="/contact" className="footerContactBtn">
                <Typography > Contact us</Typography>
            </Link>
        </div>
        <div>
            <Typography variant="h6"> Social Media</Typography>
            <a href="https://github.com/saurabh1352" target="blank">
                <BsGithub/>
            </a>
            <a href="https://github.com/saurabh1352" target="blank">
                <BsYoutube/>
            </a>   
            <a href="https://github.com/saurabh1352" target="blank">
                <BsInstagram/>
            </a>    <a href="https://www.linkedin.com/in/saurabh-mishra-178445193" target="blank">
                <BsLinkedin/>
            </a>   

        </div>
  </div>
    )
};
export default Footer;