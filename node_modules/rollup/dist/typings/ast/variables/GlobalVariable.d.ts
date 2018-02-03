import Variable from './Variable';
import { ObjectPath } from './VariableReassignmentTracker';
export declare function isGlobalVariable(variable: Variable): variable is GlobalVariable;
export default class GlobalVariable extends Variable {
    isExternal: true;
    isGlobal: true;
    constructor(name: string);
    hasEffectsWhenAccessedAtPath(path: ObjectPath): boolean;
    hasEffectsWhenCalledAtPath(path: ObjectPath): boolean;
    private isPureFunctionMember(path);
}
