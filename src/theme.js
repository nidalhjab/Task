import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        
        MuiPaper:{
            styleOverrides:{
                root:{
                    margin:'2%'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    letterSpacing: '0.2px',
                    lineHeight:'20px'
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: '#E5E5E5'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#9FA2B4',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                bold: {
                    fontSize: 14,
                    fontWeight:'bold',
                    lineHeight: '20px',
                    letterSpacing: '0.2px',
                    color: "#252733",
                },
                semiBold: {
                    fontSize: 12,
                    lineHeight: '16px',
                    letterSpacing: '0.1px',
                    color: "#C5C7CD",
                }
            }
        }
    },
})