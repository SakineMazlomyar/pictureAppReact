import * as React from 'react';
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hellow";
import { SayGoodBy } from "./components/goodby";

ReactDOM.render(
    <div style={{display:"flex", justifyContent:"center"}}>
    <Hello compiler="TypeScript" framework="React" />
    <SayGoodBy name="sakine" />

    </div>
,
    document.getElementById("example")
);