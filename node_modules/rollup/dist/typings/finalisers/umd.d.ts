import Chunk from '../Chunk';
import { Bundle as MagicStringBundle } from 'magic-string';
import { OutputOptions } from '../rollup/index';
export default function umd(chunk: Chunk, magicString: MagicStringBundle, {exportMode, indentString, getPath, intro, outro}: {
    exportMode: string;
    indentString: string;
    getPath: (name: string) => string;
    intro: string;
    outro: string;
}, options: OutputOptions): any;
