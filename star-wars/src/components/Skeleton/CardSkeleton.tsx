export default function CardSkeleton() {
    return (
        <div className="p-4 rounded-lg panel-bg border border-var animate-pulse" style={{ boxShadow: "var(--shadow)" }}>
            <div className="h-40 bg-gray-300 shimmer rounded mb-4" />
            <div className="h-4 bg-gray-300 shimmer rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-200 shimmer rounded w-1/2" />
        </div>
    );
}
