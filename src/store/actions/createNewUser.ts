import {SetState} from "zustand";
import {append} from "ramda";
import {IStateData} from "../index";
import {IUser} from "../../../types/global";

const createNewUser = (set: SetState<IStateData>) => ({
    createNewUser: (user: IUser) =>
        set((prev) => ({
                users: append(user, prev.users)
            })
        )
});

export default createNewUser;