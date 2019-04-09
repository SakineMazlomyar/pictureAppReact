import React, { CSSProperties } from 'react';

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
            <h1 style={navH1} onClick={this.props.goToMain}>React Playground</h1>
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
    padding: '0 1em'
}

const navH1: CSSProperties = {
    fontWeight:"bold",
    fontSize: "1.5em",

}
