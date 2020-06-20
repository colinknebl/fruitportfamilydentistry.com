import React from 'react';

export interface IModalContext {
    isModalOpen: boolean;
    setIsModalOpen: (force?: boolean) => void;
}

export const ModalContext = React.createContext<IModalContext>({
    isModalOpen: false,
    setIsModalOpen: () => {},
});

export function useModal(init?: boolean): [boolean, (force?: boolean) => void] {
    const [modalHasShown, setModalHasShown] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(init ?? false);
    const modalCtxVal: IModalContext = {
        isModalOpen,
        setIsModalOpen: (force?: boolean) =>
            setIsModalOpen(force ?? !isModalOpen),
    };

    if (!modalHasShown) {
        setModalHasShown(true);
        setTimeout(() => {
            setIsModalOpen(true);
        }, 2000);
    }

    return [modalCtxVal.isModalOpen, modalCtxVal.setIsModalOpen];
}
