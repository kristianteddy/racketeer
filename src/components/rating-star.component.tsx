import {Rating, RatingStar} from "flowbite-react";

export type RatingStarComponentProps = {
    label: string
    rating: number
}

export function RatingStarComponent({rating, label}: RatingStarComponentProps) {
    return (
        <div className="mb-2 flex justify-between font-medium dark:text-white">
            <span>{label}</span>
            <Rating>
                <RatingStar filled={rating >= 1}/>
                <RatingStar filled={rating >= 2}/>
                <RatingStar filled={rating >= 3}/>
                <RatingStar filled={rating >= 4}/>
                <RatingStar filled={rating >= 5}/>
            </Rating>
        </div>

    );
}
