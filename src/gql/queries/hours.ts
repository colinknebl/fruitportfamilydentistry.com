import { useStaticQuery, graphql } from 'gatsby';

interface Hours {
    days: string;
    officeOpen: string;
    lunchStart: string;
    lunchEnds: string;
    officeClose: string;
}

type HoursQueryResult = {
    allSanityHours: {
        nodes: QueriedHours[];
    };
};

export interface QueriedHours extends Hours {
    id: string;
}

export const getHours = () => {
    const data = useStaticQuery<HoursQueryResult>(graphql`
        {
            allSanityHours {
                nodes {
                    id
                    days
                    officeOpen
                    lunchStart
                    lunchEnds
                    officeClose
                }
            }
        }
    `);

    return {
        hours: data.allSanityHours.nodes,
    };
};
