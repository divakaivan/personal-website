import React from "react";

const ToggleTheme = ({darkMode, setDarkMode}) => (
    <div className="toggle-container float-right">
        <span style={{color: darkMode ? "grey" : "yellow"}}><i className="sun fas fa-sun"></i></span>
        <span className="toggle">
            <input
                checked={darkMode}
                onChange={() => setDarkMode(prevMode => !prevMode)}
                id="checkbox"
                className="checkbox"
                type="checkbox"
            />
            <label htmlFor="checkbox"/>
            </span>
        <span style={{color: darkMode ? "slateblue" : "grey"}}><i className="moon fas fa-moon"></i></span>
    </div>
);

export default ToggleTheme;