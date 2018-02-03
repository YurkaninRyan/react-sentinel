import Variable from './Variable';
import Identifier from '../nodes/Identifier';
import Module from '../../Module';
export declare function isNamespaceVariable(variable: Variable): variable is NamespaceVariable;
export default class NamespaceVariable extends Variable {
    isNamespace: true;
    module: Module;
    needsNamespaceBlock: boolean;
    originals: {
        [name: string]: Variable;
    };
    constructor(module: Module);
    addReference(identifier: Identifier): void;
    includeVariable(): boolean;
    renderBlock(legacy: boolean, freeze: boolean, indentString: string): string;
}
