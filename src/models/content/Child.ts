import { Item } from './Item';
import { parseTag } from './helpers';

export class Child extends Item {
    public tags: string[];
    constructor(
        _key: string,
        _type: string,
        marks: string[],
        public text: string
    ) {
        super(_key, _type);
        this.tags = marks.map((m) => parseTag(m));
    }
}
