import { SearchItem } from "@/components/SearchItem"
import { Colors, ColorsIcon, ColorsPreview } from "@/components/component/Colors"
import { ClothingSize, ClothingSizeIcon, ClothingSizePreview } from "@/components/component/ClothingSize"
import { colorsData, clothingSizeData } from "@/components/defaultDatas/componentsData"


let section = "personalisation";

export const Items = [
    <SearchItem section={section} data={colorsData} name={"Colors"} component={<Colors />} icon={ColorsIcon} previewImg={ColorsPreview} /*{...searchProps}*/ />,
    <SearchItem section={section} data={clothingSizeData} name={"Clothing_Size"} component={<ClothingSize />} icon={ClothingSizeIcon} previewImg={ClothingSizePreview} />
]