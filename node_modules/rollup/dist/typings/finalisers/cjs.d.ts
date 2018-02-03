import { OutputOptions } from '../rollup/index';
import { Bundle as MagicStringBundle } from 'magic-string';
import Chunk from '../Chunk';
export default function cjs(chunk: Chunk, magicString: MagicStringBundle, {exportMode, getPath, intro, outro}: {
    exportMode: string;
    indentString: string;
    getPath: (name: string) => string;
    intro: string;
    outro: string;
}, options: OutputOptions): MagicStringBundle;
