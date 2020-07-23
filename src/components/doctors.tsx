import React from 'react';
import styled from 'styled-components';

import { ContentView } from './content-view';
import { getDoctors } from '../gql/queries/doctors';
import type { Doctor } from '../models/Doctor';

interface IDoctorsProps {
    DoctorView?: (props: IDoctorViewProps) => JSX.Element;
    column?: boolean;
}

export function Doctors(props: IDoctorsProps) {
    const { doctors } = getDoctors();
    const ListView = props.DoctorView || DoctorView;

    return (
        <StyledDoctorList column={props.column} className="doctors">
            {doctors.map((doc, i) => (
                <li key={i}>
                    <ListView doctor={doc} />
                </li>
            ))}
        </StyledDoctorList>
    );
}

export const StyledDoctorList = styled.ul<Pick<IDoctorsProps, 'column'>>`
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: ${(p) =>
        p.column ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))'};
    grid-gap: 50px;
    gap: 50px;
`;

//#region DoctorView
export interface IDoctorViewProps {
    doctor: Doctor;
}

function DoctorView({ doctor }: IDoctorViewProps) {
    return (
        <StyledDoctorView>
            <img
                loading="lazy"
                src={doctor.imageUrl}
                alt={doctor.name}
                height="350"
                width="350"
            />
            <h3>{doctor.name}</h3>
            <hr />
            <ContentView content={doctor.content} />
        </StyledDoctorView>
    );
}

const StyledDoctorView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        object-fit: contain;
    }

    hr {
        border-top: 2px solid var(--primary-color);
        width: 100%;
        margin: 0;
    }

    p {
        text-indent: 4ch;
    }
`;
//#endregion DoctorView
