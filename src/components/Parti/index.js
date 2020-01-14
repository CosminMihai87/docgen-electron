import React, { useState, useContext } from 'react';
import './Parti.scss';
import {
    Accordion,
    AccordionItem,
    Button,
    TextInput
} from 'carbon-components-react';
import { Controller, useForm } from "react-hook-form";
import { GlobalContext } from "../ContextAPI";
import AddAlt24 from '@carbon/icons-react/lib/add--alt/24';
import SubtractAlt24 from '@carbon/icons-react/lib/subtract--alt/24';
import ArrowRight25 from '@carbon/icons-react/lib/arrow--right/24';
import Creditor from '../Creditor'
import Debitor from "../Debitor";
import {ArrowRight24} from "@carbon/icons-react";


const Parti = () => {

    const { control, handleSubmit, register, errors } = useForm();
    const globalContext = useContext(GlobalContext);
    const [sizeTitluriExecutorii, setSizeTitluriExecutorii] = useState(1);
    const [sizeDebituri, setSizeDebituri] = useState(1);


    console.log(globalContext.data);

    const addCreditorHandler = event => {
        globalContext.addCreditori({
            id: globalContext.data.creditori.length+1,
            persoana: "Fizica",
            nume: "",
            domiciliul: "",
            sediul: "",
            judetul: ""
        });
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
    };

    const removeCreditorHandler = (event,id) => {
        // globalContext.removeCreditor(id);
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
    };

    const addDebitorHandler = event => {
        globalContext.addDebitori({
            id: globalContext.data.debitori.length+1,
            persoana: "Fizica",
            nume: "",
            CUI: "",
            CNP: "",
            domiciliul: "",
            sediul: "",
            judetul: ""
        });
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
    };

    const removeDebitorHandler = (event,id) => {
        // globalContext.removeDebitor(id);
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
    };

    const TextInputTemplate = props => {
        return (
            <TextInput {...props} />
        );
    };
    TextInputTemplate.defaultProps = {
        className: "",
        disabled: false,
        helperText: "",
        id: "",
        invalid: false,
        invalidText: "Completarea campului este necesara pentru a trece mai departe.",
        labelText: "labelText",
        light: false,
        placeholder: "Placeholder text",
        type: "text"
    };

    const onSubmitTitluriExecutorii = data => {
        console.log(data);
        // globalContext.updateTitluriExecutorii(data);
    };

    const onSubmitDebituri = data => {
        // globalContext.updateDebituri(data);
    };

    const createArrayWithNumbers = (length) => {
        return Array.from({ length }, (_, k) => k + 1);
    };

    const handleNextBtn = () => {
        globalContext.updateDetails({
            step: 1
        });
    };

    return (
    <div className="parti">

        <div className="bx--row">

            <div className="bx--col-lg-8 bx--col-sm-4 creditor">
                <h2>Creditori:</h2>
                <Accordion>
                    {globalContext.data.creditori.map(k =>
                        <div className="accordion-item">
                            <AccordionItem
                                onClick={function noRefCheck(){}}
                                onHeadingClick={function noRefCheck(){}}
                                open={true}
                                title={k.nume.length>0?
                                            k.persoana==='Fizica'?
                                                `${k.nume}` + (k.CNP ? `- CNP: ${k.CNP}` : '')
                                                : `${k.nume}` + (k.CUI ? `- CUI: ${k.CUI}` : '')
                                        : `Creditor nr ${k.id}`}
                            >
                                <Creditor
                                    id={k.id}
                                    persoana={k.persoana}
                                    nume={k.nume}
                                    domiciliul={k.domiciliul}
                                    sediul={k.sediul}
                                    judetul={k.judetul}
                                />
                            </AccordionItem>
                            { k.id>1 &&
                                <Button
                                    className="subtractBtn"
                                    tooltipPosition="bottom"
                                    hasIconOnly={true}
                                    disabled={false}
                                    kind="primary"
                                    onClick={removeCreditorHandler(k.id)}
                                    size="small"
                                >
                                    <SubtractAlt24/>
                                </Button>
                            }
                        </div>
                    )}
                </Accordion>

                <Button
                    className="addBtn"
                    disabled={false}
                    kind="primary"
                    onClick={addCreditorHandler}
                    size="small"
                >
                    <AddAlt24/> Adauga Creditor
                </Button>
            </div>

            <div className="bx--col-lg-8 bx--col-sm-4 debitor">
                <h2>Debitori:</h2>
                <Accordion>
                    {globalContext.data.debitori.map(k =>
                        <div className="accordion-item">
                            <AccordionItem
                                onClick={function noRefCheck(){}}
                                onHeadingClick={function noRefCheck(){}}
                                open={true}
                                title={k.nume.length>0?
                                    k.persoana==='Fizica'?
                                        `${k.nume}` + (k.CNP ? ` - CNP: ${k.CNP}` : '')
                                        : `${k.nume}` + (k.CUI ? ` - CUI: ${k.CUI}` : '')
                                    : `Debitor nr ${k.id}`}
                            >
                                <Debitor
                                    id={k.id}
                                    persoana={k.persoana}
                                    nume={k.nume}
                                    domiciliul={k.domiciliul}
                                    sediul={k.sediul}
                                    judetul={k.judetul}
                                    CUI={k.CUI}
                                    CNP={k.CNP}
                                />
                            </AccordionItem>
                            { k.id>1 &&
                                <Button
                                    className="subtractBtn"
                                    hasIconOnly={true}
                                    disabled={false}
                                    kind="primary"
                                    onClick={removeDebitorHandler(k.id)}
                                    size="small"
                                >
                                    <SubtractAlt24/>
                                </Button>
                            }
                        </div>
                    )}
                </Accordion>
                <Button
                    className="addBtn"
                    disabled={false}
                    kind="primary"
                    onClick={addDebitorHandler}
                    size="small"
                >
                    <AddAlt24/> Adauga Debitor
                </Button>
            </div>

        </div>

        <div className="bx--row titlu-exec">
            <div className="bx--col-lg-16 bx--col-sm-4">
                <h2>Titluri Executorii:</h2>
                <form onBlur={handleSubmit(onSubmitTitluriExecutorii)} >
                    {createArrayWithNumbers(sizeTitluriExecutorii).map(k => {
                        return (
                            <div className="titlu-exec-item">
                                <TextInputTemplate
                                    className="generare-dosar-form-5"
                                    control={control}
                                    // defaultValue={globalContext.data.titluriExecutorii[k]}
                                    labelText=""
                                    name={`titluriExecutoriu[${k}]`}
                                    // ref={register({ required: true })}
                                    placeholder="Ex: Sentinta Civila nr. 321/01.09.2018, pronuntata de Judecatoria Zimnicea"
                                />
                                { k>1 &&
                                    <Button
                                        className="subtractBtn"
                                        hasIconOnly={true}
                                        disabled={false}
                                        kind="primary"
                                        // onClick={removeTitluriExecutoriiHandler(k)}
                                        size="small"
                                    >
                                        <SubtractAlt24/>
                                    </Button>
                                }
                            </div>
                        );
                    })}
                </form>
                <Button
                    className="addBtn"
                    disabled={false}
                    kind="primary"
                    onClick={() => setSizeTitluriExecutorii(sizeTitluriExecutorii + 1)}
                    size="small"
                >
                    <AddAlt24/>Adauga Titlu Executoriu
                </Button>
            </div>
        </div>

        <div className="bx--row debit">
            <div className="bx--col-lg-8 bx--col-sm-4">
                <h2>Debituri:</h2>
                <form onBlur={handleSubmit(onSubmitDebituri)} >
                    {createArrayWithNumbers(sizeDebituri).map(k => {
                        return (
                            <div className="debit-item">
                                <TextInputTemplate
                                    className="generare-dosar-form-5"
                                    control={control}
                                    // defaultValue={globalContext.data.debituri[k]}
                                    labelText=""
                                    name={`debit[${k}]`}
                                    // ref={register({ required: true })}
                                    placeholder="Ex: 12345"
                                />
                                { k>1 &&
                                    <Button
                                        className="subtractBtn"
                                        hasIconOnly={true}
                                        disabled={false}
                                        kind="primary"
                                        // onClick={removeDebituriHandler(k)}
                                        size="small"
                                    >
                                        <SubtractAlt24/>
                                    </Button>
                                }
                            </div>
                        );
                    })}
                </form>
                <Button
                    className="addBtn"
                    disabled={false}
                    kind="primary"
                    onClick={() => setSizeDebituri(sizeDebituri + 1)}
                    size="small"
                >
                    <AddAlt24/>Adauga Debit
                </Button>
            </div>
        </div>

        <div className="bx--row submit-row">
            <div className="bx--col-lg-16 bx--col-sm-4">
                <Button
                    className="nextBtn"
                    disabled={false}
                    kind="primary"
                    onClick={handleNextBtn}
                >
                    Pasul Urmator <ArrowRight24/>
                </Button>
            </div>
        </div>

    </div>
    );
};

export default Parti;
