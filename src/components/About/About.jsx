import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
const About = () => {
    return (
        <div className="about">
            <div className="aboutContainer">
                <Typography> This is sample quote</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src="saurabh-img.jpeg" alt="Saurabh" className='aboutAvatar' />
                    <Typography variant="h4" style={{
                        margin:"1vmax",color:"black"
                    }}>Saurabh Mishra</Typography>
                    <Typography style={{
                        margin:"1vmax"
                    }}> Full stack Developer</Typography>
                    <Typography style={{
                        margin:"1vmax"
                    }} > I am a learner and Teacher</Typography>
                </div>
                <div>
                <Typography style={{
                    wordSpacing: "5px",
                    lineHeight: "50px",
                    letterSpacing: "5px",
                    textAlign: "right",
                    color:"black"
                }}>
                    This is description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi laborum rem adipisci? Sed aut nemo illum consectetur. Dicta, adipisci est.
                </Typography>
            </div>
            </div>
           
        </div>
    )
}

export default About
