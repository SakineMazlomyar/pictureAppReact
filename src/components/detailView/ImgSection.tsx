import React,{CSSProperties} from 'react';
import axios from 'axios';
import { ThemeContext } from '../contexts/themeContext'
interface Props{
    choosenView:string,
}

interface ImgInfo{
    full:string
    raw:string,
    regular:string,
    small:string,
    thumb:string
}
interface State{
   urlImgs:ImgInfo[]
}
export default class ImgSection extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state={
            urlImgs:[{
                full:'',
                raw:'',
                regular:'',
                small:'',
                thumb:''
            }]
        }
        
    }
    
    
    async componentDidMount(){
        try{
            axios.get("https://api.unsplash.com/search/photos/",{
                params:{
                    client_id:"d3a2943e8a551d6f68564b07dc483cfef2b2387c79120eef05562f5102cbfa34",
                    query:this.props.choosenView,
                    count:24,
                    per_page:40		


                }
            }).then((reponse)=>{
                const imgs = reponse.data.results
            interface ImgInfo{
                full:string
                raw:string,
                regular:string,
                small:string,
                thumb:string
            }
    
            let test:ImgInfo[] = []
            for(let i = 0; i<reponse.data.results.length; i++) {
                let full = reponse.data.results[i].urls.full
                let raw = reponse.data.results[i].urls.raw
                let regular = reponse.data.results[i].urls.regular
                let small = reponse.data.results[i].urls.small
                let thumb = reponse.data.results[i].urls.thumb
                let testTwo = {
                    full:full,
                    raw:raw,
                    regular:regular,
                    small:small,
                    thumb:thumb
                }
                
                test.push(testTwo)
            }
            this.setState({
                urlImgs:test
            })
                
            })
        }catch(error){
            console.error(error)
        }
    }

    private get displayImg(){
            const imgs = this.state.urlImgs.map((element)=>{
                return (<img 
                    key={element.small}
                    style={imgStyle} 
                    src={element.small}
                    
                    />)
            })

            return imgs
    }
    render() {
        let imgSrc = `../../assets/${this.props.choosenView}.jpg`;
        return (
            <ThemeContext.Consumer>
                {({theme})=>(
                <div style={{...divStyle, backgroundColor:theme.foreground.secondary}}>
                    {this.displayImg}
                </div>
                )}
            </ThemeContext.Consumer>

        )
    
    }
}

const divStyle:CSSProperties = {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    width:"100%"
}
const imgStyle:CSSProperties = {
    width:"20%",
    height:"10em",
    padding:"1em"
    
}