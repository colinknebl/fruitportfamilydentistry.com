import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

import { getStaff } from '../gql/queries/staff';
import { StaffGroup } from '../models/StaffGroup';
import { StyledDoctorList } from './doctors';

export function Staff() {
    const { staffGroups } = getStaff();

    return (
        <StyledStaffGrid>
            {staffGroups.map((group) => (
                <StaffGroupView key={group.title} group={group} />
            ))}
        </StyledStaffGrid>
    );
}

const StyledStaffGrid = styled(StyledDoctorList)`
    grid-template-columns: 1fr;
    grid-gap: 0;
    gap: 0;
`;

interface IStaffGroupProps {
    group: StaffGroup;
}

function StaffGroupView({ group }: IStaffGroupProps) {
    const imgAlt = `employees: ${group.commaSeparatedEmployeeNames}`;
    return (
        <StyledStaffGroup withImage={Boolean(group.imageUrl)}>
            <img
                {...(group.imageUrl
                    ? { src: group.imageUrl, alt: imgAlt }
                    : {})}
                height="350"
                width="350"
            />
            <div className="text-content">
                <h3>
                    {group.title} - {group.commaSeparatedEmployeeNames}
                </h3>
                <hr />
                <BlockContent blocks={group.blocks} />
            </div>
        </StyledStaffGroup>
    );
}

const StyledStaffGroup = styled.article<{ withImage: boolean }>`
    margin-top: 25px;
    display: grid;
    grid-template-columns: ${(p) => (p.withImage ? `1fr 3fr` : `1fr`)};
    grid-gap: 50px;
    gap: 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
        gap: 0px;
    }

    img {
        display: ${(p) => (p.withImage ? 'inline-block' : 'none')};
        object-fit: contain;
        margin: auto;
    }

    .text-content {
        max-width: 80ch;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        hr {
            border-top: 2px solid var(--primary-color);
            width: 100%;
            margin: 0;
        }

        p {
            text-indent: 4ch;
        }
    }
`;
