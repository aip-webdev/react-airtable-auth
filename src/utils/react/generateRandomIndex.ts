import {assoc, merge} from "ramda";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateRandomString());

export let addStringId = ({...obj}: object): object => {
    return merge({...obj}, {id: `${Math.random().toString(36).substring(2, 15)}`})
};
