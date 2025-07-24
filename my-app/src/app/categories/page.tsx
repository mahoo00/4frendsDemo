import { useQuery } from '@tanstack/react-query';
import CategoryColumnUI from '../components/Category-Page/CategoryColumn/CategoryColumnUI';
import CategoryCanteiner from '../components/Category-Page/CategoryCanteiner';
import CategoriesClientPage from './page.client';

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    parentId: string | null;
    iconUrl: string;
    bannerUrl: string;
    isActive: boolean;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
    parent: Category | null;
    productCount: number;
    children: Category[];
}

export default async function CategoriesPage() {
    const MetaRespose = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    );
    const MetaData = await MetaRespose.json();
    console.log('MetaData', MetaData);

    return <CategoriesClientPage />;
}
