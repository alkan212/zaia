import { ReviewsStars } from "@/components/component/ReviewsStars"
import { Template_ReviewStars } from "@/components/templates/templates_fields/Template_ReviewStars"


import { ClothingSize } from "@/components/component/ClothingSize"
import { Template_SizePicker } from "@/components/templates/templates_fields/Template_SizePicker"

import { Colors } from "@/components/component/Colors"
import { Template_ColorPicker } from "@/components/templates/templates_fields/Template_ColorPicker"


import { Details } from "@/components/component/Details"
import { Template_Details } from "@/components/templates/templates_fields/Template_Details"

import { Description } from "@/components/component/Description"
import { Template_Description } from "@/components/templates/templates_fields/Template_Description"




/* informations */

export var reviewsStarsData = (index = 0, toggle = true) => {
    return {
        comp: <ReviewsStars />,
        template: <Template_ReviewStars />,
        name: "Reviews_Stars",
        toggle: toggle,
        index: index,
        data:{
            reviews:0,
            stars:0,
        }
    }
}



/* personalisation */

export var clothingSizeData = (index = 0, toggle = true) => {
    return {
        comp: <ClothingSize />,
        template:<Template_SizePicker />,
        name: "Clothing_Size",
        toggle: toggle,
        index: index,
        data: {
            sizes: [
                {
                    size: "XXS",
                    value: false,
                },
                {
                    size: "XS",
                    value: false,
                },
                {
                    size: "S",
                    value: true,
                },
                {
                    size: "M",
                    value: true,
                },
                {
                    size: "L",
                    value: true,
                },
                {
                    size: "XL",
                    value: true,
                },
                {
                    size: "XXL",
                    value: false,
                },
            ]
        }
    }
}

export var colorsData = (index = 0, toggle = true) => {
    return {
        comp: <Colors />,
        template:<Template_ColorPicker />,
        name: "Colors",
        toggle: toggle,
        index: index,
        data: {
            colors: [
                { color: '#000000' },
                { color: '#707070' },
                { color: '#FFFFFF' },
            ]
        }
    }
}



/* description */
let default_detailsData = [
    {
        index: 0,
        value: ``
    },
    {
        index: 1,
        value: ``
    },
    {
        index: 2,
        value: ``
    },
]

export var detailsData = (index = 0, toggle = true, defaultData, defaultTitle) => {

    return {
        comp: <Details />,
        template:<Template_Details />,
        name: "Details",
        toggle: toggle,
        index: index,
        data: {
            details: defaultData ?? default_detailsData,
            title: defaultTitle ?? defaultTitle,
        }
    }
}

export var descriptionData = (index = 0, toggle = true, defaultData=[],) => {
    return {
        comp: <Description />,
        template:<Template_Description />,
        name: "Description",
        toggle: toggle,
        index: index,
        data: {
            descriptions: defaultData,
        }
    }
}