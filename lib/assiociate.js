import { Description } from "@/components/component/Description";
import { Details } from "@/components/component/Details";
import { Template_1 } from "@/components/templates/template_1";
import { Template_Description } from "@/components/templates/templates_fields/Template_Description";
import { Template_Details } from "@/components/templates/templates_fields/Template_Details";
import { product_template1 } from "@/products/product_template1";


export const ASSOCIATE_TEMPLATE = {
    clothe: {
        template: <Template_1 />,
        product: product_template1,
    }
}


export const ASSIOCIATE_STORE_COMPONENTS = {
    "Description": <Description />,
    "Details": <Details />
}

export const ASSIOCIATE_STORE_TEMPLATE = {
    "Description": <Template_Description />,
    "Details": <Template_Details />
}