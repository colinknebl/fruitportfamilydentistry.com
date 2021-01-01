import { ContentDate } from './ContentDate';

type RawMarkDef = {
    _key: string;
    _type: 'link';
    href: string;
};

type RawChild = {
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
};

export type RawBlock = {
    _key: string;
    _type: 'block';
    children: RawChild[];
    markDefs: RawMarkDef[];
    style: string;
    listItem?: 'number' | 'bullet';
    level?: number;
};

export class SanityBlockContent {
    #date: ContentDate;
    constructor(public readonly blocks?: RawBlock[], date?: string) {
        this.#date = new ContentDate(date ?? new Date().toString());
    }

    public get active(): boolean {
        return Boolean(this.blocks);
    }

    public get date() {
        return this.#date.formattedDate;
    }
}
