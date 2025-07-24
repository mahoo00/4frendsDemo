import { Category } from '@/app/categories/page';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';
import CatedoryList from '../CategoryList/CatedoryList';

interface CategoryColumnUIProps {
    Category: Category;
}

export default function CategoryColumnUI({ Category }: CategoryColumnUIProps) {
    return (
        <div className=" sm:min-w-[282px] min-w-[200] text-[#344054]">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger
                        className="cursor-pointer [&>svg]:hidden p-0"
                        variant="category"
                    >
                        <div className="flex flex-row gap-4 items-center w-full">
                            <img
                                src={Category.iconUrl}
                                alt="Собаки"
                                className="w-[40px] h-[40px] object-cover rounded-full"
                            />
                            <h2 className=" font-semibold text-base hover:!no-underline">
                                {Category.name}
                            </h2>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="pt-2 ">
                        <CatedoryList Category={Category} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
