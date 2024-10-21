import React from "react";

const useModal = <T>() => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState<T | null>(null); // Initialize with null or a default value

  return {
    setOpen,
    open,
    modalData,
    setModalData,
  };
};

export default useModal;
