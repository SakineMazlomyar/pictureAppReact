import React from 'react'
import { style, media} from 'typestyle'
interface Props{
    src:string,
    name:string
    
}
interface State{
  
}
export default class ImgSection extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)
    }
    render(){

        return (
            <div className={divItemStyle}>
                <img className={pictureStyle} src={this.props.src}/>
                <span className={textStyle} >{this.props.name}</span>
            </div>
        
        )
    }
}

const divItemStyle = style(
    //MobileStyle
    media({minWidth:300}, {
        position:"relative",


    }),
    media({minWidth:600}, {
        position:"relative",
   
    }),
    media({minWidth:1000}, {
        position:"relative",
        
    })
)
const pictureStyle = style(
    media({minWidth:300}, {
        width:"100%",
        height: "8em",
        marginTop:"1em",
    
    }),
    media({minWidth:600}, {
        width:"100%",
        height: "8em",
        marginTop:"2em",
    }),
    media({minWidth:1000}, {
        marginTop:"1em",
        width:"100%",
        height: "8em",
       
    })
)
const textStyle = style(
    media({minWidth:300}, {
        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.1em"
    
    }),
    media({minWidth:600}, {
        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.1em"
    }),
    media({minWidth:1000}, {
        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.1em"
    })
)