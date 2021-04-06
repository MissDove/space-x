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
                    <div>
                        {(pathname === "/rockets" || pathname === "/dragons") && (
                            <NavLink to={url} exact={true}>
                                Go Back to Home Page
                            </NavLink>
                        )}

                        <div>
                            <NavLink to={`${url}rockets`} exact={true}>
                                Rockets
                            </NavLink>
                            <NavLink to={`${url}dragons`} exact={true}>
                                Dragons
                            </NavLink>
                        </div>
                    </div>
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
