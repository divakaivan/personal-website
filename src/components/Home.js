import React from "react";
import styled from "styled-components";
import {SiApollographql} from "react-icons/si"
import {GrGraphQl} from "react-icons/gr"

import java from "../java-free-download.png";
import ReactTooltip from "react-tooltip";

const Div = styled.div`
  max-width: 700px;
`;

const Home = () => (
    <Div className="container">
        <section className="mb-5 text-justify">
            <div className="intro mb-4">
                <h2>Hello, my name is Ivan</h2>
            </div>
            <h5 className="mb-4">
                <em>
                    I am excited to become a developer. The day-to-day problem solving inspires me to think in creative ways
                    when writing different pieces of code. I want to learn more about the development process and keen to
                    expand my current language knowledge. Also excited to learn new languages and frameworks/libraries.
                </em>
            </h5>
            <h5 className="mx-2 ">How come I want to become a programmer but I study accounting at university?</h5>
            <h6 className="mx-2">
                <em>
                    I got inspired from my <a href="/work" style={{color: "inherit"}}>amazing placement</a>
                    at Lloyds Banking Group where I wrote my first line of code. And after the first few
                    months of learning and writing code, I knew that this is what I want to do.
                </em>
            </h6>
        </section>
        <section className="mb-4">
            <h2 className="mb-4">What do I do in my free time? </h2>
            <h6 className="text-justify">
                Besides study for my accounting modules and squeezing in some coding whenever I can...
                <ul className="mt-3">
                    <li>I love going to the gym and working out</li>
                    <li>Enjoy boxing for some extra mobility besides the gym</li>
                    <li>Gaming and Esports</li>
                    <li>
                        I love and watch the League of Legends pro scene from around the world (Korea, North America,
                        Europe and China). I enjoy watching some good LoL and discuss and analyze the gameplay with
                        other LoL esports lovers.
                    </li>
                </ul>
            </h6>
        </section>
        <section>
            <h2>Some of my skills:</h2>
            <h5>Frontend:</h5>
            <img width={75} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React"/>
            <SiApollographql size={75}/>
            <h5 className="mt-3">Backend:</h5>
            <img width={75} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="JavaScript"/>
            <GrGraphQl style={{color: "rgba(207, 0, 170, 0.85)"}} size={75}/>
            <img width={75} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" alt="Python"/>
            <img data-tip="Beginner" width={75} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/kotlin/kotlin.png" alt="Kotlin"/>
            <img data-tip="Beginner" width={50} src={java} alt="Java"/>
        </section>
        <h6 className="mt-4">More info on skills and what I am currently learning on my <a href="https://github.com/divakaivan" target="_blank" rel="noopener noreferrer" >GitHub Profile</a> readme.</h6>
        <ReactTooltip className="tooltip-extra-style" />
    </Div>
);

export default Home;