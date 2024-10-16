import React from 'react';
import '../ReportIncident.css';  // Ensure the CSS file name is correct
// import Em from '../../../components/Emergency/Em';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";

const ReportButton = () => {
    // Function to handle click for reporting incidents
    const handleClick = (category) => {
        // Here, you can replace this with any logic needed for handling reports
        console.log(`Reporting category: ${category}`);
        alert(`You selected to report: ${category}`);
    };

    return (
        <div className='ReportContainer'>
            {/* <Em /> */}
            <div className="Reporttheblock">
                <div className="FinalAlign">
                    <div className="Report-An-Incident-Immediately">Report An Incident Immediately</div>
                    <div className="ReportLine"></div>
                </div>
                <div className="TextBoxText">
                    <div className="forLinks">
                        <Link to="/" className="Home">
                            <span className="IncidentHeader">HomePage</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/reportincident" className="ReportIncident">
                            <span className="IncidentHeader">Report Incident</span>
                        </Link>
                        <FaArrowRightLong className='ArrowIcon' />
                        <Link to="/reportbutton" className="ReportButton">
                            <span className="IncidentHeader">Report</span>
                        </Link>
                    </div>
                    <div className="AlignmentForVictimReport">
                        <Link to="/reportbutton" className="BoxVictimReport" onClick={() => handleClick("I report")}>
                            <span className="TextVictimReport">I report</span>
                        </Link>
                    </div>
                </div>
                <div className="NormalPagePrev">
                    <Link to="/reportincident" className="PreviousButton">
                        <GrLinkPrevious className='ArrowIcon' />
                        <div>Previous</div>
                    </Link>
                </div>
            </div>

            <div className="CSSForSmallerButton">
                <Link to="/cyberbullying" className="SmallerButtonCSS" onClick={() => handleClick("Cyber Bullying")}>
                    <span className="TextVictimReport">Cyber Bullying</span>
                </Link>
                <Link to="/onlinefrauds" className="SmallerButtonCSS" onClick={() => handleClick("Online Fraud")}>
                    <span className="TextVictimReport">Online Fraud</span>
                </Link>
                <Link to="/childexp" className="SmallerButtonCSS" onClick={() => handleClick("Child Exploitation")}>
                    <span className="TextVictimReport">Child Exploitation</span>
                </Link>
                <Link to="/hacking" className="SmallerButtonCSS" onClick={() => handleClick("Hacking")}>
                    <span className="TextVictimReport">Hacking</span>
                </Link>
            </div>
        </div>
    );
}

export default ReportButton;
