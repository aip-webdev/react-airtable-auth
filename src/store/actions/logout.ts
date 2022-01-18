import {mergeDeepRight} from "ramda";
import {SetState} from "zustand";
import {IStateData} from "../index";

const logout = (set: SetState<IStateData>) => ({
    logout: () =>
        set((prev) =>
            mergeDeepRight(prev, {isAuth: false, authUserId: ''})
            )
});

export default logout;
