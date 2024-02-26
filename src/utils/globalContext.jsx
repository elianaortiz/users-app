/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useReducer } from "react";

const initialState = {
    users: [],
    //openCard: null,
    filteredUsers: [],
}

const reducerActions = {
    SET_DATA: "SET_DATA",
    //TOGGLE_CARD: "TOGGLE_CARD",
    FILTER_USERS: "FILTER_USERS",
};

export const contextReducer =(state, action) => {
    switch (action.type) {
        case reducerActions.SET_DATA:
            return {...state, users:action.payload};
       /* case reducerActions.TOGGLE_CARD:
            return { ...state, openCard:state.openCard === action.payload ? null : action.payload}; */
        case reducerActions.FILTER_USERS:
            return { ...state, filteredUsers: action.payload};
        default:
            return state;
    }
};

export const GlobalContext = createContext();

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(contextReducer, initialState);

    const getUsersData = async() => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await response.json();
            dispatch({
                type: reducerActions.SET_DATA,
                payload: data
            });
            console.log(data);
        } catch (error) {
            console.error('Error al obtener los usuarios.', error);
        }
    };

    useEffect(() => {
        getUsersData();
    }, []);

    /* const toggleCard = (userId) => {
        dispatch({
            type: reducerActions.TOGGLE_CARD,
            payload: userId === state.openCard ? null : userId,
        });
    }; */

    const filterUsers = (filteredUsers) => {
        dispatch({
            type: reducerActions.FILTER_USERS,
            payload: filteredUsers,
        });
    };

    const value = useMemo(() => {
        return {
            users: state.users,
            //openCard: state.openCard,
            filteredUsers: state.filteredUsers,
            getUsersData,
            //toggleCard,
            filterUsers,
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}