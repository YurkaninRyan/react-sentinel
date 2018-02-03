import { NodeBase } from './shared/Node';
import ExecutionPathOptions from '../ExecutionPathOptions';
import CallOptions from '../CallOptions';
import MethodDefinition from './MethodDefinition';
import { ObjectPath } from '../variables/VariableReassignmentTracker';
import { NodeType } from './NodeType';
export default class ClassBody extends NodeBase {
    type: NodeType.ClassBody;
    body: MethodDefinition[];
    classConstructor: MethodDefinition | null;
    hasEffectsWhenCalledAtPath(path: ObjectPath, callOptions: CallOptions, options: ExecutionPathOptions): boolean;
    initialiseNode(): void;
}
