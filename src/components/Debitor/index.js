import React, { useState, useContext } from 'react';
import './Debitor.scss';
import {
    Select,
    SelectItem,
    TextInput
} from 'carbon-components-react';
import {Controller, useForm} from "react-hook-form";
import { GlobalContext } from "../ContextAPI";

const Debitor = props => {

    const globalContext = useContext(GlobalContext);
    const { control, handleSubmit, register, errors, watch } = useForm();
    const [persoanaFizica, setPersoanaFizica] = useState(true);

    const toggletPersoanaFizica = () => {
        setPersoanaFizica(!persoanaFizica);
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

    const onSubmit = data => {
        globalContext.updateDebitori(data);
    };

    return (
        <form
            onBlur={handleSubmit(onSubmit)}>

            <div className="bx--row debitor">
                <Controller
                    as={
                        <Select
                            className=""
                            disabled={false}
                            helperText=""
                            iconDescription="open list of options"
                            id=""
                            inline={false}
                            invalid={false}
                            invalidText=""
                            light={false}
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
                    }
                    control={control}
                    defaultValue={props.persoana}
                    labelText="Persoana:"
                    name="persoana"
                    onChange={toggletPersoanaFizica}
                />
                <Controller
                    as={<TextInputTemplate />}
                    control={control}
                    defaultValue={props.id}
                    labelText=""
                    name="id"
                    placeholder=""
                    hidden
                />
            </div>
            <div className="bx--row">
                {persoanaFizica ?
                    <Controller
                        as={<TextInputTemplate />}
                        control={control}
                        defaultValue={props.nume}
                        labelText="Nume/Prenume:"
                        name="nume"
                        placeholder="Ex: Andreea Niculache"
                    />
                    : <Controller
                        as={<TextInputTemplate />}
                        control={control}
                        defaultValue={props.nume}
                        labelText="Denumire Societate:"
                        name="nume"
                        placeholder="Ex: S.C. POLARISAN M HOLDING S.R.L."
                    />
                }
            </div>
            <div className="bx--row">
                {persoanaFizica ?
                    <Controller
                        as={<TextInputTemplate />}
                        control={control}
                        defaultValue={props.CNP}
                        labelText="CNP:"
                        name="CNP"
                        placeholder="Ex: 1871123474321"
                    />
                    : <Controller
                        as={<TextInputTemplate />}
                        control={control}
                        defaultValue={props.CUI}
                        labelText="CUI:"
                        name="CUI"
                        placeholder="Ex: 6859662"
                    />
                }
            </div>
            <div className="bx--row">
                {persoanaFizica ?
                    <Controller
                        as={<TextInputTemplate />}
                        control={control}
                        defaultValue={props.domiciliul}
                        labelText="cu domiciliul in:"
                        name="domiciliul"
                        placeholder="Ex: com. Gruia, sat Izvoarele"
                    />
                    : <Controller
                        as={<TextInputTemplate />}
                        control={control}
                        defaultValue={props.sediul}
                        labelText="cu sediul:"
                        name="sediul"
                        placeholder="Ex: Alexandria, str. Libertatii, nr.230A, et. 2"
                    />
                }
            </div>
            <div className="bx--row">
                <Controller
                    as={<TextInputTemplate />}
                    control={control}
                    defaultValue={props.judetul}
                    labelText="judetul:"
                    name="judetul"
                    placeholder="Ex: Teleorman"
                />
            </div>
        </form>
    );

};

export default Debitor;
