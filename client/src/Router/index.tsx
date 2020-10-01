import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routesConfig } from './routesConfig';

export const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route
                path={routesConfig.login.path}
                component={routesConfig.login.page}
                exact
            />
            <Route
                path={routesConfig.courseManagement.path}
                component={routesConfig.courseManagement.page}
                exact
            />
            <Route
                path={routesConfig.registry.path}
                component={routesConfig.registry.page}
                exact
            />
            <Route
                path={routesConfig.academicCalendar.path}
                component={routesConfig.academicCalendar.page}
                exact
            />
        </Switch>
    </BrowserRouter>
)