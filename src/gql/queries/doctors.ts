import { useStaticQuery, graphql } from 'gatsby';
import type { RawBlock } from '../../models/content/Content';
import { Doctor } from '../../models/Doctor';

type RawDoctor = {
    id: string;
    name: string;
    _rawBio: RawBlock[];
    image: {
        asset: {
            url: string;
        };
    };
};

type DoctorsQueryResult = {
    allSanityDoctors: {
        nodes: QueriedDoctor[];
    };
};

export interface QueriedDoctor extends RawDoctor {
    id: string;
}

export const getDoctors = (): { doctors: Doctor[] } => {
    const data = useStaticQuery<DoctorsQueryResult>(graphql`
        {
            allSanityDoctors {
                nodes {
                    id
                    name
                    image {
                        asset {
                            url
                        }
                    }
                    _rawBio
                }
            }
        }
    `);

    return {
        doctors: data.allSanityDoctors.nodes.map(
            (doc) =>
                new Doctor(doc.id, doc.name, doc.image.asset.url, doc._rawBio)
        ),
    };
};
