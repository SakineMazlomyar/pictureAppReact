import React, { CSSProperties} from 'react';
import Modal from './Modal';
interface Props{
    choosenView:string,
}

interface State{
    openModul:Boolean
}
export default class DetailView extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state={
            openModul:false
        }
    }

    openModal = ()=>{
        this.setState({
            openModul:true
        })
    }
    closeModal = ()=>{
        this.setState({
            openModul:false
        })
    }

    render(){
        console.log(this.state.openModul)
        const modal = this.state.openModul ? (
            <Modal>
                <div style={modalStyle}>
                    <p style={paragrafStyle}>you are looking at {this.props.choosenView}</p>
                    <button style={modalChildStyle} onClick={this.closeModal}>Close Modal!</button>
                </div>
            </Modal>
          ) : null;
          let imgSrc = `../../assets/${this.props.choosenView}.jpg`
          return (
            <div style={divStyle}>
                <img style={imgStyle} src={imgSrc} onClick={this.openModal}/>
              {modal}
            </div>
          );
    }
}

const divStyle:CSSProperties = {
    width:"100%",

    flexGrow:1,
    display:"flex",
    flexDirection:"column"
}
const imgStyle:CSSProperties = {
    width:"100%",
    height:"30em",
    flexGrow:1

}

const modalStyle:CSSProperties = {
    position:"fixed",
    top:0,
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    opacity:0.5,
    textAlign:"center"
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