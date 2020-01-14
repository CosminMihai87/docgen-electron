import React, { useState, useContext, useRef } from 'react';
import './Creditor.scss';
import {
    Select,
    SelectItem,
    TextInput
} from 'carbon-components-react';
import {Controller, useForm} from "react-hook-form";
import { GlobalContext } from "../ContextAPI";

const Creditor = props => {

    const globalContext = useContext(GlobalContext);
    const { control, handleSubmit, register, errors } = useForm();
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
        globalContext.updateCreditori(data);
    };

    return (
        <form
            onBlur={handleSubmit(onSubmit)}>

            <div className="bx--row">
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
                        // ref={register({ required: true })}
                    />
                    : <Controller
                        as={<TextInputTemplate />}
                        control={control}
                        defaultValue={props.nume}
                        labelText="Denumire Societate:"
                        name="nume"
                        placeholder="Ex: S.C. POLARISAN M HOLDING S.R.L."
                        // ref={register({ required: true })}
                    />
                }
                {/*{errors.numeCreditor && <p>Alegeti un nume valid.</p>}*/}
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

export default Creditor;
