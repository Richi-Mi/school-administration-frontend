import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const redTheme = createTheme({
    palette: {
        primary: {
            main: '#F5793B'
        },
        secondary: {
            main: '#0c0c0c'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#252525'
        }
        
    },
    typography: {
        fontFamily: [
            'New Amsterdam',
            'Roboto'
        ]
    }
})