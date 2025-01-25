import { HiOutlineCurrencyDollar } from 'react-icons/hi';


export type RatingDollarComponentProps = {
    rating: number
}
export default function RatingDollarComponent({rating} : RatingDollarComponentProps) {

    return (
        <div className="mb-2 flex justify-between font-medium dark:text-white">
            <span>Price level</span>
            <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
                <HiOutlineCurrencyDollar
                    key={value}
                    className={`w-5 h-5 ${
                        value <= rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    aria-label={`Rate ${value} dollar${value > 1 ? 's' : ''}`}
                />
            ))}
        </div>
        </div>
    );
};

