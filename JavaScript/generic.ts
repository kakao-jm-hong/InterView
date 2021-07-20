function getProperty<Type, key extends keyof Type>(obj: Type, key: key) {
    return obj[key];
}

let x = {a: 1, b:"3", c:5, d:4};

getProperty(x, 'a');

interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kv1: KeyPair<string, number> = {key : "1", value: 2}