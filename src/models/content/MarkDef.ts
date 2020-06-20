import { parseTag } from './helpers';

export type RawMarkDef = {
    href: string;
    _key: string;
    _type: 'link';
};

export class MarkDef {
    public key: string;
    public tag: string;
    public href: string;
    constructor(key: string, type: 'link', href: string) {
        this.key = key;
        this.tag = parseTag(type);
        this.href = href;
    }
}
