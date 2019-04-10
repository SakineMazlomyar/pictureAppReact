import React,{Suspense} from 'react';
import { centerContent } from './css';
import {Layout} from './Layout';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './Spinner';



export class App extends React.Component{
    render() {
        return (
        <Suspense fallback={<Spinner />}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </Suspense>
        )
    
    }
}