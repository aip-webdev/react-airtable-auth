import create, {GetState, SetState} from 'zustand';

import login from './actions/login';
import logout from './actions/logout';
import createNewUser from './actions/createNewUser';

export interface IStateData {
    users: IUser[],
    authUserId: string,
    isAuth: boolean;
    error: boolean,
    loading: boolean,
    login: (id: string) => void,
    logout: () => void,
    createNewUser: (user: IUser) => void,
}

import {StoreApiWithSubscribeWithSelector} from "zustand/middleware";
import {IUser} from "../../types/global";

const useStore = create<IStateData, SetState<IStateData>,
    GetState<IStateData>,
    StoreApiWithSubscribeWithSelector<IStateData>>((set: SetState<IStateData>, get: GetState<IStateData>) => ({
    users: [],
    error: false,
    loading: false,
    isAuth: false,
    authUserId: '',
    ...login(set),
    ...logout(set),
    ...createNewUser(set),
}));

export default useStore;