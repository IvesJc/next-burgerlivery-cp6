import { HamburgersType } from "../types/HamburgersType"
import HamburgerImage from "./HamburgerImage"
import { formatPrice } from "../lib/utils"
import AddCart from "./AddCart"


type HamburgersProps = {
    hamburger: HamburgersType
}

export default function Hamburgers({ hamburger }: HamburgersProps) {
    return (
        <div className="flex flex-col shadow-lg hover:shadow-2xl bg-yellow p-5">
            <div className="relative max-h-72 flex-1">
                <HamburgerImage product={hamburger} fill={false} />
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="w-40 truncate">{hamburger.title}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="">{hamburger.description}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p>{formatPrice(hamburger.values.single)}</p>
            </div>
            <AddCart product={hamburger} />
        </div>


    )

}
