import React, { useState } from "react";

export default function useModal() {
    const [open, onOpenModal] = useState(false);
    const [close, onCloseModal] = useState(false);

    const openModal = () => {
        onOpenModal(true);
    };

    const closeModal = () => {
        onCloseModal(true);
        onOpenModal(false);
    };

    return { open, close, openModal, closeModal };
}
