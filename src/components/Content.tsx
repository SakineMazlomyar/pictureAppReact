import React, { CSSProperties } from 'react';
export default class Content extends React.Component{
    render(){
        return(
        <div style={divContent}>
            <div style={divItem}><img style={divPicture} src="../../assets/forest.jpg"/></div>
           <div style={divItem}><img style={divPicture} src="../../assets/sky.jpg"/></div>
            <div style={divItem}><img style={divPicture} src="../../assets/desert.jpg"/></div>
        </div>
           
        )
    }
}

const divContent:CSSProperties = {
    position:"relative",
    display:"flex",
    flexDirection:"column",
}

const divItem:CSSProperties = {
    position:"relative",
/*     width:"100%",
    height:"100%" */
}
const divPicture:CSSProperties = {
    position:"relative",

    width:"100%",
    height: "17em"
    
}