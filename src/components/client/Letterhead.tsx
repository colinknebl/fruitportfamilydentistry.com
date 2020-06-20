import React from 'react';
import styled from 'styled-components';

import { getDoctors } from '../../gql/queries/doctors';

interface ILetterheadProps {
    date?: string;
}

export function Letterhead({ date }: ILetterheadProps) {
    const { doctors } = getDoctors();
    return (
        <>
            <StyledHeader>
                <div>
                    <span className="practice-name">
                        Grand Haven Family Dentistry
                    </span>
                    {doctors.map((doctor) => (
                        <span key={doctor.id} className="doc-name">
                            {doctor.name}
                        </span>
                    ))}
                </div>
                <div>
                    <address>
                        <span>919 S. Beechtree, Ste. #7</span>
                        <span>Grand Haven, MI 49417</span>
                        <span>(616) 844-4400</span>
                    </address>
                </div>
            </StyledHeader>
            <hr />
            {date && <p className="date">{date}</p>}
        </>
    );
}

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(2) {
        text-align: right;
    }

    @media screen and (max-width: 859px) {
        grid-template-columns: 1fr;

        grid-gap: 20px;

        & > div:nth-child(2) {
            text-align: left;
        }
    }

    .practice-name {
        font-weight: 900;
    }

    span {
        display: block;
    }
`;
