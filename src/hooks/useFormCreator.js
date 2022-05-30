import { useState } from "react";
// import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
const useLogin = () => {
  const [error, setError] = useState(false)
  const [complete, setComplete] = useState(false)
  const [formsCreator, setFormsCreator] = useState([
    {
      index: 0,
      label: "",
      component: "",
      type: "",
      _uuid: uuidv4()
    },
  ]);
  const handleInputFormCreator = (prop, e, index) => {
    const clonedInputs = [...formsCreator];
    clonedInputs.splice(index, 1, {
      ...formsCreator[index],
      [prop]: e,
    });
    setFormsCreator(clonedInputs);
  };
  const addInputFormCreator = () => {
    setFormsCreator([
      ...formsCreator,
      {
        index: formsCreator.length,
        label: "",
        component: "",
        type: "",
        _uuid: uuidv4(),
      },
    ]);
  };
  const createForm = () => {
    const label = formsCreator.find(element => element.label === '');
    const component = formsCreator.find(element => element.component === '');
    const type = formsCreator.find(element => element.type === '');
    if(label !== undefined ||component !== undefined || type !== undefined) {
      setError(true);
      return false
    }
    else setComplete(true)
  }
  return { formsCreator, addInputFormCreator, handleInputFormCreator,createForm, error, complete };
};

export default useLogin;
