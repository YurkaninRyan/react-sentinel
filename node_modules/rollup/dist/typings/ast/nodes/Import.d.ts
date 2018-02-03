import CallExpression from './CallExpression';
import { NodeType } from './NodeType';
import { NodeBase } from './shared/Node';
import MagicString from 'magic-string';
import NamespaceVariable from '../variables/NamespaceVariable';
import { RenderOptions } from '../../Module';
export default class Import extends NodeBase {
    type: NodeType.Import;
    parent: CallExpression;
    private resolution;
    private resolutionInterop;
    setResolution(resolution: NamespaceVariable | string | void, interop: boolean): void;
    render(code: MagicString, options: RenderOptions): void;
}
