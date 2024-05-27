import { BeveragesType } from "../types/BeveragesType"
import BeveragesImage from "./BeveragesImage"
import { formatPrice } from "../lib/utils"
import AddCart from "./AddCart"


type BeveragesProps = {
    beverage: BeveragesType
}

export default function Beverages({ beverage }: BeveragesProps) {
    return (
        <div className="flex flex-col shadow-lg hover:shadow-2xl bg-yellow p-5">
            <div className="relative ">
                <BeveragesImage product={beverage} fill={false} />
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p>{beverage.title}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="">{beverage.description}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p>{formatPrice(beverage.value!)}</p>
            </div>
            <AddCart product={beverage} valueSelection="0"/>
        </div>


    )

}
