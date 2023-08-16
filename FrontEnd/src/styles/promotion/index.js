import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Typography } from "@mui/material";

export const PromotionContainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.up("md")]:{
        padding: "40px , 0px, 40px, 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px , 0px, 20px , 0px",
    overflow: "hidden",
    background: Colors.logocolor,
}))

export const MessageText = styled(Typography)(({theme}) => ({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up("md")]:{
        fontSize: "3rem",
    },
    color: Colors.white,
    fontSize: "1.5rem",
}))