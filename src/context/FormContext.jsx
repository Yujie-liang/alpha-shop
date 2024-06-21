import { createContext, useState } from 'react';
const form = {name: '', 
                cardNumber: '', 
                exp: '', 
                CVC: '',
            }
export const FormContext = createContext();

export function FormProvider({children}) {
    const [formState, setFormState] = useState(form);

    const updateField = (field, value) =>{
        setFormState({...formState, [field]: value})
    }

    return (
        <FormContext.Provider value={{ formState, updateField}}>
            {children}
        </FormContext.Provider>
    )
}

