import React,{CSSProperties} from 'react';
import Navbar from './Navbar';
import ViewContainer from './ViewContainer';
import { ThemeContext } from './contexts/themeContext'
export default class Layout extends React.Component{
    
    render(){
        return(
       
            <ThemeContext.Consumer>
                {({ theme, toggleTheme })=>(
                     <div style={{...divStyle, backgroundColor:theme.foreground.secondary}}>
                        <Navbar/>
                        <ViewContainer/>
                     </div>
                )

                }

          
            </ThemeContext.Consumer>
     

        )
    }
}
/* 
  <Navbar/>
<ViewContainer/>

*/
const divStyle:CSSProperties={
    height:"100%",
    margin:0
}



