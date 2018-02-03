import { ExpressionNode, NodeBase } from './shared/Node';
import ExportDefaultVariable from '../variables/ExportDefaultVariable';
import ClassDeclaration from './ClassDeclaration';
import FunctionDeclaration from './FunctionDeclaration';
import MagicString from 'magic-string';
import { NodeType } from './NodeType';
import { RenderOptions } from '../../Module';
export default class ExportDefaultDeclaration extends NodeBase {
    type: NodeType.ExportDefaultDeclaration;
    declaration: FunctionDeclaration | ClassDeclaration | ExpressionNode;
    private _declarationName;
    isExportDeclaration: true;
    variable: ExportDefaultVariable;
    bindNode(): void;
    includeDefaultExport(): void;
    includeInBundle(): boolean;
    initialiseNode(): void;
    render(code: MagicString, options: RenderOptions): void;
}
