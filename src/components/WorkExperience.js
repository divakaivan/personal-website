import React from "react";
import styled from "styled-components"

export const CardDiv = styled.div`
  @media (min-width: 600px) {
    margin: 0 25px 0 25px;
  }
`;

const WorkExperience = () => {

    const jobs = {
        LBG: "Analyst in Lloyds Banking Group",
        UCB: "Business processes management intern in UniCredit Bulbank",
        EURO: "Accounting intern in Euro Fiance 2007 Ltd",
        FIB: "Compliance intern in First Investment Bank"
    };

    return (
        <>
            <CardDiv className="card">
                <div className="card-body">
                    <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>{jobs.LBG}</div>
                    <div className="card-subtitle mb-3 text-muted">Jul 2019 - Jul 2020</div>
                    <div className="card-text">
                        <ul>
                            <li>Developer in a project using industry-leading technologies to produce a web application to revolutionize how stress forecasts are ran and reported</li>
                            <li>Develop the Reporting model in Python, Pandas and PySpark</li>
                            <li>Write front end functionality with React</li>
                            <li>Inform and motivate colleagues on how to document their code</li>
                            <li>Create and maintain Python (Sphinx) and React (Styleguidist) documentation websites</li>
                            <li>Test and document the UI of the web app</li>
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
                                <li>Teamwork, critical thinking, problem solving, attention to detail, decision-making, stakeholder management</li>
                            </ul>
                            <em>Extracurricular activities:</em>
                            <ul>
                                <li>
                                    Teach Python to other placement students and become a LBG python mentor for delivering
                                    in-person and live online series of classes aiming to introduce hundreds of LBG colleagues to the basics of Python
                                    (github profile picture is from the first session).
                                </li>
                                <li>Organise a full day FIFA 20 charity tournament for LBG colleagues</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </CardDiv>
            <CardDiv className="card mt-4">
                <div className="card-body">
                    <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>{jobs.UCB}</div>
                    <div className="card-subtitle mb-3 text-muted">Jul 2018 - Aug 2019</div>
                    <div className="card-text">
                        <ul>
                            <li>Reconciling process documents before being published on the Bank's website</li>
                            <li>Initiate a 3-day deadline for discussions for changes on process documents before their publication</li>
                            <li>Reduced the amount of documents on the website, by identifying old/outdated ones</li>
                        </ul>
                        <em>Other Skills:</em>
                        <ul>
                            <li>Decision-making, conflict resolution, stakeholder management</li>
                        </ul>
                    </div>
                </div>
            </CardDiv>
            <CardDiv className="card mt-4" target="euro-finance">
                <div className="card-body">
                    <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>{jobs.EURO}</div>
                    <div className="card-subtitle mb-3 text-muted">2015 - 2017 (during three summers, 5 months overall)</div>
                    <div className="card-text">
                        <ul>
                            <li>Handled the firm's cash flows</li>
                            <li>Initiate meetings with clients to help with VAT registration</li>
                            <li>Came up with an initiative on how to cut printing bank statements from 100 to 10 sheets per month and also save time for the accountant who was going through the statements</li>
                        </ul>
                        <em>Other Skills:</em>
                        <ul>
                            <li>Customer engagement, multi-tasking, time management, critical thinking</li>
                        </ul>
                    </div>
                </div>
            </CardDiv>
            <CardDiv className="card mt-4">
                <div className="card-body">
                    <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>{jobs.FIB}</div>
                    <div className="card-subtitle mb-3 text-muted">Jul 2016</div>
                    <div className="card-text">
                        <ul>
                            <li>Research competitor interest rates</li>
                            <li>Form and present a report in front of the heads of the department</li>
                            <li>On own initiative, created a timetable with deadlines for when specific regulation translations needed to be completed</li>
                        </ul>
                        <em>Other Skills:</em>
                        <ul>
                            <li>Researching, presenting</li>
                        </ul>
                    </div>
                </div>
            </CardDiv>
            {/* TODO ADD OTHER JOB CARDS HERE */}
        </>
    )
};

export default WorkExperience;