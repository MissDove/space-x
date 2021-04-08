import { createMuiTheme } from "@material-ui/core";

//move this to a new folder `utils` and write tests for this function
export const pxToInt = (pxValue: string): number => {
    if (pxValue.match(/\d+px/g)) {
        return parseInt(pxValue.replace("px", ""));
    } else {
        return 0;
    }
};

export const Theme = {
    // explore different fonts
    fontFamily: "Helvetica, sans-serif",

    // add spacing values and any other values for css properties
    // that repeat themselves throughout the codebase

    // colours
    darkGrey: "#392D40",
    lightGrey: "#B9AEAC",

    primaryBackground: "#FDFFF6",

    primaryBlue: "#5A9DB4",

    primaryGreen: "#B8FCC6",

    primaryRed: "#E75353",

    primaryYellow: "#F6D586",

    // border radius
    radius1: "4px",
    radius2: "16px",

    // break points

    smallMaxWidth: "671px",
    mediumMinWidth: "672px",
    mediumMaxWidth: "1039px",
    largeMinWidth: "1040px",
    largeMaxWidth: "1440px",
    hugeMinWidth: "1441px",

    // grid

    gutter: "16px",
};

export const MuiTheme = createMuiTheme({
    spacing: pxToInt(Theme.gutter),
    breakpoints: {
        values: {
            xs: 0,
            sm: 0,
            md: pxToInt(Theme.mediumMinWidth),
            lg: pxToInt(Theme.largeMinWidth),
            xl: pxToInt(Theme.hugeMinWidth),
        },
    },
});
