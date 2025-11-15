import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function Modal({
    children,
    onClose,
}: {
    children: React.ReactNode;
    onClose: () => void;
}) {
    const root = document.body;

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return createPortal(
        <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div
                className="panel-bg rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl modal-enter"
                onClick={(e) => e.stopPropagation()}
                style={{ boxShadow: "var(--shadow)" }}
            >
                {children}
            </div>
        </div>,
        root
    );
}
