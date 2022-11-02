import React from "react";
import { ReactDOM } from "react";
import aboutme from './aboutme.jpg'



function AboutMe(){
    return(
        <>
            <div >
                <div>
                    <img src={aboutme} alt="" height={"100"} width={"80"}/>
                </div>
                <h2>
                    Hello Simon, My name is Mehul.
                </h2>
                <br />
                <h3>
                    I'm a have a 7+ years software developement
                    experience in .Net related technologies.
                </h3>
                <br />
                <h5>
                    I have joined MCDA because I'm really passionate
                    about data and want to explore the data science
                    field.
                </h5>
            </div>
        </>
    )
}

export default AboutMe;