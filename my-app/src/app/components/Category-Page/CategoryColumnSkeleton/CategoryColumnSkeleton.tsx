import React from 'react';

export default function CategoryColumnSkeleton() {
    return (
        <div className="max-w-[280px] animate-pulse text-[#344054]">
            {/* Outer skeleton */}
            <div className="flex flex-row gap-4 items-center mb-2">
                <div className="w-[40px] h-[40px] bg-gray-300 rounded-full" />
                <div className="h-4 w-2/3 bg-gray-300 rounded" />
            </div>
        </div>
    );
}
