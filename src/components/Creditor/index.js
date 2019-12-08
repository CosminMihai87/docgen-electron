import React, { useState, useContext } from 'react';
import './Creditor.scss';
import {
    Form,
    Select,
    SelectItem,
    TextInput,
    Button
} from 'carbon-components-react';
import { GlobalContext } from "../ContextAPI";

const Creditor = () => {

    const globalContext = useContext(GlobalContext);

    const [persoanaFizica, setPersoanaFizica] = useState(true);

    const CreditorTextInput = props => {
        return (
            <TextInput {...props} />
        );
    };

    CreditorTextInput.defaultProps = {
        className: "className",
        disabled: false,
        helperText: "",
        id: "id",
        invalid: false,
        invalidText: "",
        labelText: "labelText",
        light: false,
        placeholder: "Placeholder text",
        type: "text"
    };

    const toggleCreditorHandler = () => {
        setPersoanaFizica(!persoanaFizica);
    };

    // const handleCreditorTextInputChange = (event) => {
    //     if (persoanaFizica) {
    //         globalContext.updateDetails({
    //             persoana_creditor: event.nativeEvent.data
    //
    //         });
    //     } else if (!persoanaFizica) {
    //         globalContext.updateDetails({
    //             persoana_creditor: event.nativeEvent.data
    //         });
    //     }
    // };

    const handleSubmit = (event) => {
        const data = new FormData(event.target);
        if (data.get('select1') === "Fizica") {
            globalContext.updateDetails({
                step: 1,
                persoana_creditor: data.get('select1'),
                nume_creditor: data.get('textinput1'),
                domiciliul_creditor: data.get('textinput2'),
                judetul_creditor: data.get('textinput3'),
                titlu_executoriu: data.get('textinput4'),
                debit: data.get('textinput5'),
            });
        } else if (data.get('select1') === "Juridica") {
            globalContext.updateDetails({
                step: 1,
                persoana_creditor: data.get('select1'),
                nume_creditor: data.get('textinput1'),
                sediul_creditor: data.get('textinput2'),
                judetul_creditor: data.get('textinput3'),
                titlu_executoriu: data.get('textinput4'),
                debit: data.get('textinput5'),
            });
        }
    };

    return (
        <div className="bx--row">
            <Form
                className="bx-col-lg-16 bx--col-sm-4 creditor-form"
                onSubmit={(event) => handleSubmit(event)}
            >
                <div className="bx--row">
                    <div className="bx--col-lg-2 bx--col-sm-2">
                        <Select
                            className="generare-dosar-form-1"
                            defaultValue={globalContext.data.persoana_creditor}
                            disabled={false}
                            helperText=""
                            iconDescription="open list of options"
                            id="select1"
                            inline={false}
                            invalid={false}
                            invalidText=""
                            labelText="Persoana:"
                            light={false}
                            name="select1"
                            onChange={toggleCreditorHandler}
                            required
                        >
                            <SelectItem
                                disabled={false}
                                hidden={false}
                                text="Fizica"
                                value="Fizica"
                            />
                            <SelectItem
                                disabled={false}
                                hidden={false}
                                text="Juridica"
                                value="Juridica"
                            />
                        </Select>
                    </div>
                    <div className="bx--col-lg-4 bx--col-sm-4">
                        {persoanaFizica ?
                            <CreditorTextInput
                                className="generare-dosar-form-2"
                                defaultValue={globalContext.data.nume_creditor}
                                id="textinput1"
                                labelText="Nume/Prenume:"
                                name="textinput1"
                                // onChange={(event) => handleCreditorTextInputChange(event)}
                                placeholder="Ex: Andreca Niculache"
                                required
                            />
                            : <CreditorTextInput
                                className="generare-dosar-form-2"
                                defaultValue={globalContext.data.nume_creditor}
                                id="textinput1"
                                labelText="Denumire Societate:"
                                name="textinput1"
                                // onChange={(event) => handleCreditorTextInputChange(event)}
                                placeholder="Ex: S.C. POLARISAN M HOLDING S.R.L."
                                required
                            />}
                    </div>
                    <div className="bx--col-lg-6 bx--col-sm-4">
                        {persoanaFizica ?
                            <CreditorTextInput
                                className="generare-dosar-form-3"
                                defaultValue={globalContext.data.domiciliul_creditor}
                                id="textinput2"
                                labelText="cu domiciliul in:"
                                name="textinput2"
                                placeholder="Ex: com. Gruia, sat Izvoarele"
                                required
                            />
                            : <CreditorTextInput
                                className="generare-dosar-form-3"
                                defaultValue={globalContext.data.sediul_creditor}
                                id="textinput2"
                                labelText="cu sediul:"
                                name="textinput2"
                                placeholder="Ex: Alexandria, str. Libertatii, nr.230A, et. 2"
                                required
                            />}
                    </div>
                    <div className="bx--col-lg-4 bx--col-sm-2">
                        <CreditorTextInput
                            className="generare-dosar-form-4"
                            defaultValue={globalContext.data.judetul_creditor}
                            id="textinput3"
                            labelText="judetul:"
                            name="textinput3"
                            placeholder="Ex: Teleorman"
                            required
                        />
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col-lg-8 bx--col-sm-4">
                        <CreditorTextInput
                            className="generare-dosar-form-5"
                            defaultValue={globalContext.data.titlu_executoriu}
                            id="textinput4"
                            labelText="Titlu Executoriu:"
                            name="textinput4"
                            placeholder="Ex: Sentinta Civila nr. 321/01.09.2018, pronuntata de Judecatoria Zimnicea"
                            required
                        />
                    </div>
                    <div className="bx--col-lg-8 bx--col-sm-4">
                        <CreditorTextInput
                            className="generare-dosar-form-5"
                            defaultValue={globalContext.data.debit}
                            id="textinput5"
                            labelText="Debit:"
                            name="textinput5"
                            placeholder="Ex: 12345"
                            required
                        />
                    </div>
                </div>
                <div className="bx--row submit-row-creditor">
                    <div className="bx--col-lg-16 bx--col-sm-4">
                        <Button
                            className="generare-dosar-form-6"
                            disabled={false}
                            kind="primary"
                            tabIndex={0}
                            type="submit"
                        >
                            Pasul Urmator
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Creditor;
