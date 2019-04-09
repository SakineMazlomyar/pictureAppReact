import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
interface Props {
    goToMain: ()=>void
}
export default class Navbar extends React.Component<Props>{
    constructor(props:Props){
        super(props)
    }
    render(){
        return(
        
        <nav style={navbar}>
            
            <Link to="/" style={navH1} onClick={this.props.goToMain}> React Playground </Link>
            
        </nav>            
        )
    }
}

const navbar: CSSProperties = {
    height:'4em',
    backgroundColor:'black',
    color:'#E1E1E1',
    display:'flex',
    alignItems:'stretch',
    padding: '0'
}

const navH1: CSSProperties = {
    fontWeight:"bold",
    fontSize: "1.5em",

}
