import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { PawPrint } from 'lucide-react';

export default function CategoryBreadcrumb() {
    return (
        <Breadcrumb className=" w-full px-4 sm:mx-auto mx-0     lg:max-w-[1200px] text-base flex flex-row mt-9 ">
            <BreadcrumbItem className="mr-2">
                <BreadcrumbLink
                    href="/"
                    className="flex items-center gap-1 text-[#667085] hover:text-[#667085]"
                >
                    <PawPrint className="w-5 h-5 " color="#667085" />
                    Головна
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#60478B] !mr-0">
                {' '}
            </BreadcrumbSeparator>
            <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-[#60478B] font-medium">
                    Категорії
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}
