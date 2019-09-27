import React, { createContext, useReducer } from 'react';

interface StateProps {
    savedArticles: string[];
}

interface ActionProps {
    type: string;
    payload: any;
}

const intialState: StateProps = {
    savedArticles: [],
};

const reducer = (state: StateProps, action: ActionProps) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, savedArticles: [...action.payload] };

        case 'SAVE_ARTICLE':
            return { ...state, savedArticles: [...action.payload] };

        case 'UNSAVE_ARTICLE':
            return { ...state, savedArticles: [...action.payload] };

        default:
            return state;
    }
};

export const Store = createContext<StateProps | any>(intialState);

export const StoreProvider = ({ children }: any): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, intialState);

    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
