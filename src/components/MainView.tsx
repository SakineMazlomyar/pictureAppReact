import React, { CSSProperties } from 'react';
import { style, media} from 'typestyle'
/* import  { View } from './Layout' */
import { Link } from 'react-router-dom';
const containerStyle = style(
    media({ minWidth:300}, {     
    position:"relative",
    display:"flex",
    flexDirection:"column",
    flexGrow:1
    
    }),
    media({ minWidth:601}, { 
    position:"relative",
    display:"flex",
    flexDirection:"column",
    padding:"1em 1em",
    flexGrow:1
    }),
    media({minWidth:1000}, {
    position:"relative",
    display:"flex",
    flexDirection:"column",
    padding:"1em 1em"
})
    
)


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
        top: "15%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.1em"
    
    }),
    media({minWidth:600}, {
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.1em"
    }),
    media({minWidth:1000}, {
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize:"1.1em"
    })
) 
/* interface Props{
    onClickSection:(viewName:View)=>void
} */
export default class MainView extends React.Component{
/*     constructor(props: Props){
        super(props)
    } */
    /* 
    onClick={()=>{this.props.onClickSection('forest')}}
    onClick={()=>{this.props.onClickSection('sky')}}
    onClick={()=>{this.props.onClickSection('desert')}}>
    */

    render(){
        return(
        <div>
            <Link to={"/forest"} className={divItemStyle}>
                    <img className={pictureStyle} src="../../assets/forest.jpg"/>
                    <span className={textStyle} >Forest</span>
            </Link>
            <Link to={"/sky"} className={divItemStyle}>
                    <img  className={pictureStyle} src="../../assets/sky.jpg"/> 
                    <span className={textStyle}>Sky</span> 
            </Link>
            <Link to={"/desert"} className={divItemStyle}>
                <img className={pictureStyle} src="../../assets/desert.jpg"/>
                 <span className={textStyle}>Desert</span> 
            
            </Link>
        </div>
           
        )
    }
}

const imgStyle:CSSProperties={
    width:"100%",

}