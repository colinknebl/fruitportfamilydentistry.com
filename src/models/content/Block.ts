import { Item } from './Item';
import { parseTag } from './helpers';
import { Child } from './Child';
import { MarkDef } from './MarkDef';
import type { RawBlock } from './Content';

export class Block extends Item {
    private _rawBlock: RawBlock;
    public children: Child[];
    public markDefs: MarkDef[];
    public tag: string;

    constructor(rawTag: string, rawBlock: RawBlock) {
        super(rawBlock._key, rawBlock._type);
        this.tag = parseTag(rawTag);
        this.markDefs = rawBlock.markDefs.map(
            (md) => new MarkDef(md._key, md._type, md.href)
        );
        this.children = rawBlock.children.map((child) => {
            return new Child(child._key, child._type, child.marks, child.text);
        });
        this._rawBlock = rawBlock;
    }
}
