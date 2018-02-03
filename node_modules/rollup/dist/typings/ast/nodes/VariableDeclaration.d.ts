import { Node, NodeBase } from './shared/Node';
import ExecutionPathOptions from '../ExecutionPathOptions';
import VariableDeclarator from './VariableDeclarator';
import MagicString from 'magic-string';
import { ObjectPath } from '../variables/VariableReassignmentTracker';
import { NodeType } from './NodeType';
import { RenderOptions } from '../../Module';
export declare function isVariableDeclaration(node: Node): node is VariableDeclaration;
export default class VariableDeclaration extends NodeBase {
    type: NodeType.VariableDeclaration;
    declarations: VariableDeclarator[];
    kind: 'var' | 'let' | 'const';
    reassignPath(_path: ObjectPath, _options: ExecutionPathOptions): void;
    hasEffectsWhenAssignedAtPath(_path: ObjectPath, _options: ExecutionPathOptions): boolean;
    includeWithAllDeclarations(): boolean;
    includeInBundle(): boolean;
    initialiseChildren(): void;
    render(code: MagicString, options: RenderOptions): void;
}
