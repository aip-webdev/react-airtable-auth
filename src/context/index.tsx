import React from "react";
import {rootReducer} from "./reducers";
import {IStateData, MyAction} from "../../types/global";

// @ts-ignore
let AppStateContext = React.createContext();
// @ts-ignore
const AppDispatchContext = React.createContext();

function AppProvider({children}: { children: React.ReactNode}) {
    const initState: IStateData = {
        usersData: {
            users: [],
            error: false,
            loading: false
        },
        isAuth: false
    }
    const [state, dispatch] = React.useReducer(rootReducer, initState);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}

function useAppState(): IStateData {
    return React.useContext(AppStateContext) as IStateData;
}

function useAppDispatch(): React.Dispatch<MyAction> {
    return React.useContext(AppDispatchContext) as React.Dispatch<MyAction>
}

export {AppProvider, useAppState, useAppDispatch}
