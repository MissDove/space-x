import styled from "styled-components";

import { Grid as MuiGrid } from "@material-ui/core";

export const Grid = styled(MuiGrid)`
    #root & {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export const GridItem = styled(MuiGrid)`
    #root & {
        padding-top: 0;
        padding-bottom: 0;
    }
`;
