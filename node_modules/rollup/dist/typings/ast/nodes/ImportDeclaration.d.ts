import { NodeBase } from './shared/Node';
import Literal from './Literal';
import ImportSpecifier from './ImportSpecifier';
import ImportDefaultSpecifier from './ImportDefaultSpecifier';
import ImportNamespaceSpecifier from './ImportNamespaceSpecifier';
import MagicString from 'magic-string';
import { NodeType } from './NodeType';
import { RenderOptions } from '../../Module';
export default class ImportDeclaration extends NodeBase {
    type: NodeType.ImportDeclaration;
    isImportDeclaration: true;
    specifiers: (ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier)[];
    source: Literal<string>;
    bindChildren(): void;
    initialiseNode(): void;
    render(code: MagicString, _options: RenderOptions): void;
}
