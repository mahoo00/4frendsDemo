'use client';

import CategoryCanteiner from '../components/Category-Page/CategoryCanteiner';
import CategoryBreadcrumb from '../components/Category-Page/CategoryBreadcrumb/CategoryBreadcrumb';

export default function CategoriesClientPage() {
    return (
        <div>
            <CategoryBreadcrumb />
            <CategoryCanteiner />
        </div>
    );
}
