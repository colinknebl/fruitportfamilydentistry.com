/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';

import { Header } from './header';
import { Footer } from './footer';
import { ModalView } from './modal';
import { getModal } from '../gql/queries/modal';
import { useModal, ModalContext, IModalContext } from '../hooks/useModal';
import './layout.css';

const Page = ({ children }) => {
    const modal = getModal();
    const [isModalOpen, setIsModalOpen] = useModal();

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
            }}
        >
            <PageContainer>
                <Header />
                {modal.isActive && (
                    <ModalView modal={modal} open={isModalOpen} />
                )}
                {children}
                <Footer />
            </PageContainer>
        </ModalContext.Provider>
    );
};

export default Page;

const PageContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 10px;
`;
