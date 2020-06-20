import { parseTag } from './helpers';

export class Item {
    public key: string;
    public type: string;
    public tag: string;

    constructor(key: string, type: string) {
        this.key = key;
        this.type = type;
        this.tag = parseTag(type);
    }
}
