import ExternalVariable from './ast/variables/ExternalVariable';
import Graph from './Graph';
import Variable from './ast/variables/Variable';
export default class ExternalModule {
    private graph;
    chunk: void;
    declarations: {
        [name: string]: ExternalVariable;
    };
    exportsNames: boolean;
    exportsNamespace: boolean;
    id: string;
    isExternal: true;
    isEntryPoint: false;
    name: string;
    mostCommonSuggestion: number;
    nameSuggestions: {
        [name: string]: number;
    };
    reexported: boolean;
    used: boolean;
    execIndex: number;
    constructor({graph, id}: {
        graph: Graph;
        id: string;
    });
    suggestName(name: string): void;
    warnUnusedImports(): void;
    traceExport(name: string): Variable;
}
