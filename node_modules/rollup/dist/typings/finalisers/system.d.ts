import Chunk from '../Chunk';
import { Bundle as MagicStringBundle } from 'magic-string';
export default function system(chunk: Chunk, magicString: MagicStringBundle, {getPath, indentString: t, intro, outro}: {
    indentString: string;
    getPath: (name: string) => string;
    intro: string;
    outro: string;
}): any;
