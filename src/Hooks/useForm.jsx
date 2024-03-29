import React from 'react';

const validators = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido.'
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: 'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres.'
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize números apenas.'
    }

}
const UseForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if (type === false) {
            return true
        }
        if (value.length === 0) {
            setError('Preencha um valor.')
            return false;
        } else if (validators[type] && !validators[type].regex.test(value)) {
            setError(validators[type].message);
            return false;
        } else {
            setError(null);
            return true;

        }
    }

    function onChange({target}) {
        if (error) {
            validate(target.value);
        }

        setValue(target.value);
    }

    return ({
        value, setValue, onChange, error, validate: () => validate(value), onBlur: () => validate(value)
    });
};

export default UseForm;