import React from 'react';
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hellow";
import { SayGoodBy } from "./components/goodby";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />
   
,
    document.getElementById("example")
);
