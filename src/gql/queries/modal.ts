import { useStaticQuery, graphql } from 'gatsby';
import { RawBlock } from '../../models/content/Content';
import { Modal } from '../../models/Modal';

interface _Modal {
    title: string;
    publishedAt: string;
    image: {
        asset: {
            url: string | undefined;
        };
    };
    _rawContent: RawBlock[];
}

type LinkQueryResult = {
    sanitySite: {
        activeModal: QueriedModal;
    };
};

export interface QueriedModal extends _Modal {
    id: string;
}

export const getModal = (): Modal => {
    const {
        sanitySite: { activeModal },
    } = useStaticQuery<LinkQueryResult>(graphql`
        {
            sanitySite {
                activeModal {
                    id
                    title
                    publishedAt
                    image {
                        asset {
                            url
                        }
                    }
                    _rawContent
                }
            }
        }
    `);

    return new Modal(activeModal);
};
