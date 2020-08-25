import React from "react";
import styled from "styled-components"

const CardDiv = styled.div`
  @media (min-width: 600px) {
    margin: 0 25px 0 25px;
  }
`;

const WorkExperience = () => {
    return (
        <>
            <CardDiv className="card">
                <div className="card-body">
                    <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>Analyst in Lloyds Banking Group</div>
                    <div className="card-subtitle mb-3 text-muted">Jul 2019 - Jul 2020</div>
                    <div className="card-text">
                        <ul>
                            <li>Developer in a project using industry-leading technologies to produce a web application to revolutionize how stress forecasts are ran and reported</li>
                            <li>Develop the Reporting model in Python, Pandas and PySpark</li>
                            <li>Write front end functionality with React</li>
                            <li>Inform and motivate colleagues on how to document their code</li>
                            <li>Create and maintain Python (Sphinx) and React (Styleguidist) documentation websites</li>
                        </ul>
                        <section>
                            Technologies used: &nbsp;
                            <img width={24} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="JavaScript"/>
                            |<img width={32} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React"/>
                            |<img width={32} src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" alt="Python"/>
                            | PySpark | Pandas |&#160;
                            <i className="fab haha fa-github"></i> |&#160;
                            <img width={28} src="https://github.com/devops-workflow/jenkins-icons/blob/master/icons/jenkins-logo-48x48.png?raw=true" alt="Jenkins"/>
                            <br/><br/>
                            <em>Other Skills:</em>
                            <ul>
                                <li>Develop and work under the agile framework - Scrum</li>
                                <li>Communicate the development process and updates with stakeholders</li>
                                <li>Teamwork, critical thinking, problem solving, attention to detail</li>
                            </ul>
                            <em>Extracurricular activities:</em>
                            <ul>
                                <li>
                                    Teach Python to other placement students and becoming a LBG python mentor for delivering
                                    in-person and online series of classes aiming to introduce hundreds of LBG colleagues to the basics of Python
                                    (github profile picture is from the first session).
                                </li>
                                <li>Organise a full day FIFA 20 charity tournament for LBG colleagues</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </CardDiv>
            {/* TODO ADD OTHER JOB CARDS HERE */}
            <CardDiv className="card mt-4">
                <div className="card-title">Hello</div>
            </CardDiv>
        </>
    )
};

export default WorkExperience;