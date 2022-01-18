import {mergeDeepRight} from "ramda";
import {SetState} from "zustand";
import {IStateData} from "../index";


const login = (set: SetState<IStateData>) => ({
    login: (id: string) =>
        set((prev) =>
            mergeDeepRight(prev, {isAuth: true, authUserId: id})
        )
});

export default login;