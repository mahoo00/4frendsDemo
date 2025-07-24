import { Category } from '@/app/categories/page';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

export default function CatedoryList({ Category }: { Category: Category }) {
    return (
        <Accordion type="multiple">
            {Category.children.map((subcategory) => (
                <AccordionItem value={subcategory.id} key={subcategory.id}>
                    {/* Default trigger — icon is visible */}
                    <AccordionTrigger
                        className="cursor-pointer"
                        variant="category"
                    >
                        <h3 className=" font-semibold text-base hover:no-underline">
                            {subcategory.name}
                        </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc   space-y-1 text-base font-normal ">
                            {/* ol -> Next Link */}
                            {subcategory.children.map((thirdCategory) => (
                                <ol
                                    className="cursor-pointer"
                                    key={thirdCategory.id}
                                >
                                    {thirdCategory.name}
                                </ol>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
