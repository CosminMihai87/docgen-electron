import React, { useEffect, useContext } from 'react';
import {
    ProgressIndicator,
    ProgressStep
} from 'carbon-components-react';
import './ProgressBar.scss';
import { GlobalContext } from "../ContextAPI";

const ProgressBar = () => {

    const globalContext = useContext(GlobalContext);
    let step = globalContext.data["step"];

    useEffect(() => {
        document.getElementsByClassName('bx--progress-step-button')[0].childNodes[0].setAttribute("viewBox", "0 0 16 16");
        document.getElementsByClassName('bx--progress-step-button')[1].childNodes[0].setAttribute("viewBox", "0 0 16 16");
        document.getElementsByClassName('bx--progress-step-button')[2].childNodes[0].setAttribute("viewBox", "0 0 16 16");
    });

    return (
        <div className="bx--row progress-indicator">
            <ProgressIndicator
                currentIndex={step}
            >
                <ProgressStep
                    description="Parti"
                    label="Parti"
                />
                <ProgressStep
                    description="Machete"
                    label="Machete"
                />
                <ProgressStep
                    description="Pasul3"
                    label="Pasul3"
                />
            </ProgressIndicator>
        </div>
    );
};

export default ProgressBar;
