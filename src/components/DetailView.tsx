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
        return( <img style={imgStyle} src={imgSrc}/>)
    }
}
const imgStyle:CSSProperties = {
    width:"100%",
    flexGrow:1



}
