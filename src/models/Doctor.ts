import { Content, RawBlock } from './content/Content';

export class Doctor {
    public content: Content;
    constructor(
        public id: string,
        public name: string,
        public imageUrl: string,
        content: RawBlock[]
    ) {
        this.content = new Content(content);
    }
}
