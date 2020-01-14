import React, {useContext} from 'react';
import './GenerareDosar.scss';
import { GlobalContext } from "../ContextAPI";
import ProgressBar from "../ProgressBar";
import Parti from "../Parti";
import Machete from "../Machete";

const GenerareDosar = () => {

    const globalContext = useContext(GlobalContext);

    return (
        <>
            <ProgressBar />
            <hr />
            {globalContext.data["step"] === 0?
                <Parti />
                : globalContext.data["step"] === 1?
                    <Machete />
                    : globalContext.data["step"] === 2?
                        <Machete/>
                        : <></>
            }
        </>
    );
};

export default GenerareDosar;
