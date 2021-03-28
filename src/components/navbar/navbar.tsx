import styled from "styled-components";

import { PageWidth } from "components/page-width";
import { routePaths } from "config/route-paths";

interface HeaderLink {
    url: string;
    title: string;
    isActive?: boolean;
}

interface ButtonLink {
    url: string;
    title: string;
}

export interface INavbarProps {
    className?: string;
    menu?: HeaderLink[];
    button?: ButtonLink;
}

export const NavbarRouter = ({ className, menu, button }: INavbarProps) => {
    return (
        <Wrapper className={className}>
            <PageWidth>
                <Container>
                    <StyledLink data-testid="navbar-router-logo" href={routePaths.home.path} title="Home">
                        <Logo>SpaceX</Logo>
                    </StyledLink>
                    <Menu data-testid="navbar-router-menu">
                        {menu &&
                            menu.map((link, index) => (
                                <MenuItem key={index}>
                                    <MenuLink href={link.url} title={link.title} isActive={link.isActive}>
                                        {link.title}
                                    </MenuLink>
                                </MenuItem>
                            ))}
                        {button && (
                            <MenuItem>
                                <Button>
                                    <StyledLink
                                        data-testid="navbar-router-button"
                                        href={button.url}
                                        title={button.title}
                                    >
                                        {button.title}
                                    </StyledLink>
                                </Button>
                            </MenuItem>
                        )}
                    </Menu>
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

const StyledLink = styled.a`
    text-decoration: none;
`;

const Logo = styled.p`
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.darkGrey};
    margin-right: 64px;
`;

const Menu = styled.ul`
    margin-left: auto;
    display: flex;
    align-items: center;
`;

const MenuItem = styled.li`
    margin-right: 24px;

    :last-child {
        margin-right: 0;
    }
`;

const MenuLink = styled.a<{ isActive?: boolean }>`
    font-size: 16px;
    font-weight: 700;

    ${({ theme, isActive }) => isActive === true && `color: green; cursor: default`}
`;

const Button = styled.button``;
