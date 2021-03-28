import styled from "styled-components";

import { NavbarRouter } from "components/navbar";

export const Home = () => {
    return (
        <Wrapper>
            <NavbarRouter />
            <Content>
                <ContentWrapper></ContentWrapper>
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

const Content = styled.div`
    background: ${({ theme }) => theme.darkGrey};
    width: 100%;
    height: 100vh;
    padding: 64px;
`;

const ContentWrapper = styled.div`
    background: ${({ theme }) => theme.primaryBackground};
    width: 100%;
    height: 100%;
    padding: 24px;
    border-radius: ${({ theme }) => theme.radius2};
`;
