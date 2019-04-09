import React, { CSSProperties } from 'react';


interface Props{
    choosenView:string
}

export default class DetailView extends React.Component<Props>{
    constructor(props:Props){
        super(props)
    }
    render(){
        let imgSrc = `../../assets/${this.props.choosenView}.jpg`
        
        return(
        <div style={divStyle}>
            <img style={imgStyle} src={imgSrc}/>
    
            
        </div>
           
        )
    }
}
const divStyle:CSSProperties = {
    width:"100%",
    flexGrow:1
}
const imgStyle:CSSProperties = {
    position:"absolute",
    width:"100%",
    height:"631px"

}
