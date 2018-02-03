import Chunk from '../Chunk';
import { Bundle as MagicStringBundle } from 'magic-string';
import { OutputOptions } from '../rollup/index';
export declare type Finaliser = (chunk: Chunk, magicString: MagicStringBundle, {exportMode, getPath, indentString, intro, outro}: {
    exportMode: string;
    indentString: string;
    getPath: (name: string) => string;
    intro: string;
    outro: string;
}, options: OutputOptions) => MagicStringBundle;
declare const _default: {
    [format: string]: Finaliser;
};
export default _default;
