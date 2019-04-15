import React,{ CSSProperties } from 'react';
import { BounceLoader } from 'react-spinners';

export default function(){

    return(
        <div style={div}>
            <BounceLoader color="red" size={1.7} sizeUnit="em" />
        </div>
    )
}

const div:CSSProperties={
    width:"100%",
    height:"100%",
    display:"flex",
    flexDirection:"column"
}