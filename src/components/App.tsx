import React,{Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Monkey from './Monkey';
import WelcomeScreen from './WelcomeScreen'
import { string } from 'prop-types';
const Layout = React.lazy(()=>import(/* webpackChunkName: "Layout" */'./Layout'));
import ThemeProvide from './contexts/contextProvider'


export class App extends React.Component{
    render() {
        return (
            

            <BrowserRouter>
                <ErrorBoundary fallbackUI={<h1>Some thins went down while loading layout</h1>}>
                    <Suspense fallback={<Monkey />}>
                    <ThemeProvide>

                        <Layout/>
                    </ThemeProvide>
                    </Suspense>
                </ErrorBoundary>
            </BrowserRouter>
        
          
        )
    
    }
}

/*
<WelcomeScreen /> 

*/