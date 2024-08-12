import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const redTheme = createTheme({
    palette: {
        primary: {
            main: '#952F57'
        },
        secondary: {
            main: '#fff'
        },
        error: {
            main: red.A400
        }
    }
})