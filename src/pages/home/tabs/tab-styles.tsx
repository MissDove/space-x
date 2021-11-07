import styled from "styled-components";
import { Grid as MuiGrid } from "@material-ui/core";
import { Link } from "react-router-dom";

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

export const ContentLink = styled(Link)`
    text-decoration: none;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    min-height: 200px;
    margin-bottom: 32px;
    background: ${({ theme }) => theme.darkGrey};
    border-radius: ${({ theme }) => theme.radius2};
    padding: 24px 16px;
    box-shadow: 5px 5px 0 0 ${({ theme }) => theme.primaryGreen};
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.primaryBackground};
    text-align: center;
    font-size: 32px;
    font-weight: 600;
`;

export const SubHeading = styled.p<{ status?: boolean }>`
    color: ${({ theme, status }) => (status ? `${theme.primaryBlue}` : `${theme.primaryRed}`)};
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
`;
