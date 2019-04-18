import React,{CSSProperties} from 'react';
import HeaderSection from './HeaderSection';
import { style, media} from 'typestyle'
import TextSection from './TextSection';
import ImgSection from './ImgSection';


interface Props{
    choosenView:string,
}
interface State{
    
}
export default class DetailView extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        
    }
    render() {
        return (
            
            <div className={divStyle} style={{ backgroundImage: `url(${"../../assets/"+this.props.choosenView +".jpg"})`}}>
                <HeaderSection choosenView={this.props.choosenView}/>
                <TextSection choosenView={this.props.choosenView}/>
                <ImgSection choosenView={this.props.choosenView} />
            </div>
        )
    
    }
}
const divStyle = style(
    {
    height:"100%",
    overflowY:"auto",
    }
)
  
