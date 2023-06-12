import { reviewsStarsData, colorsData, clothingSizeData, descriptionData, detailsData } from '@/components/defaultDatas/componentsData'
import { ProductInformation } from '@/components/component/ProductInformation'

const defaultDetails = [
    {
        index: 0,
        value: `International delivery`
    },
    {
        index: 1,
        value: `Get your order in 2 days`
    },
  ]
  const defaultDetailsTitle = "Delivery"
  
  const defaultDescription = ["The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.", "Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount."]
  
  

export const product_template1 = {

    checkout:{
      number:1,
      email:"",
    },

    count: {
  
    },
  
    informations: [
      {
        comp: <ProductInformation />,
        template:undefined,
        name: "Product_Information",
        index: 0,
        data: {
          name: "Basic Tea",
          price: "25",
          currency: "€",
          color: "indigo",
          images: [
            "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
            "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg"
          ],
        }
      },
  
      reviewsStarsData(1)
    ],
  
    personalisation: [
      clothingSizeData(0),
      colorsData(1)
    ],
  
    description: [
      descriptionData(0, true, defaultDescription),
      detailsData(1, true, defaultDetails, defaultDetailsTitle)
    ],
  
  }