import { ClothingSize } from "@/components/component/ClothingSize";
import { Colors } from "@/components/component/Colors";
import { Description } from "@/components/component/Description";
import { Details } from "@/components/component/Details";
import { ProductInformation } from "@/components/component/ProductInformation";
import { ReviewsStars } from "@/components/component/ReviewsStars";
import { clothingSizeData, colorsData, descriptionData, detailsData, reviewsStarsData } from "@/components/defaultDatas/componentsData";
import { Template_1 } from "@/components/templates/template_1";
import { Template_ColorPicker } from "@/components/templates/templates_fields/Template_ColorPicker";
import { Template_Description } from "@/components/templates/templates_fields/Template_Description";
import { Template_Details } from "@/components/templates/templates_fields/Template_Details";
import { Template_ReviewStars } from "@/components/templates/templates_fields/Template_ReviewStars";
import { Template_SizePicker } from "@/components/templates/templates_fields/Template_SizePicker";
import { ProductInformationDataTemplate1, product_template1 } from "@/products/product_template1";


export const ASSOCIATE_TEMPLATE = {
    clothe: {
        template: <Template_1 />,
        product: product_template1,
        comp: ProductInformationDataTemplate1,
    }
}


export const ASSIOCIATE_STORE_COMPONENTS = {
    // informations
    "Product_Information":<ProductInformation />,
    "Reviews_Stars":<ReviewsStars />,

    // personalisation
    "Clothing_Size": <ClothingSize />,
    "Colors": <Colors />,

    // description
    "Description": <Description />,
    "Details": <Details />
}

export const ASSIOCIATE_STORE_TEMPLATE = {
    // informations
    "Product_Information":undefined,
    "Reviews_Stars":<Template_ReviewStars />,

    // personalisation
    "Clothing_Size": <Template_SizePicker />,
    "Colors":<Template_ColorPicker />,

    // description
    "Description": <Template_Description />,
    "Details": <Template_Details />
}


export const ASSIOCIATE_COMP = {
    // informations
    "Reviews_Stars":reviewsStarsData,

    // personalisation
    "Clothing_Size": clothingSizeData,
    "Colors":colorsData,

    // description
    "Description": descriptionData,
    "Details": detailsData,
}

