import React,{CSSProperties, Suspense } from 'react';
import { Switch } from 'react-router-dom' ;
import Spinner from './Spinner';
import ErrorBoundary from './ErrorBoundary';
import  { Route} from 'react-router';
const DetailView = React.lazy(()=>import(/* webpackChunkName:"DetailView" */ './DetailView/DetailView'));
const MainView = React.lazy(()=>import(/* webpackChunkName:"MainView" */ './MainView'));

export default class ViewContainer extends React.Component{
   
    render(){
        return (
        <React.Fragment>
        <ErrorBoundary fallbackUI={<h1>Something went wrong in router</h1>}>
            
            <Suspense fallback={<Spinner />}>               
                <Switch>
                    <React.Fragment>
                        <Route exact path="/" component={MainView}  />
                        <Route path="/forest"  render={()=> <DetailView choosenView={"forest"}/>}/>
                        <Route path="/desert" render={()=> <DetailView choosenView={"desert"}/> }/>
                        <Route path="/sky" render={()=> <DetailView choosenView={"sky"}/> }/>
                    </React.Fragment>
                </Switch>
            </Suspense>
          
        </ErrorBoundary>
        </React.Fragment>
        
        
        )         
    }
}






 /* 
    <div style={divStyle}>
    
        <Route exact path="/" component={MainView}  />
        <Route path="/forest"  render={()=> <DetailView choosenView={"forest"}/>}/>
        <Route path="/desert" render={()=> <DetailView choosenView={"desert"}/> }/>
        <Route path="/sky" render={()=> <DetailView choosenView={"sky"}/> }/>

    </div>
 
 
 */
