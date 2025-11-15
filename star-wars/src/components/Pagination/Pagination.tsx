/* eslint-disable @typescript-eslint/no-explicit-any */
import { StepBack, StepForward } from "lucide-react";

export default function Pagination({ loading, prevUrl, nextUrl, onPrev, onNext }: any) {
    return (
        <div className="flex gap-2 ml-auto my-4">
            <button
                onClick={onPrev}
                disabled={!prevUrl || loading}
                className={`px-3 py-2 rounded bg-white border shadow-sm text-sm ${(!prevUrl || loading) ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
            >
                <StepBack />
            </button>

            <button
                onClick={onNext}
                disabled={!nextUrl || loading}
                className={`px-3 py-2 rounded bg-white border shadow-sm text-sm ${(!nextUrl || loading) ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
            >
                <StepForward />
            </button>
        </div>
    );
}
