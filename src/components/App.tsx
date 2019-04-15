import React,{Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Monkey from './Monkey';

import WelcomeScreen from './WelcomeScreen'

const Layout = React.lazy(()=>import(/* webpackChunkName: "Layout" */'./Layout'));
export class App extends React.Component{
    
    render() {
        return (
            <BrowserRouter>
                <ErrorBoundary fallbackUI={<h1>Some thins went down while loading layout</h1>}>
                    <WelcomeScreen />
                    <Suspense fallback={<Monkey />}>
                        <Layout/>
                    </Suspense>
                </ErrorBoundary>
            </BrowserRouter>
          
        )
    
    }
}