import { ExpressionEntity } from './nodes/shared/Expression';
import SpreadElement from './nodes/SpreadElement';
import TaggedTemplateExpression from './nodes/TaggedTemplateExpression';
import NewExpression from './nodes/NewExpression';
import Property from './nodes/Property';
import CallExpression from './nodes/CallExpression';
export declare type CallExpressionType = TaggedTemplateExpression | CallExpression | NewExpression | Property;
export interface CallCreateOptions {
    withNew: boolean;
    args?: (ExpressionEntity | SpreadElement)[];
    caller: CallExpressionType;
}
export default class CallOptions implements CallCreateOptions {
    withNew: boolean;
    args: (ExpressionEntity | SpreadElement)[];
    caller: CallExpressionType;
    static create(callOptions: CallCreateOptions): CallOptions;
    constructor({withNew, args, caller}?: CallCreateOptions);
    equals(callOptions: CallOptions): boolean;
}
