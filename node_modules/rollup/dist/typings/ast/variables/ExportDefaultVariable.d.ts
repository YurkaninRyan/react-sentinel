import LocalVariable from './LocalVariable';
import ExportDefaultDeclaration from '../nodes/ExportDefaultDeclaration';
import Identifier from '../nodes/Identifier';
import Variable from './Variable';
export default class ExportDefaultVariable extends LocalVariable {
    isDefault: true;
    hasId: boolean;
    private _original;
    declarations: Set<ExportDefaultDeclaration>;
    constructor(name: string, exportDefaultDeclaration: ExportDefaultDeclaration);
    addReference(identifier: Identifier): void;
    getName(): string;
    getOriginalVariableName(): string;
    includeVariable(): boolean;
    setOriginalVariable(original: Variable): void;
}
