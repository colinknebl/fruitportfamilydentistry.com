import { parseTag } from './helpers';
import { List } from './List';
import { Block } from './Block';
import type { RawMarkDef } from './MarkDef';

export type RawChild = {
    marks: string[];
    text: string;
    _key: string;
    _type: 'span';
};

enum BlockContentStyle {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    p = 'p',
}

export type RawBlock = {
    children: RawChild[];
    markDefs: RawMarkDef[];
    style: BlockContentStyle;
    listItem?: 'number' | 'bullet';
    level?: number;
    _key: string;
    _type: 'block';
};

export class Content {
    private _rawContent: RawBlock[];
    public blocks: Array<Block | List>;

    constructor(rawContent: RawBlock[]) {
        this._rawContent = rawContent;

        let lastAdded;
        this.blocks = this._rawContent.reduce((content, block) => {
            if (block.listItem) {
                if (this._isSameList(lastAdded, block)) {
                    this._addChildrenToList([block], lastAdded);
                } else if (this._isSubList(lastAdded, block)) {
                    const subList = (lastAdded as List).addSubList(block);
                    this._addBlock(block, subList);
                    lastAdded = subList;
                } else if (this._isParentListItem(lastAdded, block)) {
                    let parentList = this._getParentList(lastAdded, block);
                    this._addChildrenToList([block], parentList);
                } else {
                    const list = List.fromBlock(block);
                    this._addChildrenToList([block], list);
                    lastAdded = list;
                    content.push(lastAdded);
                }
            } else {
                lastAdded = new Block(block.style, block);
                content.push(lastAdded);
            }

            return content;
        }, [] as Block[]);
    }

    private _isSameList(lastAdded: List, block: RawBlock) {
        return (
            lastAdded instanceof List &&
            lastAdded.level === block.level &&
            lastAdded.tag === parseTag(block.listItem)
        );
    }

    private _isSubList(lastAdded: List, block: RawBlock) {
        return lastAdded instanceof List && block.level > lastAdded.level;
    }

    private _isParentListItem(lastAdded: List, block: RawBlock) {
        return (
            lastAdded instanceof List &&
            lastAdded.level > block.level &&
            lastAdded.parentList &&
            lastAdded.parentList.tag === parseTag(block.listItem)
        );
    }

    private _getParentList(lastAdded: List, block: RawBlock): List {
        let parentList = lastAdded.parentList;
        while (parentList.level !== block.level) {
            parentList = parentList.parentList;
        }
        return parentList;
    }

    private _addBlock(rawBlock: RawBlock, list: List) {
        list.addListBlock(rawBlock);
    }

    private _addChildrenToList(block: RawBlock[], list: List) {
        block.forEach((child) => {
            list.addListBlock(child);
        });
    }
}
