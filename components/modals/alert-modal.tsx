"use client";

import { useEffect, useState } from "react";

import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

const AlertModal = ({
  isOpen,
  loading,
  onClose,
  onConfirm,
}: AlertModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Modal
      title="Please be sure about this! unlike your relationships"
      description="This action cannot be undone"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex items-center justify-end w-full pt-6 space-x-2 ">
        <Button variant="outline" disabled={loading} onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} onClick={onConfirm} variant="destructive">
          Proceed
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
