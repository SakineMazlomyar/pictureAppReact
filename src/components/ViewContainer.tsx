import React, { CSSProperties } from 'react';
import { style, media} from 'typestyle'
import MainView from './MainView';
import DetailView from './DetailView';
import  { View } from './Layout'
interface Props {
    showTheRightView:"main"|"forest"|"desert"|"sky",
    onClickSection:(viewName:View)=>void
    
}
export default class ViewContainer extends React.Component<Props, {}>{
    constructor(props:Props){
        super(props)
        this.state ={}
    }

    
    render(){
      
        if(this.props.showTheRightView === "main") {
            return  <MainView  onClickSection={this.props.onClickSection}/>

        }

        return <DetailView  choosenView={this.props.showTheRightView}/>
        
           
    }
}



