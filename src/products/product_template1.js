import { reviewsStarsData, colorsData, clothingSizeData, descriptionData, detailsData } from '@/components/defaultDatas/componentsData'
import { ProductInformation } from '@/components/component/ProductInformation'
import { POST } from 'lib/requests'
import { tokenGen } from 'lib/tokenGen'



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





export var ProductInformationDataTemplate1 = (index = 0) => {

  const defaultImages = [
    "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg"
  ]

  async function onCreate(product) {
    let buffer = { ...product };
    console.log("Start buffer : ", buffer)


    for (let n = 0; n < buffer.informations[index].data.images.length; n++) {
      let image = buffer.informations[index].data.images[n];

      if (image == "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg") { continue }
      if (image == "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg") { continue }
      if (image == "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg") { continue }
      if( image.endsWith(".png") || image.endsWith(".jpg") || image.endsWith(".jpeg") || image.endsWith(".gif") ){ continue }


      let imageToken = "img_" + tokenGen();
      image = image.replace(/^data:image\/[a-z]+;base64,/, "");
      let response = await POST("/api/uploadImage", { imageToken: imageToken, image: image });
      if (response.success == true) {
        buffer.informations[index].data.images[n] = response.url;
        console.log("New Url : ", response.url)
      }
    }
    
    return product
  }



  return {
    comp: <ProductInformation />,
    template: undefined,
    onCreate: onCreate,
    name: "Product_Information",
    index: index,
    data: {
      name: "Basic Tea",
      price: "25",
      currency: "€",
      color: "indigo",
      images: defaultImages,
    }
  }
}



// template
export const product_template1 = {

  header:{
    logo:{
      name:"Logo",
      url:"/whiteLogo.svg",
      size: 40,
    },

    theme:{
      name:"dark",
      color:"#18181b",
      customColor:"#FFFFFF",
    },

    social:{
      facebook:"",
      instagram:"",
      twitter:"",
      youtube:"",
      website:"",
    }
  },

  checkout: {
    number: 1,
    email: "",
  },

  count: {

  },

  informations: [
    ProductInformationDataTemplate1(0),
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





