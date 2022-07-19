import React from 'react'
import "./YoutubeCard.css"
import { Typography } from '@mui/material'
const YoutubeCard =({url= "https://youtube.com",
title="Title here",
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvL8UCYDv9oJO5MTS5W_TWh8U3byxRQcbW4A&usqp=CAU"})=>{
    return(
        <div className='youtubecard'>
            <a href={url} target="blank">
                <img src={image} alt="video"/>
                <Typography>{title}</Typography>
            </a>
        </div>
    );
}
export default YoutubeCard;