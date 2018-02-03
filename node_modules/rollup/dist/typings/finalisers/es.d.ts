import { Bundle as MagicStringBundle } from 'magic-string';
import Chunk from '../Chunk';
export default function es(chunk: Chunk, magicString: MagicStringBundle, {getPath, intro, outro}: {
    exportMode: string;
    indentString: string;
    getPath: (name: string) => string;
    intro: string;
    outro: string;
}): any;
