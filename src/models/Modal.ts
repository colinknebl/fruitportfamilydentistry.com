import { Content } from './content/Content';
import { QueriedModal } from '../gql/queries/modal';

export class Modal {
    #content: Content = null;
    #isActive: boolean = false;
    public id: string;
    public imageUrl: string | undefined;
    public title: string;

    constructor(queriedModal: QueriedModal) {
        if (queriedModal) {
            this.#isActive = true;
            this.#content = new Content(queriedModal._rawContent);
            this.id = queriedModal.id;
            this.imageUrl = queriedModal.image?.asset?.url;
            this.title = queriedModal.title;
        }
    }

    public get content(): Content {
        return this.#content;
    }

    public get isActive(): boolean {
        return this.#isActive;
    }
}
