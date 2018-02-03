import ExecutionPathOptions from '../ExecutionPathOptions';
import CallOptions from '../CallOptions';
import Scope from '../scopes/Scope';
import MagicString from 'magic-string';
import { ObjectPath } from '../variables/VariableReassignmentTracker';
import { ForEachReturnExpressionCallback, SomeReturnExpressionCallback } from './shared/Expression';
import { NodeType } from './NodeType';
import { ExpressionNode, NodeBase } from './shared/Node';
import { RenderOptions } from '../../Module';
export default class ConditionalExpression extends NodeBase {
    type: NodeType.ConditionalExpression;
    test: ExpressionNode;
    alternate: ExpressionNode;
    consequent: ExpressionNode;
    testValue: any;
    reassignPath(path: ObjectPath, options: ExecutionPathOptions): void;
    forEachReturnExpressionWhenCalledAtPath(path: ObjectPath, callOptions: CallOptions, callback: ForEachReturnExpressionCallback, options: ExecutionPathOptions): void;
    getValue(): any;
    hasEffects(options: ExecutionPathOptions): boolean;
    hasEffectsWhenAccessedAtPath(path: ObjectPath, options: ExecutionPathOptions): boolean;
    hasEffectsWhenAssignedAtPath(path: ObjectPath, options: ExecutionPathOptions): boolean;
    hasEffectsWhenCalledAtPath(path: ObjectPath, callOptions: CallOptions, options: ExecutionPathOptions): boolean;
    initialiseChildren(parentScope: Scope): void;
    render(code: MagicString, options: RenderOptions): void;
    someReturnExpressionWhenCalledAtPath(path: ObjectPath, callOptions: CallOptions, predicateFunction: SomeReturnExpressionCallback, options: ExecutionPathOptions): boolean;
    private forEachRelevantBranch(callback);
    private someRelevantBranch(predicateFunction);
}
