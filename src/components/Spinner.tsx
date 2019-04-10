import React, {CSSProperties} from 'react';
import { BounceLoader } from 'react-spinners';

export default function(){

    return(
        <div >

            <BounceLoader color="red" size={1.7} sizeUnit="em"/>
        </div>
    )
}

const spinnerStyle:CSSProperties ={
    backgroundColor:"blue",
    fontSize:"1.7em"
}