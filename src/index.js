import React from 'react';
import ReactDOM from 'react-dom';
import "../src/Interface/TextStyles/TextStyles.sass"
import "../src/Interface/interface.sass";
import "../src/Interface/ButtonStyles/buttonStyles.sass"
import "../src/Interface/InputStyles/InputStyles.sass"

import App from "./Components/App/App";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import ErrorBoundry from "./Components/ErrorBoundry/errorBoundry";
import {OctoTestServiceProvider} from "./Components/octoTestServiceContext/octoTestServiceContext";
import OctoTestService from "./Services/octoTestService/octoTestService";

const octoTestService = new OctoTestService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <OctoTestServiceProvider value={octoTestService}>
                <Router>
                    <App/>
                </Router>
            </OctoTestServiceProvider>
        </ErrorBoundry>
    </Provider>,

document.getElementById("root"));
