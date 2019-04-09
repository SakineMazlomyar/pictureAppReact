import React,{CSSProperties} from 'react';
import MainView from './MainView';
import DetailView from './DetailView';
import  { Route} from 'react-router'
export default class ViewContainer extends React.Component{
    render(){
        return (
        <div style={divStyle}>
            <Route exact path="/" component={MainView}  />
            <Route path="/forest"  render={()=> <DetailView choosenView={"forest"}/>}/>
            <Route path="/desert" render={()=> <DetailView choosenView={"desert"}/> }/>
            <Route path="/sky" render={()=> <DetailView choosenView={"sky"}/> }/>
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



