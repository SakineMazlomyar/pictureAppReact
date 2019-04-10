import React,{Suspense} from 'react';
import { centerContent } from './css';
import {Layout} from './Layout';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './Spinner';
import ErrorBoundary from './ErrorBoundary';



export class App extends React.Component{
    
    render() {
        return (
        <Suspense fallback={<Spinner />}>
            <BrowserRouter>
                <ErrorBoundary fallbackUI={<h1>Some thins went down while loading layout</h1>}>
                    <Layout/>
                </ErrorBoundary>
            </BrowserRouter>
        </Suspense>
        )
    
    }
}