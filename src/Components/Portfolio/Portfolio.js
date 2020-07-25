import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css'

export default function Portfolio (){
    const [projects, setProjects] = useState({});
    useEffect(() => {
        axios.get('https://backend-portfolio-agus.herokuapp.com/Portfolio')
        .then(
            res => setProjects(res.data)
         )}, [setProjects])

    return (
        
        <div className="PortfolioCard">
            { projects.length && projects.map((project) => 
                <div className="project">
                    <h1>{project.name}</h1>
                    <img className="img-project" src={project.image} alt="img-project"/>
                    <p className="project-description">{project.description}</p>
                    <a className="mylink" href={project.link}>Click to see!</a>
                </div>    
            
            )}
       </div>
    
    )

};