import { createContext, CSSProperties } from 'react'

export interface Themes {
    light: ThemeState
    dark: ThemeState

}
export interface ThemeState {
    foreground: {
        primary:string,
        secondary: string,
        darkened:string
    },
    background: {
        primary:string,
        secondary:string
    }
}

export const themes:Themes = {
    light: {
      foreground: {
        primary: '#0A0A0A',
        secondary: '#808080',
        darkened: '#000000'
        },
        background: {
            primary: '#EEEEEE',
            secondary: '#EAEAEA'
        }
    },

    dark: {
        foreground: {
            primary: '#EEEEEE',
            secondary: '#000000',
            darkened: '#707070'
        },
        background: {
            primary: '#0A0A0A',
            secondary: '#1F1F1F',
        }
    }


}

export const ThemeContext = createContext({
 theme: themes.dark,
 toggleTheme: ()=>{},
})
