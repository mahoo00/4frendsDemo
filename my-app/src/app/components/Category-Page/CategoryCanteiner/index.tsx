import React from 'react';
import CategoryCanteinerUI from './CategoryCanteinerUI';
import { Category } from '@/app/categories/page';
import { useQuery } from '@tanstack/react-query';
const DataItemExample: Category = {
    id: '550e8400-e29b-41d4-a716-446655440000',
    name: 'Собаки',
    slug: 'sobaky',
    description: 'Все для собак - корм, догляд та розваги',
    parentId: null,
    iconUrl: 'https://placehold.co/600x400',
    bannerUrl: 'https://placehold.co/600x400',
    isActive: true,
    sortOrder: 1,
    createdAt: '2024-07-24T10:25:00.000Z',
    updatedAt: '2024-07-24T10:25:00.000Z',
    parent: null,
    productCount: 150,
    children: [
        {
            id: '550e8400-e29b-41d4-a716-446655440001',
            name: 'Годування',
            slug: 'goduvannya',
            description: 'Корми та добавки для собак',
            parentId: '550e8400-e29b-41d4-a716-446655440000',
            iconUrl: 'https://placehold.co/600x400',
            bannerUrl: 'https://placehold.co/600x400',
            isActive: true,
            sortOrder: 1,
            createdAt: '2024-07-24T10:25:00.000Z',
            updatedAt: '2024-07-24T10:25:00.000Z',
            parent: null,
            productCount: 60,
            children: [
                {
                    id: '550e8400-e29b-41d4-a716-446655440004',
                    name: 'Сухий корм',
                    slug: 'suhyj-korm',
                    description: 'Сухі корми для собак різних порід та віку',
                    parentId: '550e8400-e29b-41d4-a716-446655440001',
                    iconUrl: 'https://placehold.co/600x400',
                    bannerUrl: 'https://placehold.co/600x400',
                    isActive: true,
                    sortOrder: 1,
                    createdAt: '2024-07-24T10:25:00.000Z',
                    updatedAt: '2024-07-24T10:25:00.000Z',
                    parent: null,
                    productCount: 35,
                    children: [],
                },
            ],
        },
        {
            id: '550e8400-e29b-41d4-a716-446655440002',
            name: 'Догляд',
            slug: 'doglyad',
            description: 'Засоби для догляду за собаками',
            parentId: '550e8400-e29b-41d4-a716-446655440000',
            iconUrl: 'https://placehold.co/600x400',
            bannerUrl: 'https://placehold.co/600x400',
            isActive: true,
            sortOrder: 2,
            createdAt: '2024-07-24T10:25:00.000Z',
            updatedAt: '2024-07-24T10:25:00.000Z',
            parent: null,
            productCount: 45,
            children: [
                {
                    id: '550e8400-e29b-41d4-a716-446655440005',
                    name: 'Наповнювачі',
                    slug: 'napovnyuvachi',
                    description: 'Наповнювачі для туалетів та підстилок',
                    parentId: '550e8400-e29b-41d4-a716-446655440002',
                    iconUrl: 'https://placehold.co/600x400',
                    bannerUrl: 'https://placehold.co/600x400',
                    isActive: true,
                    sortOrder: 1,
                    createdAt: '2024-07-24T10:25:00.000Z',
                    updatedAt: '2024-07-24T10:25:00.000Z',
                    parent: null,
                    productCount: 20,
                    children: [],
                },
            ],
        },
        {
            id: '550e8400-e29b-41d4-a716-446655440003',
            name: 'Ігри',
            slug: 'igry',
            description: 'Іграшки та розваги для собак',
            parentId: '550e8400-e29b-41d4-a716-446655440000',
            iconUrl: 'https://placehold.co/600x400',
            bannerUrl: 'https://placehold.co/600x400',
            isActive: true,
            sortOrder: 3,
            createdAt: '2024-07-24T10:25:00.000Z',
            updatedAt: '2024-07-24T10:25:00.000Z',
            parent: null,
            productCount: 45,
            children: [
                {
                    id: '550e8400-e29b-41d4-a716-446655440006',
                    name: 'Іграшки',
                    slug: 'igrashky',
                    description: 'Різноманітні іграшки для собак',
                    parentId: '550e8400-e29b-41d4-a716-446655440003',
                    iconUrl: 'https://placehold.co/600x400',
                    bannerUrl: 'https://placehold.co/600x400',
                    isActive: true,
                    sortOrder: 1,
                    createdAt: '2024-07-24T10:25:00.000Z',
                    updatedAt: '2024-07-24T10:25:00.000Z',
                    parent: null,
                    productCount: 30,
                    children: [],
                },
            ],
        },
    ],
};

const fetchCategories = async (): Promise<Category[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Array.from({ length: 10 }, () => DataItemExample));
        }, 1500); // 1.5 sec delay
    });
};
export default function CategoryCanteiner() {
    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    });
    return <CategoryCanteinerUI data={data} isLoading={isLoading} />;
}
