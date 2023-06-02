import { SearchItem } from "@/components/SearchItem"
import { Description, DescriptionIcon, DescriptionPreview } from "@/components/component/Description"
import { Details, DetailsIcon, DDetailsPreview } from "@/components/component/Details"
import { descriptionData, detailsData } from "@/components/defaultDatas/componentsData"

let section = "description";

export const Items = [
    <SearchItem section={section} data={descriptionData} name={"Description"} component={<Description />} icon={DescriptionIcon} previewImg={DescriptionPreview} />,
    <SearchItem section={section} data={detailsData} name={"Details"} component={<Details />} icon={DetailsIcon} previewImg={DDetailsPreview} />,
]