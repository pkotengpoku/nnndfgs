import React, { useRef, useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-md bg-black bg-opacity-50 flex justify-center items-center z-50 w-full">
  <div ref={modalRef} className="bg-white p-6 rounded shadow-lg  my-40 overflow-y-scroll h-[90%] w-3/5">
    {children}
  </div>
</div>
  );
}
