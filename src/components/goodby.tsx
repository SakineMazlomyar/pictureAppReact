import * as React from 'react';

export interface Goodby {
    name:string
}

export class SayGoodBy extends React.Component<Goodby, {}> {

    
    render(){
        return(
        <h1>Now We Say Goodby! {this.props.name}</h1>
            
            )
    }
}