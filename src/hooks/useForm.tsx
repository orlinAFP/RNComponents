import {useState} from 'react';

//es UN GENERNERICO, PARA QUE TOME EL VALOR QUE SE LE ENVIA <T extends Object>
export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = <K extends Object>( value:K, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
  };
};
