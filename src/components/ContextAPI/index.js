/**
 * @author: Cosmin Mihai <cosmin.mihai2612@gmail.com>
 */

import React, { useState } from "react";

export const GlobalContext = React.createContext(
{
  step: 0,
  creditori: [{
    id: 1,
    persoana: "Fizica",
    nume: "",
    domiciliul: "",
    sediul: "",
    judetul: ""
  }],
  debitori: [{
    id: 1,
    persoana: "Fizica",
    nume: "",
    domiciliul: "",
    sediul: "",
    judetul: "",
    CUI: "",
    CNP: "",
  }],
  titluriExecutorii: [],
  debituri: [],
  mijloaceDeExecutie: [],
  nrFolders: 0,
  updateStep: () => {},
  updateCreditori: () => {},
  addCreditori: () => {},
  removeCreditor: () => {},
  updateDebitori: () => {},
  addDebitori: () => {},
  removeDebitor: () => {},
  updateDebituri: () => {},
  updateTitluriExecutorii: () => {},
  updateMijloaceDeExecutie: () => {},
  updateDetails: () => {},
  reset: () => {}
});

const ContextAPI = props => {

  const [state, setState] = useState({
    step: 0,
    creditori: [{
      id: 1,
      persoana: "Fizica",
      nume: "",
      domiciliul: "",
      sediul: "",
      judetul: ""
    }],
    debitori: [{
      id: 1,
      persoana: "Fizica",
      nume: "",
      domiciliul: "",
      sediul: "",
      judetul: "",
      CUI: "",
      CNP: "",
    }],
    titluriExecutorii: [],
    debituri: [],
    mijloaceDeExecutie: [],
    nrFolders: 0,
  });

  const updateStepHandler = (value) => {
    setState({
      ...state,
      step: value
    });
  };

  const addCreditoriHandler = (value) => {
    setState({
      ...state,
      creditori: [
        ...state.creditori,
        value
      ]
    });
  };

  const removeCreditorHandler = k => {
    let creditori = [...state.creditori];
    let index = creditori.findIndex(({id}) => id === k);
    setState({
      ...state,
      creditori: [
        ...creditori.slice(0, index),
        ...creditori.slice(index + 1)
      ]
    });
  };

  const updateCreditoriHandler = (value) => {
    let creditori = [...state.creditori];
    let index = creditori.findIndex(({id}) => id === value.id);
    setState({
      ...state,
      creditori: [
        ...creditori.slice(0, index),
        {
          ...creditori[index],
          persoana: value.persoana,
          nume: value.nume,
          domiciliul: value.domiciliul,
          sediul: value.sediul,
          judetul: value.judetul
        },
        ...creditori.slice(index + 1)
      ]
    });
  };

  const addDebitoriHandler = (value) => {
    setState({
      ...state,
      debitori: [
        ...state.debitori,
        value
      ]
    });
  };

  const removeDebitorHandler = k => {
    let debitori = [...state.creditori];
    let index = debitori.findIndex(({id}) => id === k);
    setState({
      ...state,
      creditori: [
        ...debitori.slice(0, index),
        ...debitori.slice(index + 1)
      ]
    });
  };

  const updateDebitoriHandler = (value) => {
    let debitori = [...state.debitori];
    let index = debitori.findIndex(({id}) => id === value.id);
    setState({
      ...state,
      debitori: [
        ...debitori.slice(0, index),
        {
          ...debitori[index],
          persoana: value.persoana,
          nume: value.nume,
          domiciliul: value.domiciliul,
          sediul: value.sediul,
          judetul: value.judetul,
          CUI: value.CUI,
          CNP: value.CNP,
        },
        ...debitori.slice(index + 1)
      ]
    });
  };

  const updateTitluriExecutoriiHandler = (value) => {
    setState([
      ...state,
      value
    ]);
  };

  const updateDebitHandler = (value) => {
    setState([
      ...state,
      value
    ]);
  };

  const updateMijloaceDeExecutieHandler = (value) => {
    setState({
      ...state,
      mijloaceDeExecutie: [...state.mijloaceDeExecutie, value]
    });
  };

  const updateDetailsHandler = (details) => {
    setState({
      ...state,
      ...details
    });
  };

  const resetHandler = () => {
    setState({
      ...state,
      ...{
        step: 0,
        creditori: [{
          id: 1,
          persoana: "Fizica",
          nume: "",
          domiciliul: "",
          sediul: "",
          judetul: ""
        }],
        debitori: [{
          id: 1,
          persoana: "Fizica",
          nume: "",
          domiciliul: "",
          sediul: "",
          judetul: "",
          CUI: "",
          CNP: "",
        }],
        titluriExecutorii: [],
        debituri: [],
        mijloaceDeExecutie: [],
        nrFolders: 0,
      }
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state,
        updateStep: updateStepHandler,
        addCreditori: addCreditoriHandler,
        removeCreditor: removeCreditorHandler,
        updateCreditori: updateCreditoriHandler,
        addDebitori: addDebitoriHandler,
        removeDebitor: removeDebitorHandler,
        updateDebitori: updateDebitoriHandler,
        updateTitluriExecutorii: updateTitluriExecutoriiHandler,
        updateDebituri: updateDebitHandler,
        updateMijloaceDeExecutie: updateMijloaceDeExecutieHandler,
        updateDetails: updateDetailsHandler,
        reset: resetHandler
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextAPI;
