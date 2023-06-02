import { SearchItem } from "@/components/SearchItem"
import { ReviewsStars, ReviewsStarsIcon, ReviewsStarsPreview } from "@/components/component/ReviewsStars"
import { reviewsStarsData } from "@/components/defaultDatas/componentsData"


let section = "informations";

export const Items = [
    <SearchItem section={section} data={reviewsStarsData} name={"Reviews_Stars"} component={<ReviewsStars />} icon={ReviewsStarsIcon} previewImg={ReviewsStarsPreview} max={1} isNew={true} /*{...searchProps}*/ />
]