import React from "react";
import {CardDiv} from "./WorkExperience";


const Extracurricular = () => {

    return (
        <>
            <CardDiv className="card mt-4">
                <div className="card-body">
                    <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>Treasurer in the Essex university Sci-Fan society</div>
                    <div className="card-subtitle mb-3 text-muted">Sep 2018 - Jun 2019</div>
                    <div className="card-text">
                        <ul>
                            <li>Create, plan and manage the society's budget</li>
                            <li>Communicate with team to ensure events are well planned and run smoothly</li>
                            <li>Prepare budget reports to inform fellow executives and society members of the society's monetary situation</li>
                            <li>Organise and plan events with my fellow executives</li>
                            <li>Won the <strong>first</strong> "Golden society standard" for the Sci-Fan society for being collaborative and eventful</li>
                        </ul>
                        <em>Skills gained:</em>
                        <ul>
                            <li>Teamwork, budget handling, organization, communication, meeting deadlines, goal setting and prioritising</li>
                        </ul>
                    </div>
                </div>
            </CardDiv>
            <CardDiv className="card mt-4">
                <div className="card-body">
                    <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>Peer mentor in Essex Business School</div>
                    <div className="card-subtitle mb-3 text-muted">Sep 2018 - Jun 2019</div>
                    <div className="card-text">
                        <ul>
                            <li>Help first year students settle into their new lives</li>
                            <li>Deliver and lead introductory seminars with a team of students</li>
                            <li>Act as a point of trust and first contact for issues or help for students</li>
                        </ul>
                        <em>Skills gained:</em>
                        <ul>
                            <li>Presentation, teamwork, mentoring</li>
                        </ul>
                    </div>
                </div>
            </CardDiv>
            {/* TODO ADD OTHER CARDS HERE */}
        </>
    )
};

export default Extracurricular;