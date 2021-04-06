import styled from "styled-components";
import { NavLink, Route, Switch, useLocation, useRouteMatch } from "react-router-dom";

import { NavbarRouter } from "components/navbar";

export const Home = () => {
    const { url, path } = useRouteMatch();

    const { pathname } = useLocation();

    return (
        <Wrapper>
            <NavbarRouter logo={{ url }} />

            <Content>
                <PageContentWrapper>
                    <LinksWrapper>
                        <div>
                            {(pathname === "/rockets" || pathname === "/dragons") && (
                                <HomeButton>
                                    <StyledNavLink to={url} exact={true}>
                                        <Text>Return to the base</Text>
                                    </StyledNavLink>
                                </HomeButton>
                            )}
                        </div>

                        <VerticalSpacing size={32} />

                        <ButtonLinksWrapper>
                            <NavLink to={`${url}rockets`} exact={true}>
                                Rockets
                            </NavLink>
                            <NavLink to={`${url}dragons`} exact={true}>
                                Dragons
                            </NavLink>
                        </ButtonLinksWrapper>
                    </LinksWrapper>
                    <div>
                        <Switch>
                            {pathname === "/" && (
                                <Route path={path}>
                                    <div>
                                        <p>Welcome to Rockets and Dragons page!</p>
                                        <p>Please choose ROCKETS or DRAGONS to continue</p>
                                    </div>
                                </Route>
                            )}
                            <Route path={`${path}rockets`}>
                                <div>Rockets</div>
                            </Route>
                            <Route path={`${path}dragons`}>
                                <div>Dragons</div>
                            </Route>
                        </Switch>
                    </div>
                </PageContentWrapper>
            </Content>
        </Wrapper>
    );
};

const VerticalSpacing = styled.div<{ size: number }>`
    height: ${({ size }) => size}px;
`;

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

const PageContentWrapper = styled.div`
    background: ${({ theme }) => theme.primaryBackground};
    width: 100%;
    height: 100%;
    padding: 24px;
    border-radius: ${({ theme }) => theme.radius2};
`;

const LinksWrapper = styled.div`
    max-width: 230px;
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

const ButtonLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
