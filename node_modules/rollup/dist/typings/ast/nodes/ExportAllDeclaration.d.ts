import { NodeBase } from './shared/Node';
import Literal from './Literal';
import MagicString from 'magic-string';
import { NodeType } from './NodeType';
import { RenderOptions } from '../../Module';
export default class ExportAllDeclaration extends NodeBase {
    type: NodeType.ExportAllDeclaration;
    source: Literal<string>;
    isExportDeclaration: true;
    initialiseNode(): void;
    render(code: MagicString, _options: RenderOptions): void;
}
