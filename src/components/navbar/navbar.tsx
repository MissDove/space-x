import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { PageWidth } from "components/page-width";

interface LinkInterface {
    url: string;
    title?: string;
}

interface INavbarProps {
    className?: string;
    logo: LinkInterface;
}

export const NavbarRouter = ({ className, logo }: INavbarProps) => {
    return (
        <Wrapper className={className}>
            <PageWidth>
                <Container>
                    <StyledLink data-testid="navbar-router-logo" to={logo.url} title={logo.title} exact={true}>
                        <LogoWrapper>
                            <Logo>SpaceX</Logo>
                        </LogoWrapper>
                    </StyledLink>
                </Container>
            </PageWidth>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: ${({ theme }) => theme.primaryBackground};
    padding: 24px 0;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
`;

const LogoWrapper = styled.div`
    background-color: ${({ theme }) => theme.primaryGreen};
    height: 60px;
    width: 180px;
    border-radius: 50%;
    transform: rotate(-12deg);
`;

const Logo = styled.p`
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.darkGrey};
    transform: rotate(12deg);
`;
