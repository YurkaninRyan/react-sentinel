import ExecutionPathOptions from '../ExecutionPathOptions';
import VariableDeclaration from './VariableDeclaration';
import Scope from '../scopes/Scope';
import { StatementBase, StatementNode } from './shared/Statement';
import { PatternNode } from './shared/Pattern';
import { NodeType } from './NodeType';
import { ExpressionNode } from './shared/Node';
export default class ForOfStatement extends StatementBase {
    type: NodeType.ForOfStatement;
    left: VariableDeclaration | PatternNode;
    right: ExpressionNode;
    body: StatementNode;
    bindNode(): void;
    hasEffects(options: ExecutionPathOptions): boolean;
    includeInBundle(): boolean;
    initialiseChildren(): void;
    initialiseScope(parentScope: Scope): void;
}
