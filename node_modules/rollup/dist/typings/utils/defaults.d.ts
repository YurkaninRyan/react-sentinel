import Module from '../Module';
import ExternalModule from '../ExternalModule';
import { InputOptions } from '../rollup';
export declare function load(id: string): string;
export declare function resolveId(options: InputOptions): (importee: string, importer: string) => string | void;
export declare function makeOnwarn(): (warning: any) => void;
export declare function handleMissingExport(module: Module, name: string, otherModule: Module | ExternalModule, start?: number): void;
