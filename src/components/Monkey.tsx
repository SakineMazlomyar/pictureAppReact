import React,{CSSProperties} from 'react';

export default class Monkey extends React.Component{

    render(){
        return(
            <div style={div}>
                <p style={text}>Sidan laddas här snart...!</p>

            </div>
        )
    }
}

const div:CSSProperties={
    width:"100%",
    height:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    backgroundColor:"white"
}
const text:CSSProperties={
    color:"black",
    fontSize:"2em",
    textAlign:"center"
}