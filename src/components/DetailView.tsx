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
    toggleModal =()=>{
        this.setState({
            openModul: !this.state.openModul
        })

       
    }

    private get renderModal() {
        if(this.state.openModul) {
            return ( 
                <Modal>
                    <div style={modal}>
                        <p style={paragrafStyle}>you are looking at {this.props.choosenView}</p>
                        <button style={modalChildStyle} onClick={this.toggleModal}>Close Modal!</button>
                    </div>
                </Modal>
            )
        }
    }

    render(){
        let imgSrc = `../../assets/${this.props.choosenView}.jpg`
        return ( 
            <div style={divStyle} onClick={this.toggleModal}>
                <img style={imgStyle} src={imgSrc}/>
                {this.renderModal}
            </div>
        )
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

const modal:CSSProperties = {
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