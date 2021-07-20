import {v4} from 'uuid';

type UniqObject = {
    id: string,
    [key: string]: string | number | boolean,
}

const makeObject = () => {
    {id: v4()}
}

console.log(makeObject());