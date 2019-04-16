import React,{CSSProperties} from 'react';
interface Props{
    choosenView:string,
}
interface State{
   
}
export default class ImgSection extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        
    }
    
    render() {
        let imgSrc = `../../assets/${this.props.choosenView}.jpg`;
        return (
            
              <div style={divStyle}>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
                  <img style={imgStyle} src={imgSrc}/>
              </div>
        )
    
    }
}

const divStyle:CSSProperties = {
    width:"100%",
    display:"flex",
    flexWrap:"wrap"
}
const imgStyle:CSSProperties = {
    width:"15%",
    height:"10em",
}