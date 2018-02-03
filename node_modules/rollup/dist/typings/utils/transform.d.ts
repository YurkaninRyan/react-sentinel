import Graph from '../Graph';
import { RawSourceMap } from 'source-map';
import { Plugin, SourceDescription } from '../rollup/index';
import Program from '../ast/nodes/Program';
export default function transform(graph: Graph, source: SourceDescription, id: string, plugins: Plugin[]): Promise<{
    code: string;
    originalCode: string;
    originalSourcemap: any;
    ast: Program;
    sourcemapChain: RawSourceMap[];
}>;
