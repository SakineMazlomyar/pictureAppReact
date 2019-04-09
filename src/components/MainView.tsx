import React, { CSSProperties } from 'react';
import { style, media} from 'typestyle'
import  { View } from './Layout'
const containerStyle = style(
    media({ minWidth:300}, {     
    position:"relative",
    display:"flex",
    flexDirection:"column"
    }),
    media({ minWidth:601}, { 
    position:"relative",
    display:"flex",
    flexDirection:"column"
    }),
    media({minWidth:1000}, {
    position:"relative",
    display:"flex",
    flexDirection:"column"})
    
)


const divItemStyle = style(
    //MobileStyle
    media({minWidth:300}, {
        position:"relative",
        width:"100%",
        height: "10em",
        paddingTop: "0.5em",
        backgroundColor: "#202020"
    }),
    media({minWidth:600}, {
        position:"relative",
        width:"100%",
        height: "10em",
        paddingTop: "1.5em",
        backgroundColor: "#202020"
    }),
    media({minWidth:1000}, {
        position:"relative",
        width:"100%",
        height: "10em",
        paddingTop: "2.5em",
        backgroundColor: "#202020"
    })
)

const pictureStyle = style(
    media({minWidth:300}, {
        position:"absolute",
        width:"100%",
        height: "10em",
    
    }),
    media({minWidth:600}, {
        position:"absolute",
        width:"100%",
        height: "10em"
    }),
    media({minWidth:1000}, {
        position:"absolute",
        width:"100%",
        height: "10em"
    })
)
const textStyle = style(
    media({minWidth:300}, {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.5em"
    
    }),
    media({minWidth:600}, {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.5em"
    }),
    media({minWidth:1000}, {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.5em"
    })
)
interface Props{
    onClickSection:(viewName:View)=>void
}
export default class MainView extends React.Component<Props>{
    constructor(props: Props){
        super(props)
    }

    render(){
        return(
        <div className={containerStyle}>
            <div className={divItemStyle} onClick={()=>{this.props.onClickSection('forest')}}>
                    <img className={pictureStyle} src="../../assets/forest.jpg"/>
                    <span className={textStyle}>Forest</span>
            </div>
            <div className={divItemStyle} onClick={()=>{this.props.onClickSection('sky')}}>
                    <img className={pictureStyle} src="../../assets/sky.jpg"/> 
                    <span className={textStyle}>Sky</span> 
            </div>
            <div className={divItemStyle} onClick={()=>{this.props.onClickSection('desert')}}>
                <img className={pictureStyle} src="../../assets/desert.jpg"/>
                 <span className={textStyle}>Desert</span> 
            
            </div>
        </div>
           
        )
    }
}

/* const divContent:CSSProperties = {
    position:"relative",
    display:"flex",
    flexDirection:"column",
}

const divItem:CSSProperties = {
    position:"relative",
    width:"100%",
    height: "10em",
    paddingTop: "2.5em",
    backgroundColor: "#202020"
}
const divPicture:CSSProperties = {
    position:"absolute",

    width:"100%",
    height: "10em"
    
}
const divText:CSSProperties = {
    
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize:"1.5em"
      
    
} */