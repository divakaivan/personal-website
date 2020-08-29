import React from "react";
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const ToggleTheme = ({darkMode, setDarkMode}) => (
    <div className="toggle-container float-right">
        <span style={{color: darkMode ? "grey" : "yellow"}}><i className="sun fas fa-sun"></i></span>
        <label style={{marginTop: "9px"}} className="mx-1">
            <Toggle defaultChecked={darkMode} className={`theme-toggle ${darkMode ? "dark-mode-true" : "dark-mode-false"}`} icons={false} onChange={()=>setDarkMode(prevMode => !prevMode)}/>
        </label>
        <span style={{color: darkMode ? "slateblue" : "grey"}}><i className="moon fas fa-moon"></i></span>
    </div>
);

export default ToggleTheme;