import styled from "styled-components";

export const Home = () => {
    return (
        <Wrapper>
            <Navbar>
                <NavItemsWrapper>
                    <Logo>SpaceX</Logo>
                    <NavItem>Rockets</NavItem>
                    <NavItem>Dragons</NavItem>
                </NavItemsWrapper>
                <p>Placeholder</p>
            </Navbar>
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

const Navbar = styled.nav`
    background: ${({ theme }) => theme.backgroundColor};
    position: sticky;
    padding: 24px 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.p`
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.textDark};
    margin-right: 64px;
`;

const NavItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.p`
    margin-right: 24px;

    :last-child {
        margin-right: 0;
    }
`;

const Content = styled.div`
    background: ${({ theme }) => theme.textDark};
    width: 100%;
    height: 100vh;
    padding: 64px;
`;

const ContentWrapper = styled.div`
    background: ${({ theme }) => theme.backgroundColor};
    width: 100%;
    height: 100%;
    padding: 24px;
    border-radius: ${({ theme }) => theme.radius2};
`;
