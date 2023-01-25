import React from "react";
import { Typography, Button } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import "./Projects.css";
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
  url,
  projectTitle,
  projectImage,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Projectimage" />
          <Typography variant="h5" className="projectTitle">
            {projectTitle}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6"> Tech Stack:{technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          {" "}
          <Delete />
        </Button>
      )}
    </>
  );
};
const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="projects">
      <Typography variant="h3">
        {" "}
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((projects, index) => (
          <ProjectCard
            className="projectCard"
            url="https://github.com/saurabh1352/portfolio-1.git"
            projectTitle=" Cricket multipplayer"
            projectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAC_WueCSCX7Nk4XA5Zo7S3jd7Wy-HPkBJvyWik3zrcnnp2xmLybp6MQx9WvoaKGpyE0&usqp=CAU"
            description=""
            technologies="node js,express js, colysius npm dependency for room creation,mongodb"
          />
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem Ubunto Mono " }}>
        All The Projects Shown Above are Made by Me
        <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
