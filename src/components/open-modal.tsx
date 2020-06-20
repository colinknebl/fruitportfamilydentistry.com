import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { ModalContext } from '../hooks/useModal';

interface IOpenModalProps {
    text: string;
}

type FacebookLinkQueryResult = {
    contactJson: {
        href: string;
    };
};

export function OpenModal(props: IOpenModalProps) {
    const { setIsModalOpen } = React.useContext(ModalContext);
    const data = useStaticQuery<FacebookLinkQueryResult>(graphql`
        {
            contactJson(value: { eq: "Facebook" }) {
                href
            }
        }
    `);

    return (
        <StyledOpenModal>
            <button onClick={() => setIsModalOpen(true)}>{props.text}</button>
            <p>
                For more frequent updates, like and follow us on{' '}
                <a href={data.contactJson.href}>Facebook</a>!
            </p>
        </StyledOpenModal>
    );
}

const StyledOpenModal = styled.div`
    margin: 20px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--danger-button-color);
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    a {
        color: var(--primary-color);

        &:hover {
            color: var(--secondary-color);
        }
    }
`;
