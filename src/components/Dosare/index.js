import React, { useState, useContext, useEffect } from 'react';
import './Dosare.scss';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { GlobalContext } from '../ContextAPI';
import {
    FormGroup,
    Checkbox
} from "carbon-components-react";
import CheckboxTree from 'react-checkbox-tree';
import {
    useToasts
} from 'react-toast-notifications';
import {
    ChevronRight20,
    ChevronDown20,
    Checkbox20,
    CheckboxChecked20,
    CheckboxCheckedFilled20,
    Folder20,
    FolderDetails20,
    Document20,
    AddAlt20,
    SubtractAlt20
} from "@carbon/icons-react";
import services from '../../services'
// import useWindowSize from './../../util/useWindowSize';

const Dosare = () => {

    const globalContext = useContext(GlobalContext);

    const {
        getFolders,
        getFoldersState
    } = services();

    useEffect( () => {
        getFolders();
    },[]);

    const [treeState, setTreeState] = useState({
        checked: [],
        expanded: [],
    });

    const updateTreeStateResultChecked = (values) => {
        setTreeState({
            ...treeState,
            checked: values
        });
    };

    const updateTreeStateResultExpanded = (values) => {
        setTreeState({
            ...treeState,
            expanded: values
        });
    };

    useEffect( () => {
        if (getFoldersState.loading === false &&
                getFoldersState.status === 200 &&
                    getFoldersState.statusText ==="OK") {
            globalContext.updateDetails({nr_folders: getFoldersState.nr_folders });
        }
    },[getFoldersState]);

    return (
        <div className="bx--row dosare">
            <div className="bx--col-lg-7 bx--col-sm-4">
                <div className="bx--col-lg-16 bx--col-sm-4 check-box-tree">
                    <h4> Structura de fisiere si directoare din 2019: </h4>
                    <CheckboxTree
                        nodes={getFoldersState.data}
                        checked={treeState.checked}
                        expanded={treeState.expanded}
                        onCheck={(checked) => updateTreeStateResultChecked(checked)}
                        onExpand={(expanded) => updateTreeStateResultExpanded(expanded)}
                        icons={{
                            check: <CheckboxCheckedFilled20 />,
                            uncheck: <Checkbox20 />,
                            halfCheck:  <CheckboxChecked20 />,
                            expandClose: <ChevronRight20 />,
                            expandOpen: <ChevronDown20 />,
                            expandAll: <AddAlt20 />,
                            collapseAll: <SubtractAlt20 />,
                            parentClose: <Folder20 />,
                            parentOpen: <FolderDetails20 />,
                            leaf: <Document20 />,
                        }}
                    />
                </div>
            </div>
            <div className="bx--col-lg-9 bx--col-sm-4">

            </div>
        </div>
    );
};

export default Dosare;
