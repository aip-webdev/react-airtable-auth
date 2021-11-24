import {assoc, merge} from "ramda";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateRandomString());

export const addStringId = <O extends object>(obj: O) => {
    return merge(obj, {id: Math.random().toString(36).substring(2, 15)} )
};
