import React,{Suspense} from 'react';
import { centerContent } from './css';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './Spinner';
import ErrorBoundary from './ErrorBoundary';
import Monkey from './Monkey';

const Layout = React.lazy(()=>import(/* webpackChunkName: "Layout" */'./Layout'));

export class App extends React.Component{
    
    render() {
        return (
        <Suspense fallback={<Monkey />}>
            <BrowserRouter>
                <ErrorBoundary fallbackUI={<h1>Some thins went down while loading layout</h1>}>
                    <Layout/>
                </ErrorBoundary>
            </BrowserRouter>
        </Suspense>
        )
    
    }
}