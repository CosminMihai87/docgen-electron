import React, { useState, useContext } from 'react';
import './Debitor.scss';
import {
    Form,
    Select,
    SelectItem,
    TextInput,
    Button
} from 'carbon-components-react';
import { GlobalContext } from "../ContextAPI";

const Debitor = () => {

    const globalContext = useContext(GlobalContext);

    const [persoanaFizica, setPersoanaFizica] = useState(true);

    const DebitorTextInput = props => {
        return (
            <TextInput {...props} />
        );
    };

    DebitorTextInput.defaultProps = {
        className: "className",
        disabled: false,
        helperText: "",
        id: "id",
        invalid: false,
        invalidText: "Completarea campului este necesara pentru a trece mai departe.",
        labelText: "labelText",
        light: false,
        placeholder: "Placeholder text",
        type: "text"
    };

    const toggleDebitorHandler = () => {
        setPersoanaFizica(!persoanaFizica);
    };

    const handleSubmit = (event) => {
        const data = new FormData(event.target);
        if (data.get('select1') === "Fizica") {
            globalContext.updateDetails({
                step: 2,
                persoana_debitor: data.get('select1'),
                nume_debitor: data.get('textinput1'),
                CNP_debitor: data.get('textinput2'),
                domiciliul_debitor: data.get('textinput3'),
                judetul_debitor: data.get('textinput4'),
                titlu_executoriu: data.get('textinput5'),
            });
        } else if (data.get('select1') === "Juridica") {
            globalContext.updateDetails({
                step: 2,
                persoana_debitor: data.get('select1'),
                nume_debitor: data.get('textinput1'),
                CUI_debitor: data.get('textinput2'),
                sediul_debitor: data.get('textinput3'),
                judetul_debitor: data.get('textinput4'),
                titlu_executoriu: data.get('textinput5'),
            });
        }
    };

    const handleBackBtn = () => {
        globalContext.updateDetails({
            step: 0
        });
    };

    return (
        <div className="bx--row">
            <Form
            className="bx-col-lg-16 bx--col-sm-4 debitor-form"
            onSubmit={(event) => handleSubmit(event)}
        >
            <div className="bx--row">
                <div className="bx--col-lg-2 bx--col-sm-4">
                    <Select
                        className="generare-dosar-form-1"
                        defaultValue={globalContext.data.persoana_debitor}
                        disabled={false}
                        helperText=""
                        iconDescription="open list of options"
                        id="select-1"
                        inline={false}
                        invalid={false}
                        invalidText=""
                        labelText="Persoana:"
                        light={false}
                        name="select1"
                        onChange={toggleDebitorHandler}
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
                <div className="bx--col-lg-4 bx--col-sm-2">
                    {persoanaFizica ?
                        <DebitorTextInput
                            className="generare-dosar-form-2"
                            defaultValue={globalContext.data.nume_debitor}
                            id="textinput1"
                            labelText="Nume/Prenume:"
                            name="textinput1"
                            placeholder="Ex: Andrei Neculce"
                            required
                        />
                        : <DebitorTextInput
                            className="generare-dosar-form-2"
                            defaultValue={globalContext.data.nume_debitor}
                            id="textinput1"
                            labelText="Denumire Societate:"
                            name="textinput1"
                            placeholder="Ex: S.C. POLARIS M HOLDING S.R.L."
                            required
                        />}
                </div>
                <div className="bx--col-lg-2 bx--col-sm-2">
                    {persoanaFizica ?
                        <DebitorTextInput
                            className="generare-dosar-form-3"
                            defaultValue={globalContext.data.CNP_debitor}
                            id="textinput2"
                            labelText="CNP:"
                            name="textinput2"
                            placeholder="Ex: 1871123474321"
                            required
                        />
                        : <DebitorTextInput
                            className="generare-dosar-form-3"
                            defaultValue={globalContext.data.CUI_debitor}
                            id="textinput2"
                            labelText="CUI:"
                            name="textinput2"
                            placeholder="Ex: 6859662"
                            required
                        />}
                </div>
                <div className="bx--col-lg-6 bx--col-sm-4">
                    {persoanaFizica ?
                        <DebitorTextInput
                            className="generare-dosar-form-4"
                            defaultValue={globalContext.data.domiciliul_debitor}
                            id="textinput3"
                            labelText="cu domiciliul in:"
                            name="textinput3"
                            placeholder="Ex: com. Gruia, sat Izvoarele"
                            required
                        />
                        : <DebitorTextInput
                            className="generare-dosar-form-4"
                            defaultValue={globalContext.data.sediul_debitor}
                            id="textinput3"
                            labelText="cu sediul procesual ales in:"
                            name="textinput3"
                            placeholder="Ex: Alexandria, str. Libertatii, nr.244A, et. 1"
                            required
                        />}
                </div>
                <div className="bx--col-lg-2 bx--col-sm-2">
                    <DebitorTextInput
                        className="generare-dosar-form-5"
                        defaultValue={globalContext.data.judetul_debitor}
                        id="textinput4"
                        labelText="judetul:"
                        name="textinput4"
                        placeholder="Ex: Teleorman"
                        required
                    />
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col-lg-8 bx--col-sm-4">
                    <DebitorTextInput
                        className="generare-dosar-form-6"
                        defaultValue={globalContext.data.titlu_executoriu}
                        id="textinput5"
                        labelText="Titlu Executoriu:"
                        name="textinput5"
                        placeholder="Ex: Sentinta Civila nr. 421/01.09.2018, pronuntata de Judecatoria Zimnicea"
                        required
                    />
                </div>
                <div className="bx--col-lg-8 bx--col-sm-4">
                    <DebitorTextInput
                        className="generare-dosar-form-5"
                        defaultValue={globalContext.data.debit}
                        id="textinput6"
                        labelText="Debit:"
                        name="textinput6"
                        placeholder="Ex: 12345"
                        required
                    />
                </div>
            </div>
            <div className="bx--row submit-row-debitor">
                <div className="bx--col-lg-8 bx--col-sm-2">
                    <Button
                        className="generare-dosar-form-7"
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
                        className="generare-dosar-form-8"
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

export default Debitor;
