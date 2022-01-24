import React from "react";


function About(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.lastName}</h2>
            <h3>{props.work}</h3>
            
        </div>
    )
}

export default About


