"use client"

import { HamburgersType } from "../types/HamburgersType"
import HamburgerImage from "./HamburgerImage"
import { formatPrice } from "../lib/utils"
import AddCart from "./AddCart"
import { useState } from "react"


type HamburgersProps = {
    hamburger: HamburgersType
}

export default function Hamburgers({ hamburger }: HamburgersProps) {

    const [valueState, setValueState] = useState<"single" | "combo">("single");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueState(event.target.value as "single" | "combo");
    }

    return (
        <div className="flex flex-col shadow-lg hover:shadow-2xl bg-yellow p-5">
            <div className="relative max-h-72 flex-1">
                <HamburgerImage product={hamburger} valueState={valueState} fill={false} />
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="w-40 truncate">{hamburger.title}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="">{hamburger.description}</p>
            </div>
            <div className="font-bold text-red-700 my-3">
                <p>Selecione o tipo do hamburguer: </p>
                <div>
                    <input type="radio" name={"value-state" + hamburger.title} id={"value-state" + hamburger.title} value="single" onChange={handleChange} defaultChecked />
                    <label htmlFor={"value-state" + hamburger.title}>Individual</label>
                </div>
                <div>
                    <input type="radio" name={"value-state" + hamburger.title} id={"value-state" + hamburger.title} value="combo" onChange={handleChange} />
                    <label htmlFor={"value-state" + hamburger.title}>Combo</label>
                </div>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                {
                    "values" in hamburger ?
                        <p>{formatPrice(hamburger.values![valueState])}</p>
                        : <p>{formatPrice(hamburger.value![valueState])}</p>
                }
            </div>
            <AddCart product={hamburger} valueSelection={valueState} />
        </div>


    )

}
