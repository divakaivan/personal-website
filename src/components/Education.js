import React from "react";
import {CardDiv} from "./WorkExperience";

const Education = () => (
    <>
        <CardDiv className="card mt-4">
            <div className="card-body">
                <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>BSc Accounting (with Placement)</div>
                <div className="card-subtitle mb-3 text-muted">University of Essex 2017 - 2021</div>
                <div className="card-text">
                    <ul>
                        <li>Expected First</li>
                        <li>Included on the Dean's List for excellence</li>
                    </ul>
                </div>
            </div>
        </CardDiv>
        <CardDiv className="card mt-4">
            <div className="card-body">
                <div className="card-title font-weight-bold" style={{fontSize: "25px"}}>Customs and Tax administration</div>
                <div className="card-subtitle mb-3 text-muted">National Trade and Banking high school 2012 - 2017</div>
                <div className="card-text">
                    <ul>
                        <li>Diploma grade: 5.75</li>
                        <li>Key subjects: IT, Finance, Tax, Accounting</li>
                        <li>Won award for exceptional student performance upon graduation</li>
                    </ul>
                </div>
            </div>
        </CardDiv>
    </>
);

export default Education;