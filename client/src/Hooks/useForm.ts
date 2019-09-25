import { useState } from 'react';

/*
    Custom hook to consolidate form state management.
    Depends on each input having a 'name' prop.
*/

export const useForm = (initialValues: any) => {
    const [values, setValues] = useState<any>(initialValues);

    return [values, (e: any) => setValues({ ...values, [e.target.name]: e.target.value })];
};
