import React, {useContext} from 'react';
import './GenerareDosar.scss';
import { GlobalContext } from "../ContextAPI";
import ProgressBar from "../ProgressBar";
import Creditor from "../Creditor";
import Debitor from "../Debitor";
import Machete from "../Machete";

const GenerareDosar = props => {

    const globalContext = useContext(GlobalContext);

    return (
        <>
            <ProgressBar />
            <hr />
            {globalContext.data["step"] === 0?
                <Creditor />
                : globalContext.data["step"] === 1?
                    <Debitor />
                    : globalContext.data["step"] === 2?
                        <Machete/>
                        : <></>
            }
        </>
    );
};

export default GenerareDosar;
