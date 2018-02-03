import ExecutionPathOptions from '../ExecutionPathOptions';
import { ObjectPath } from '../variables/VariableReassignmentTracker';
import { NodeType } from './NodeType';
import { ExpressionNode, NodeBase } from './shared/Node';
export default class UpdateExpression extends NodeBase {
    type: NodeType.UpdateExpression;
    operator: '++' | '--' | '**';
    argument: ExpressionNode;
    prefix: boolean;
    bindNode(): void;
    hasEffects(options: ExecutionPathOptions): boolean;
    hasEffectsWhenAccessedAtPath(path: ObjectPath, _options: ExecutionPathOptions): boolean;
}
