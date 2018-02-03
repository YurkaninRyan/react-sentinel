import Module from '../Module';
import { RawSourceMap } from 'source-map';
import Chunk from '../Chunk';
export default function collapseSourcemaps(bundle: Chunk, file: string, map: RawSourceMap, modules: Module[], bundleSourcemapChain: RawSourceMap[]): RawSourceMap;
