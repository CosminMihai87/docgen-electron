/**
 * @author: Cosmin Mihai <cosmin.mihai2612@gmail.com>
 */

import React, { useState } from "react";

export const GlobalContext = React.createContext(
{
  step: 0,
  persoana_creditor: "",
  persoana_debitor: "",
  nume_creditor: "",
  nume_debitor: "",
  domiciliul_creditor: "",
  domiciliul_debitor: "",
  sediul_creditor: "",
  sediul_debitor: "",
  judetul_creditor: "",
  judetul_debitor: "",
  titlu_executoriu: "",
  CUI_debitor: "",
  CNP_debitor: "",
  debit: "",
  mijloace_de_executie: [],
  nr_folders: 0,
  updateStep: () => {},
  updateDetails: () => {},
  updateMijloaceDeExecutie: () => {},
  reset: () => {}
});

const ContextAPI = props => {

  const [state, setState] = useState({
    step: 0,
    persoana_creditor: "",
    persoana_debitor: "",
    nume_creditor: "",
    nume_debitor: "",
    domiciliul_creditor: "",
    domiciliul_debitor: "",
    sediul_creditor: "",
    sediul_debitor: "",
    judetul_creditor: "",
    judetul_debitor: "",
    titlu_executoriu: "",
    CUI_debitor: "",
    CNP_debitor: "",
    debit: "",
    mijloace_de_executie: [],
    nr_folders: 0
  });

  const updateStepHandler = (value) => {
    setState({
      ...state,
      step: value
    });
  };

  const updateDetailsHandler = (details) => {
    setState({
      ...state,
      ...details
    });
  };

  const updateMijloaceDeExecutieHandler = (value) => {
    setState({
      ...state,
      mijloace_de_executie: [...state.mijloace_de_executie, value]
    });
  };

  const resetHandler = () => {
    setState({
      ...state,
      ...{
        step: 0,
        persoana_creditor: "",
        persoana_debitor: "",
        nume_creditor: "",
        nume_debitor: "",
        domiciliul_creditor: "",
        domiciliul_debitor: "",
        sediul_creditor: "",
        sediul_debitor: "",
        judetul_creditor: "",
        judetul_debitor: "",
        titlu_executoriu: "",
        CUI_debitor: "",
        CNP_debitor: "",
        debit: "",
        mijloace_de_executie: []
      }
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state,
        updateStep: updateStepHandler,
        updateDetails: updateDetailsHandler,
        updateMijloaceDeExecutie: updateMijloaceDeExecutieHandler,
        reset: resetHandler
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextAPI;
