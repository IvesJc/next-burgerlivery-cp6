import { AppetizerType } from "../types/AppetizerType"
import AppetizerImage from "./AppetizerImage"
import { formatPrice } from "../lib/utils"
import AddCart from "./AddCart"


type AppetizersProps = {
    appetizer: AppetizerType
}

export default function Appetizer({ appetizer }: AppetizersProps) {
    return (
        <div className="flex flex-col shadow-lg hover:shadow-2xl bg-yellow p-5">
            <div className="relative ">
                <AppetizerImage product={appetizer} fill={false} />
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p>{appetizer.title}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="">{appetizer.description}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p>{formatPrice(appetizer.value.small)}</p>
            </div>
            <AddCart product={appetizer} />
        </div>


    )

}
