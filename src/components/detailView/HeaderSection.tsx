import React,{CSSProperties} from 'react';
import Modal from '../Modal';
import { ThemeContext } from '../contexts/themeContext';
interface Props{
    choosenView:string,
}
interface State{
    openModul:Boolean
}
export default class HeaderSection extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state={
            openModul:false
        }
        
        
    }
    toggleModal = ()=>{
        this.setState({
            openModul:!this.state.openModul
        })
    }
    render() {
        const modal = this.state.openModul ? (
            <Modal>
                <div style={modalStyle}>
                    <p style={paragrafStyle}>you are looking at {this.props.choosenView}</p>
                    <button style={modalChildStyle} onClick={this.toggleModal}>Close Modal!</button>
                </div>
            </Modal>
          ) : null;
        return (
            <ThemeContext.Consumer>
                {({theme})=>(
                <div style={{...divStyl, backgroundColor:theme.foreground.secondary}}>
                    <span style={spanStyle}>{this.props.choosenView}</span>
                    <button style={buttonStyle} onClick={this.toggleModal}>Open Modal Here!</button>
                    {modal}
                </div>
                )

                }


            </ThemeContext.Consumer>

        )
    
    }
}
const divStyl:CSSProperties={
    position:"relative",
    width:"100%",
    height:"5em",
    display:"flex",
    flexDirection:"row"

}
const modalStyle:CSSProperties = {
    position:"fixed",
    top:0,
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    opacity:0.5,
    textAlign:"center",

}

const modalChildStyle:CSSProperties = {
    marginTop:"10"
}

const paragrafStyle:CSSProperties = {
    fontSize:"2em",
    marginTop:"8em",
    opacity:1,
    color:"white",
    fontWeight:"bold"
    

}

const buttonStyle:CSSProperties ={
    position:"absolute",
    top:"1em",
    right:"1em",
    color:"white",
    backgroundColor:"black"

}

const spanStyle:CSSProperties={
    position:"absolute",
    left:"1em",
    top:"1em",
    fontSize:"1.1em",
    color:"white",
    fontWeight:"bold"

}