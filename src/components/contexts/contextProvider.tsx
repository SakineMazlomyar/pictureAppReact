import React from 'react';
import { ThemeContext, themes, ThemeState } from './themeContext'

interface Props {}
interface State {
    theme: ThemeState
    toggleTheme: ()=>void
}


export default class ThemeProvide extends React.Component<Props, State>{
     constructor(props: Props){
        super(props)
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme.bind(this)
        }
    }

    toggleTheme(){
        this.setState((state)=> {
            const theme = state.theme === themes.dark ? themes.light : themes.dark
            return {theme}
        })
    }


    render(){
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    
    }


}