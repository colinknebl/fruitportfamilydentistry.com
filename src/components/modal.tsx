import React from 'react';
import styled from 'styled-components';

import type { Modal } from '../models/Modal';
import { ModalContext } from '../hooks/useModal';
import { ContentView } from './content-view';

interface IModalProps {
    modal: Modal;
    open: boolean;
}

export function ModalView({ modal, open }: IModalProps) {
    const { setIsModalOpen } = React.useContext(ModalContext);
    return (
        <StyledModal {...(open ? { open: true } : {})}>
            <div className="modal-container">
                <button onClick={() => setIsModalOpen(false)}>&#x2715;</button>
                {modal.imageUrl && <img src={modal.imageUrl} />}
                <ContentView content={modal.content} />
            </div>
        </StyledModal>
    );
}

const StyledModal = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    height: 100vh;
    width: 100vw;
    pointer-events: none;
    opacity: 0;
    transition: opacity 300ms;

    display: grid;
    justify-content: center;
    align-content: center;

    &[open] {
        z-index: 5;
        pointer-events: all;
        opacity: 1;
    }

    .modal-container {
        background: var(--primary-color);
        box-shadow: 0 1px 1px rgba(255, 255, 255, 0.01),
            0 2px 2px rgba(255, 255, 255, 0.01),
            0 4px 4px rgba(255, 255, 255, 0.01),
            0 8px 8px rgba(255, 255, 255, 0.01),
            0 16px 16px rgba(255, 255, 255, 0.01),
            0 32px 32px rgba(255, 255, 255, 0.01);
        color: var(--on-primary-color);
        padding: 20px;
        height: min-content;
        max-height: 80vh;
        width: 90vw;
        max-width: 800px;
        overflow: auto;
        position: relative;
    }

    img {
        height: 250px;
        display: block;
        object-fit: contain;
        object-position: center;
        margin: auto;
    }

    button {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        position: absolute;
        right: 5px;
        top: 5px;
    }
`;
