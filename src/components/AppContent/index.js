import React, { useState } from 'react';
import {
    ContentSwitcher,
    Switch
} from 'carbon-components-react';
import './AppContent.scss';
import GenerareDosar from '../GenerareDosar';
import Dosare from "../Dosare";
import Documentatie from "../Documentatie";

const AppContent = () => {

    const [contentSwitch, setContentSwitch] = useState([
        {
            id: 'first',
            display: true,
            progressBarCurrentIndex: 0
        },
        {
            id: 'second',
            display: false
        },
        {
            id: 'third',
            display: false
        }
    ]);

    const toggleContentSwitcher = event => {
        let state = [...contentSwitch];
        state.find(k=>k.id===event.name).display = true;
        state.filter(k=>k.id!==event.name).forEach(n=>n.display = false);
        setContentSwitch(state);
    };

    return (
        <div className="bx--grid bx--grid--full-width appContent">
            <div className="bx--row">
                <ContentSwitcher
                    onChange={(event) => toggleContentSwitcher(event)}
                    selectedIndex={0}
                >
                    <Switch
                        name="first"
                        className="generare-dosar"
                        text="Generare Dosar"
                    />
                    <Switch
                        name="second"
                        className="dosare"
                        text="Dosare"
                    />
                    <Switch
                        name="third"
                        className="documentatie"
                        text="Documentatie"
                    />
                </ContentSwitcher>
            </div>
            {contentSwitch[0].display?
                <GenerareDosar
                    progressBarCurrentIndex={contentSwitch[0].progressBarCurrentIndex}
                />
                    : contentSwitch[1].display?
                    <Dosare/>
                        : contentSwitch[2].display?
                        <Documentatie/>
                        : <></>
            }
        </div>
    );
};

export default AppContent;