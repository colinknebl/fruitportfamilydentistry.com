import { SanityBlockContent } from './SanityBlockContent';
import { QueriedModal } from '../gql/queries/modal';

export class Modal extends SanityBlockContent {
    public id: string;
    public imageUrl: string | undefined;
    public title: string;

    constructor(queriedModal: QueriedModal) {
        super(queriedModal?._rawContent);

        if (queriedModal) {
            this.id = queriedModal.id;
            this.imageUrl = queriedModal.image?.asset?.url;
            this.title = queriedModal.title;
        }
    }
}
