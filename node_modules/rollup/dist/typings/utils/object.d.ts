export declare const keys: (o: {}) => string[];
export declare function blank(): any;
export declare function forOwn<T>(object: {
    [key: string]: T;
}, func: (value: T, key: string) => void): void;
export declare function assign<T, U>(target: T, source: U): T & U;
