import styled from "styled-components";
import { NavLink, Route, Switch, useLocation, useRouteMatch } from "react-router-dom";

import { Navbar } from "components/navbar";
import { Dragons } from "./tabs/dragons";
import { Rockets } from "./tabs/rockets";
import { Ships } from "./tabs/ships";

import { VerticalSpacing } from "components/shared-styles";

export const Home = () => {
    const { url, path } = useRouteMatch();

    const { pathname } = useLocation();

    return (
        <Wrapper>
            <Navbar logo={{ url }} />

            <Content>
                <PageContentWrapper>
                    <LinksWrapper>
                        <div>
                            {(pathname.includes("rockets") ||
                                pathname.includes("dragons") ||
                                pathname.includes("ships")) && (
                                <HomeButton>
                                    <StyledNavLink data-testid="home-link" to={url} exact={true}>
                                        <Text>Return to SpaceX</Text>
                                    </StyledNavLink>
                                </HomeButton>
                            )}
                            {pathname === "/" && (
                                <HomeContent>
                                    <HomeText>Welcome to SpaceX</HomeText>
                                </HomeContent>
                            )}
                        </div>

                        <VerticalSpacing size={32} />

                        <ButtonLinksWrapper>
                            <ButtonNavLink
                                data-testid="rockets-link"
                                to={`${url}rockets`}
                                exact={true}
                                activeClassName="active"
                            >
                                <LinkText>Rockets</LinkText>
                            </ButtonNavLink>

                            <ButtonNavLink
                                data-testid="dragons-link"
                                to={`${url}dragons`}
                                exact={true}
                                activeClassName="active"
                            >
                                <LinkText>Dragons</LinkText>
                            </ButtonNavLink>

                            <ButtonNavLink
                                data-testid="ships-link"
                                to={`${url}ships`}
                                exact={true}
                                activeClassName="active"
                            >
                                <LinkText>Ships</LinkText>
                            </ButtonNavLink>
                        </ButtonLinksWrapper>
                    </LinksWrapper>

                    <VerticalSpacing size={32} />

                    <Switch>
                        <Route path={`${path}rockets`}>
                            <TabContent>
                                <Rockets />
                            </TabContent>
                        </Route>
                        <Route path={`${path}dragons`}>
                            <TabContent>
                                <Dragons />
                            </TabContent>
                        </Route>
                        <Route path={`${path}ships`}>
                            <TabContent>
                                <Ships />
                            </TabContent>
                        </Route>
                    </Switch>
                </PageContentWrapper>
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
    min-height: 700px;
    padding: 64px;
`;

const PageContentWrapper = styled.div`
    background: ${({ theme }) => theme.primaryBackground};
    width: 100%;
    height: 100%;
    padding: 24px;
    border-radius: ${({ theme }) => theme.radius2};
`;

const LinksWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const HomeButton = styled.button`
    display: block;
    margin: 0;
    border: none;
    background: ${({ theme }) => theme.primaryGreen};
    padding: 16px 24px;
    border-radius: 50%;
    transform: rotate(-12deg);
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.darkGrey};
    font-weight: 700;
    font-size: 20px;
`;

const Text = styled.p`
    transform: rotate(12deg);
`;

const LinkText = styled.p`
    transform: rotate(12deg);
`;

const ButtonLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.primaryYellow};
    background: transparent;
    transform: rotate(-12deg);
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.darkGrey};
    margin-right: 100px;

    &.active {
        cursor: default;
        background: ${({ theme }) => theme.primaryGreen};
        font-size: 24px;
    }
`;

const HomeContent = styled.div`
    padding: 32px 0;
    text-align: center;
    border: 5px solid ${({ theme }) => theme.primaryGreen};
    border-radius: ${({ theme }) => theme.radius2};
`;

const HomeText = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.darkGrey};
`;

const TabContent = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 32px 32px 0;
    border: 5px solid ${({ theme }) => theme.primaryYellow};
    border-radius: ${({ theme }) => theme.radius2};
    background: ${({ theme }) => theme.primaryBackground};
`;
