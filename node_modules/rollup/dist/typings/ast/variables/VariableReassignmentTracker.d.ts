import ExecutionPathOptions from '../ExecutionPathOptions';
import { ExpressionEntity } from '../nodes/shared/Expression';
export interface UnknownKey {
    type: 'UNKNOWN_KEY';
}
export declare type ObjectPathKey = string | UnknownKey;
export declare type ObjectPath = ObjectPathKey[];
export declare function isUnknownKey(key: ObjectPathKey): key is UnknownKey;
export declare const UNKNOWN_KEY: UnknownKey;
export declare type PathCallback = (path: ObjectPath, expression: ExpressionEntity) => void;
export declare type PathPredicate = (path: ObjectPath, expression: ExpressionEntity) => boolean;
export default class VariableReassignmentTracker {
    private _initialExpression;
    private _reassignedPathTracker;
    constructor(initialExpression: ExpressionEntity);
    reassignPath(path: ObjectPath, options: ExecutionPathOptions): void;
    forEachAtPath(path: ObjectPath, callback: PathCallback): void;
    someAtPath(path: ObjectPath, predicateFunction: PathPredicate): boolean;
}
