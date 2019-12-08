// TODO : fix the IE11 pollyfils, there is some error here
// import 'core-js/modules/es7.array.includes';
// import 'core-js/modules/es6.array.fill';
// import 'core-js/modules/es6.string.includes';
// import 'core-js/modules/es6.string.trim';
// import 'core-js/modules/es7.object.values';

import React from 'react';
import './App.scss';
import { HashRouter as Router } from 'react-router-dom';
import ContextAPI from "./components/ContextAPI";
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import { ToastProvider } from "react-toast-notifications";

const App = () => {
    return (
        <Router>
            <ContextAPI>
                <AppHeader />
                <ToastProvider
                    autoDismiss='true'
                    autoDismissTimeout='3000'
                    placement='bottom-center'
                >
                    <AppContent />
                </ToastProvider>
            </ContextAPI>
        </Router>
    );
};

export default App;
