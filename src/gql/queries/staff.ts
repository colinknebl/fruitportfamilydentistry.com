import { useStaticQuery, graphql } from 'gatsby';
import type { RawBlock } from '../../models/content/Content';
import { StaffGroup } from '../../models/StaffGroup';

type RawSanityStaffGroup = {
    jobDescription: RawBlock[];
};

type SanityImage = null | {
    asset: {
        url: string;
    };
};

type SanityStaffGroup = {
    employees: string[];
    image: SanityImage;
};

type StaffPageQueryResults = {
    sanityStaffPage: {
        _rawAssistants: RawSanityStaffGroup;
        assistants: SanityStaffGroup;
        _rawFrontOffice: RawSanityStaffGroup;
        frontOffice: SanityStaffGroup;
        _rawHygienists: RawSanityStaffGroup;
        hygienists: SanityStaffGroup;
    };
};

export const getStaff = (): { staffGroups: StaffGroup[] } => {
    const data = useStaticQuery<StaffPageQueryResults>(graphql`
        {
            sanityStaffPage {
                _rawAssistants
                _rawFrontOffice
                _rawHygienists
                hygienists {
                    employees
                    image {
                        asset {
                            url
                        }
                    }
                }
                assistants {
                    employees
                    image {
                        asset {
                            url
                        }
                    }
                }
                frontOffice {
                    employees
                    image {
                        asset {
                            url
                        }
                    }
                }
            }
        }
    `);

    const {
        _rawAssistants,
        assistants,
        _rawFrontOffice,
        frontOffice,
        _rawHygienists,
        hygienists,
    } = data.sanityStaffPage;
    const staffGroups = ([
        ['Hygienists', _rawHygienists, hygienists],
        ['Assistants', _rawAssistants, assistants],
        ['Front Office', _rawFrontOffice, frontOffice],
    ] as Array<[string, RawSanityStaffGroup, SanityStaffGroup]>).map(
        (groupTuple) => {
            const [title, raw, grp] = groupTuple;
            return new StaffGroup(
                title,
                grp.employees,
                grp?.image?.asset?.url,
                raw.jobDescription
            );
        }
    );

    return {
        staffGroups,
    };
};
