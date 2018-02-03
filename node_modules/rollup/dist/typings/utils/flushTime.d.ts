export declare function timeStart(label: string): void;
export declare function timeEnd(label: string): void;
export declare function flushTime(log?: typeof defaultLog): void;
/** @interal */
export declare function defaultLog(label: string, time: number): void;
