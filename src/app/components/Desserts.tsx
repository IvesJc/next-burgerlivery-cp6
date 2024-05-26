import { DessertsType } from "../types/DessertsType"
import DessertsImage from "./DessertsImage"
import { formatPrice } from "../lib/utils"
import AddCart from "./AddCart"


type DessertsProps = {
    desserts: DessertsType
}

export default function Beverages({ desserts: desserts }: DessertsProps) {
    return (
        <div className="flex flex-col shadow-lg hover:shadow-2xl bg-yellow p-5">
            <div className="relative ">
                <DessertsImage product={desserts} fill={false} />
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p>{desserts.title}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="">{desserts.description}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p>{formatPrice(desserts.value)}</p>
            </div>
            <AddCart product={desserts} />
        </div>


    )

}
