import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import {ThemeContext} from './contexts/themeContext'
export default class Navbar extends React.Component{
   

    render(){

        return(
        <ThemeContext.Consumer>
            {({theme, toggleTheme})=>(
                 <nav style={{...navStyle, backgroundColor:theme.foreground.secondary}}>
                    <Link to="/" style={navH1}> React Playground </Link>
                    <button style={buttonStyle} onClick={toggleTheme}> Change Theme</button>
                </nav>  
            )

            }

        </ThemeContext.Consumer>
                 
        )
    }
}
const buttonStyle:CSSProperties = {
    marginRight:"1em"
}

const navH1: CSSProperties = {
    fontWeight:"bold",
    fontSize: "1.5em",
    color:"white"

}

const navStyle: CSSProperties = {
    height:'4em', 
    display:'flex', 
    alignItems:'stretch', 
    padding: '0'
}
