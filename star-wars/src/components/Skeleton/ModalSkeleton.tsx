export default function ModalSkeleton() {
    return (
        <div className="p-4 animate-fadeIn">

            {/* Header */}
            <div className="border-b pb-4 flex items-center justify-between">
                <div className="h-6 w-40 bg-gray-300 shimmer rounded" />
                <div className="h-6 w-6 bg-gray-300 shimmer rounded-full" />
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Image Shimmer */}
                <div className="w-full h-48 bg-gray-300 shimmer rounded-lg" />

                {/* Content */}
                <div className="md:col-span-2 space-y-6">

                    {/* Stats row */}
                    <div className="flex gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="space-y-1">
                                <div className="h-3 w-20 bg-gray-300 shimmer rounded" />
                                <div className="h-4 w-24 bg-gray-200 shimmer rounded" />
                            </div>
                        ))}
                    </div>

                    {/* Date added */}
                    <div className="space-y-1">
                        <div className="h-3 w-24 bg-gray-300 shimmer rounded" />
                        <div className="h-4 w-28 bg-gray-200 shimmer rounded" />
                    </div>

                    {/* Homeworld */}
                    <div className="space-y-2">
                        <div className="h-3 w-24 bg-gray-300 shimmer rounded" />

                        <div className="p-4 border rounded-lg space-y-2">
                            <div className="h-4 w-40 bg-gray-200 shimmer rounded" />
                            <div className="h-3 w-32 bg-gray-200 shimmer rounded" />
                            <div className="h-3 w-28 bg-gray-200 shimmer rounded" />
                            <div className="h-3 w-24 bg-gray-200 shimmer rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
