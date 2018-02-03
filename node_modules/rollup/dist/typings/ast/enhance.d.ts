import Module from '../Module';
import Comment from './comment';
import Import from './nodes/Import';
export default function enhance(ast: any, module: Module, comments: Comment[], dynamicImportReturnList: Import[]): void;
