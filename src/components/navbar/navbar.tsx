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
                        <Logo>SpaceX</Logo>
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

const Logo = styled.p`
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.darkGrey};
    margin-right: 64px;
`;

// const Menu = styled.ul`
//     margin-left: auto;
//     display: flex;
//     align-items: center;
// `;
//
// const MenuItem = styled.li`
//     margin-right: 24px;
//
//     :last-child {
//         margin-right: 0;
//     }
// `;
//
// const MenuLink = styled.a<{ isActive?: boolean }>`
//     font-size: 16px;
//     font-weight: 700;
//
//     ${({ theme, isActive }) => isActive === true && `color: green; cursor: default`}
// `;
