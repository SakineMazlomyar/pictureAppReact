import React,{CSSProperties} from 'react';
import Modal from '../Modal';
import { ThemeContext } from '../contexts/themeContext'
interface Props{
    choosenView:string,
}
interface State{
}
export default class TextSection extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        
        
    }
    private get handleTextdisplaying() {
        if(this.props.choosenView == "forest"){
            return (<p style={paragraph}>A forest is a large area dominated by trees.[1] Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function.[2][3][4] According to the widely used[5][6] Food and Agriculture Organization definition, forests covered 4 billion hectares (9.9×109 acres) (15 million square miles) or approximately 30 percent of the world's land area in 2006.[4]

            Forests are the dominant terrestrial ecosystem of Earth, and are distributed around the globe.[7] Forests account for 75% of the gross primary production of the Earth's biosphere, and contain 80% of the Earth's plant biomass. Net primary production is estimated at 21.9 gigatonnes carbon per year for tropical forests, 8.1 for temperate forests, and 2.6 for boreal forests.[7]
            
            Forests at different latitudes and elevations form distinctly different ecozones: boreal forests near the poles, tropical forests near the equator and temperate forests at mid-latitudes. Higher elevation areas tend to support forests similar to those at higher latitudes, and amount of precipitation also affects forest composition.
             resources, can negatively affect forest ecosystems.</p>)
        } else if(this.props.choosenView == "desert"){
            return (<p style={paragraph}>
                A desert is a barren area of landscape where little precipitation occurs and, 
                consequently, living conditions are hostile for plant and animal life. 
                The lack of vegetation exposes the unprotected surface of the ground to the processes 
                of denudation. About one-third of the land surface of the world is arid or semi-arid. 
                This includes much of the polar regions where little precipitation occurs and which are sometimes 
                called polar deserts or "cold deserts". Deserts can be classified by the amount of precipitation 
                that falls, by the temperature that prevails, by the causes of desertification or by their geographical location.
            </p>)
        }else {
            return (<p style={paragraph}>During daylight, the sky appears to be blue because air scatters more blue 
                sunlight than red.[1][2][3][4] At night, the sky appears to be a mostly dark 
                surface or region spangled with stars. During the day, the Sun can be seen in 
                the sky unless obscured by clouds. In the night sky (and to some extent during the day) 
                the Moon, planets and stars are visible in the sky. Some of the natural phenomena seen in 
                the sky are clouds, rainbows, and aurorae. Lightning and precipitation can also be seen in the 
                sky during storms. Birds, insects, aircraft, and kites are often considered to fly in the sky. 
                Due to human activities, smog during the day and light pollution during the night are often seen 
                above large cities.</p>)
        }
    }
    
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme})=>(
                <div style={{...divStyle, backgroundColor:theme.foreground.secondary}}>
                    {this.handleTextdisplaying}
                </div>
                )}
            </ThemeContext.Consumer>

        )
    
    }
}

const divStyle:CSSProperties={
    border: "1px solid gray",
    padding: "1em",
    backgroundColor:"black",
    

}
const paragraph:CSSProperties={
    textIndent:"3em",
    textAlign:"center",
    color:"white"

}