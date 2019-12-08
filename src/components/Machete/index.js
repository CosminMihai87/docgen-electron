import React, { useState, useContext, useEffect } from 'react';
import './Machete.scss';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { GlobalContext } from '../ContextAPI';
import {
    Button,
    TextInput,
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
import createFolderStructure from '../../services/createFolderStructure';
import services from '../../services'

const Machete = () => {

    const {
        postFolder,
        postFolderState,
        getMachete,
        getMacheteState,
    } = services();

    const { addToast } = useToasts();
    let globalContext = useContext(GlobalContext);

    const [dosarNR, setDosarNR] = useState(globalContext.data.nr_folders+1);

    const [checkedItems, setCheckedItems] = useState([]);

    const [jsonTreeResult, setJsonTreeResult] = useState( [{
        value: `${dosarNR}parent`,
        type: 'folder',
        label: `Ds. ${dosarNR} din 2019 (${globalContext.data.nume_creditor} vs. ${globalContext.data.nume_debitor})`,
        children: []
    }]);

    useEffect( () => {
        getMachete();
    },[]);

    const [treeStateMachete, setTreeStateMachete] = useState({
        checked: [],
        expanded: []
    });

    const [treeStateResult, setTreeStateResult] = useState({
        checked: [],
        expanded: [`${dosarNR}parent`],
    });

    useEffect( () => {
        if (getMacheteState.data.length > 0) {
            setTreeStateMachete({
                ...treeStateMachete,
                ...{
                    checked: [...getMacheteState.data[0].children, ...getMacheteState.data[1].children]
                        .filter(n => n.checked === true).map(k=>k.label),
                    expanded: getMacheteState.data.map(k => {return k.expanded===true? k.value : ""} )
                }
            })
        }
    },[getMacheteState]);

    useEffect( () => {
        if (getMacheteState.data.length > 0) {
            setJsonTreeResult([
                {
                    ...[...jsonTreeResult][0],
                    children: [...treeStateMachete.checked.map(k => {
                                return {
                                    value: dosarNR+k,
                                    type: [...getMacheteState.data[0].children, ...getMacheteState.data[1].children]
                                        .find(n => n.value === k).type,
                                    label: [...getMacheteState.data[0].children, ...getMacheteState.data[1].children]
                                        .find(n => n.value === k).label
                                }
                            })]
                }
            ]);
        }
    },[treeStateMachete]);


    const updateTreeStateMacheteChecked = (values) => {
        setTreeStateMachete({
            ...treeStateMachete,
            checked: values
        });
    };

    const updateTreeStateMacheteExpanded = (values) => {
        setTreeStateMachete({
            ...treeStateMachete,
            expanded: values
        });
    };

    const updateTreeStateResultChecked = (values) => {
        setTreeStateResult({
            ...treeStateResult,
            checked: values
        });
    };

    const updateTreeStateResultExpanded = (values) => {
        setTreeStateResult({
            ...treeStateResult,
            expanded: values
        });
    };

    const handleBackBtn = () => {
        globalContext.updateDetails({
            step: 1
        });
    };

    const handleMijloaceDeExecutie = event => {
        // debugger;
        // setCheckedItems({
        //     ...checkedItems,
        //     [event.target.name]: event.target.checked
        // });
        // console.log("checkedItems: ", checkedItems);
    };

    const createFolderStructureHandler = () => {
        postFolder(jsonTreeResult);
    };

    // console.log(`globalContext=${globalContext.data.nr_folders}`);
    // console.log(`dosarNR=${dosarNR}`);

    useEffect( () => {
        if (postFolderState.loading === false &&
                postFolderState.status === 200 &&
                    postFolderState.statusText ==="OK"
        ) {
            const { dialog } = require('electron').remote;
            let outputPath = dialog.showOpenDialog({ properties: ['openDirectory'] });
            if (outputPath !== undefined) {
                createFolderStructure(jsonTreeResult, globalContext.data, (outputPath === undefined? "defaultPath" : outputPath[0]) );
                addToast('Structura a fost salvata in baza si exportata cu success!', { appearance: 'success' })
            } else {
                addToast('Structura a fost salvata in baza!', { appearance: 'success' });
                addToast('Alege te rog o cale valida pentru a exporta structura.', { appearance: 'warning' });
            }
            setDosarNR(dosarNR+1);
            // globalContext.updateDetails({nr_folders: globalContext.data.nr_folders+1 });
            // updateTreeStateResultExpanded();
        }

        if (postFolderState.error.length>0) {
            addToast(postFolderState.error, { appearance: 'error' });
        }

    },[postFolderState]);

    useEffect( () => {
        setJsonTreeResult(jsonTreeResult);
    },[setDosarNR]);

    return (
        <div className="bx--row machete">
            <div className="bx--col-lg-7 bx--col-sm-4">
                <div className="bx--row-lg-16 bx--row-sm-4">
                    <div className="bx--col-lg-16 bx--col-sm-4 titlu-executoriu">
                        <TextInput
                            className=""
                            defaultValue={globalContext.data.titlu_executoriu}
                            disabled={false}
                            helperText=""
                            id="textinput1"
                            invalid={false}
                            invalidText=""
                            labelText="Titlu Executoriu:"
                            light={false}
                            name="textinput1"
                            placeholder="Ex: Sentinta Civila nr. 321/01.09.2018, pronuntata de Judecatoria Zimnicea"
                            type="text"
                        />
                    </div>
                    <div className="bx--col-lg-16 bx--col-sm-4 debit">
                        <TextInput
                            className=""
                            defaultValue={globalContext.data.debit}
                            disabled={false}
                            helperText=""
                            id="textinput2"
                            invalid={false}
                            invalidText=""
                            labelText="Debit:"
                            light={false}
                            name="textinput2"
                            placeholder="Ex: 12345"
                            type="text"
                        />
                    </div>
                    <div className="bx--col-lg-16 bx--col-sm-4 check-box-tree-machete">
                        <h4> Machetele disponibile: </h4>
                        <CheckboxTree
                            nodes={getMacheteState.data}
                            checked={treeStateMachete.checked}
                            expanded={treeStateMachete.expanded}
                            onCheck={(checked) => updateTreeStateMacheteChecked(checked)}
                            onExpand={(expanded) => updateTreeStateMacheteExpanded(expanded)}
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
            </div>
            <div className="bx--col-lg-9 bx--col-sm-4">
                <div className="bx--row-lg-16 bx--row-sm-4">
                    <div className="bx--col-lg-16 bx--col-sm-4 mijloace-de-executie">
                        <div className="bx--col-lg-5 bx--col-sm-1">
                            <FormGroup
                                className="executare-indirecta"
                                invalid={false}
                                legendText="Executare indirectă"
                                message={false}
                                messageText=""
                            >
                                <Checkbox
                                    className="executare-indirecta-ckbox"
                                    name="Poprire"
                                    id="checkbox-0"
                                    indeterminate={false}
                                    labelText="Poprire"
                                    checked={checkedItems["Mobiliară"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                                <Checkbox
                                    className="executare-indirecta-ckbox"
                                    id="checkbox-1"
                                    indeterminate={false}
                                    labelText="Mobiliară"
                                    checked={checkedItems["Mobiliară"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                                <Checkbox
                                    className="executare-indirecta-ckbox"
                                    id="checkbox-2"
                                    indeterminate={false}
                                    labelText="Imobiliară"
                                    checked={checkedItems["Imobiliară"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                            </FormGroup>
                        </div>
                        <div className="bx--col-lg-5 bx--col-sm-1">
                            <FormGroup
                                className="executare-directa"
                                invalid={false}
                                legendText="Executare directă"
                                message={false}
                                messageText=""
                            >
                                <Checkbox
                                    className="executare-directa-ckbox"
                                    id="checkbox-3"
                                    indeterminate={false}
                                    labelText="Predare mobiliară"
                                    checked={checkedItems["Predare mobiliară"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                                <Checkbox
                                    className="executare-directa-ckbox"
                                    id="checkbox-4"
                                    indeterminate={false}
                                    labelText="Predare imobiliară"
                                    checked={checkedItems["Predare imobiliară"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                                <Checkbox
                                    className="executare-directa-ckbox"
                                    id="checkbox-5"
                                    indeterminate={false}
                                    labelText="Obligația de a face"
                                    checked={checkedItems["Obligația de a face"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                            </FormGroup>
                        </div>
                        <div className="bx--col-lg-6 bx--col-sm-2">
                            <FormGroup
                                className="alte-tipuri-de-executare"
                                invalid={false}
                                legendText="Alte tipuri de executare"
                                message={false}
                                messageText=""
                            >
                                <Checkbox
                                    className="some-class"
                                    id="checkbox-6"
                                    indeterminate={false}
                                    labelText="Recuperare pe cale amiabilă"
                                    checked={checkedItems["Recuperare pe cale amiabilă"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                                <Checkbox
                                    className="some-class"
                                    id="checkbox-7"
                                    indeterminate={false}
                                    labelText="Ofertă reală de plată"
                                    checked={checkedItems["Ofertă reală de plată"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                                <Checkbox
                                    className="some-class"
                                    id="checkbox-8"
                                    indeterminate={false}
                                    labelText="Constatarea unei stări de fapt"
                                    checked={checkedItems["Constatarea unei stări de fapt"]}
                                    onChange={handleMijloaceDeExecutie}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="bx--col-lg-16 bx--col-sm-4 check-box-tree-result">
                        <h4> Structura de fisiere si directoare generata in functie de machetele alese: </h4>
                        <CheckboxTree
                            nodes={jsonTreeResult}
                            checked={treeStateResult.checked}
                            expanded={treeStateResult.expanded}
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
            </div>
            <div className="bx--row btn-row">
                <div className="bx--col-lg-8 bx--col-sm-2">
                    <Button
                        className="btn-back"
                        disabled={false}
                        kind="primary"
                        onClick={handleBackBtn}
                        tabIndex={0}
                        type="submit"
                    >
                        Pasul Precedent
                    </Button>
                </div>
                <div className="bx--col-lg-8 bx--col-sm-2">
                    <Button
                        className="btn-next"
                        disabled={false}
                        kind="primary"
                        onClick={createFolderStructureHandler}
                        tabIndex={0}
                        type="submit"
                    >
                        Salveaza si Creaza structura Local
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Machete;
