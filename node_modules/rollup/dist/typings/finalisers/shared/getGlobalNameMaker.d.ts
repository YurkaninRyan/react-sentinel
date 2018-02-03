import Chunk from "../../Chunk";
import Module from "../../Module";
import { GlobalsOption } from "../../rollup/index";
import ExternalModule from "../../ExternalModule";
export default function getGlobalNameMaker(globals: GlobalsOption, chunk: Chunk, fallback?: string): (module: Module | ExternalModule) => string;
