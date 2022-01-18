import * as React from 'react';
import {Avatar} from '@mui/material';

const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
};

const stringAvatar = (name: string) => ({
    sx: {
        bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
});

interface ILetterAvatar {
    firstName: string,
    lastname?: string
}

export const LetterAvatar = React.memo(({firstName='', lastname=''}: ILetterAvatar) => {
    return (
        <Avatar {...stringAvatar(`${firstName} ${lastname}`)} />
    )
})
