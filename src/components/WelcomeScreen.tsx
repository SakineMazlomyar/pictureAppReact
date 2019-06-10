import React, { CSSProperties } from 'react';
import Modal from './Modal';

import Layout from './Layout'


interface Props{

}

interface State{
    openModal:boolean
}

export default class WelcomeScreen extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state ={
            openModal:true
        }
    }

    
    closeWelcomeScreen=()=>{
        this.setState({
            openModal:false
        })
    
    }

    openWelcomeScren=()=>{
        return (
            <div style={modalStyle}>
                <p style={text}>These are our new features!</p>
                <button style={button} onClick={this.closeWelcomeScreen}>Go to play-ground!</button>
                <img style={img} src="../../assets/search-input.jpg"/>
                <img style={img} src="../../assets/search-input-two.png"/>
            
            </div>
            )
    }

    private get renderModal() {
        if (this.state.openModal) {
            return (
               <div>
                   {this.openWelcomeScren()}
               </div>
              )
        }
    }

    render(){ 
        return (
            <Modal>
                {this.renderModal}
            </Modal>
        )
    }
}

const modalStyle:CSSProperties={
    position:"fixed",
    top:0,
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    
}


const img:CSSProperties={
    width:"50%",
    margin:"auto"
}

const button:CSSProperties={
    width:"50%",
    height:"2em",
    color:"blue",
    fontWeight:"bold",
    fontSize:"1.5em",
    margin:"auto"
}
const text:CSSProperties={
    margin:"auto"
}