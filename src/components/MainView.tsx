import React, { CSSProperties } from 'react';
import ImgSection from './ImgSection'
import { Link } from 'react-router-dom';
interface Props{
    src:string,
    name:string
}
interface State{
 
}
export default class MainView extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
    }
 
    render(){

        return(
            <div>
                <Link to={"/forest"}>
                    <ImgSection name="Forest" src="../../assets/forest.jpg" />
                </Link>
                <Link to={"/sky"}>
                    <ImgSection name="Sky" src="../../assets/sky.jpg" />
                </Link>
                <Link to={"/desert"}>
                    <ImgSection name="Desert" src="../../assets/desert.jpg" />
                </Link>
            </div>  
        )
    }
}
