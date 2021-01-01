import { SanityBlockContent, RawBlock } from './SanityBlockContent';

export class HomeLetter extends SanityBlockContent {
    constructor(rawLetter?: HomeLetter.Raw) {
        super(rawLetter?.text, rawLetter?.publishDate);
    }
}

export declare namespace HomeLetter {
    interface Raw {
        publishDate: string;
        text: RawBlock[];
    }
}
