import React from 'react';
import CategoryColumnUI from '../CategoryColumn/CategoryColumnUI';
import CategoryColumnSkeleton from '../CategoryColumnSkeleton/CategoryColumnSkeleton';
import { Category } from '@/app/categories/page';

export default function CategoryCanteinerUI({
    isLoading,
    data,
}: {
    isLoading: boolean;
    data: Category[] | undefined;
}) {
    return (
        <div className="  mx-[16px] lg:mx-[120px] md:mx-[60px] mt-[40px] grid ustify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-5">
            {isLoading &&
                Array.from({ length: 12 }).map((_, i) => (
                    <CategoryColumnSkeleton key={i} />
                ))}
            {data?.map((category, i) => (
                <CategoryColumnUI Category={category} key={i} />
            ))}
        </div>
    );
}
