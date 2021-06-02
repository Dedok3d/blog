import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import styles from './app.module.scss';
import '../styles/fonts.module.scss';

import MainPage from '../page/main/main-page';
import Header from '../form/header/header';
import NotFound from '../page/not-found/not-found';

interface Props {
}

function App({ }: Props) {
    const history = createBrowserHistory();

    return <div className={styles.main}>
        <div className={styles.page}>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path="/" render={() => (<MainPage />)} />
                    <Route path="" exact={true} render={() => (<NotFound />)} />
                </Switch>
            </Router>
        </div>
    </div>;
}

export default App;
