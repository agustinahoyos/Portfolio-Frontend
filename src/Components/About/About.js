import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './About.css'

export default function About (){
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('https://backend-portfolio-agus.herokuapp.com/about')
        .then(
            res => setInformation(res.data[0])
         )}, [setInformation])
    return (
    <div className= "About">
        <div className= "pic-div">
            <img className= "profile-pic" src={information.photo} alt="Waking up Heroku, please wait..."/>
        </div>
        <div className="description">
            <h1>{information.name}</h1>
            <h2>{information.profession}</h2>
            <p>{information.about_me}</p>
            <ul className="Skills">
            {information.skills && information.skills.map((skill)=> 
            <p className="skill">{skill}</p>)}
            </ul>
        </div>
    </div>)

};