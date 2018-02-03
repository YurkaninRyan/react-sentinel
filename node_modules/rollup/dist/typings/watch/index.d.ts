/// <reference types="node" />
import { EventEmitter } from 'events';
import { InputOptions, OutputOptions, OutputChunk } from '../rollup/index';
import { WatchOptions } from 'chokidar';
export interface WatcherOptions {
    chokidar?: boolean | WatchOptions;
    include?: string[];
    exclude?: string[];
    clearScreen?: boolean;
}
export interface RollupWatchOptions extends InputOptions {
    output?: OutputOptions;
    watch?: WatcherOptions;
}
export declare class Watcher extends EventEmitter {
    dirty: boolean;
    running: boolean;
    tasks: Task[];
    succeeded: boolean;
    constructor(configs: RollupWatchOptions[]);
    close(): void;
    _makeDirty(): void;
    _run(): void;
}
export declare class Task {
    watcher: Watcher;
    dirty: boolean;
    closed: boolean;
    watched: Set<string>;
    inputOptions: InputOptions;
    cache: OutputChunk;
    chokidarOptions: WatchOptions;
    chokidarOptionsHash: string;
    outputFiles: string[];
    outputs: OutputOptions[];
    deprecations: {
        old: string;
        new: string;
    }[];
    filter: (id: string) => boolean;
    constructor(watcher: Watcher, config: RollupWatchOptions);
    close(): void;
    makeDirty(): void;
    run(): Promise<void>;
    watchFile(id: string): void;
}
export default function watch(configs: RollupWatchOptions[]): Watcher;
