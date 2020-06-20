import { parseTag } from './helpers';
import type { RawBlock } from './Content';
import { Item } from './Item';
import { Block } from './Block';

export class List extends Item {
    public children: Array<Block | List> = [];
    public tag: string;
    public level: number;
    private _parentList: List | undefined;

    static fromBlock(block: RawBlock): List {
        return new List(block._key, block._type, block.level, block.listItem);
    }

    constructor(key: string, type: string, level: number, listItem: string) {
        super(key, type);
        this.level = level;
        this.tag = parseTag(listItem);
    }

    public addListBlock(rawBlock: RawBlock) {
        this.children.push(new Block('li', rawBlock));
    }

    public addSubList(block: RawBlock) {
        const subList = List.fromBlock(block);
        subList._parentList = this;
        this.children.push(subList);
        return subList;
    }

    get parentList(): List {
        return this._parentList;
    }
}
