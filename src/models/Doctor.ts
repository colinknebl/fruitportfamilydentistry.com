import { RawBlock, SanityBlockContent } from './SanityBlockContent';

export class Doctor extends SanityBlockContent {
    constructor(
        public id: string,
        public name: string,
        public imageUrl: string,
        content: RawBlock[]
    ) {
        super(content);
    }
}
