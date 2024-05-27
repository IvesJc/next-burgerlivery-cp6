"use client"

import { AppetizerType } from "../types/AppetizerType"
import AppetizerImage from "./AppetizerImage"
import { formatPrice } from "../lib/utils"
import AddCart from "./AddCart"
import { useEffect, useState } from "react"


type AppetizersProps = {
    appetizer: AppetizerType
}

export default function Appetizer({ appetizer }: AppetizersProps) {
    
    const [valueState, setValueState] = useState<"small" | "large">("small");
    const [hasMultipleValues, setHasMultipleValues] = useState(false);

    useEffect(() => {
        if ((appetizer.values?.small || appetizer.value?.small) && (appetizer.values?.large || appetizer.value?.large)) {
            setHasMultipleValues(true);
        }
    }, [appetizer])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueState(event.target.value as "small" | "large");
    }

    return (
        <div className="flex flex-col shadow-lg hover:shadow-2xl bg-yellow p-5">
            <div className="relative ">
                <AppetizerImage product={appetizer} fill={false} valueState={valueState} />
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p>{appetizer.title}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="">{appetizer.description}</p>
            </div>
            {
                hasMultipleValues ?
                    <>
                    <div className="font-bold text-red-700 my-3">
                    <p>Selecione o tipo do aperitivo: </p>
                    <div>
                        <input type="radio" name={"value-state" + appetizer.title} id={"value-state" + appetizer.title} value="small" onChange={handleChange} defaultChecked />
                        <label htmlFor={"value-state" + appetizer.title}>Individual</label>
                    </div>
                    <div>
                        <input type="radio" name={"value-state" + appetizer.title} id={"value-state" + appetizer.title} value="large" onChange={handleChange} />
                        <label htmlFor={"value-state" + appetizer.title}>Combo</label>
                    </div>
                    </div>
                    <div className="flex justify-between font-bold text-red-700 my-3">
                        {
                            "values" in appetizer ?
                                <p>{formatPrice(appetizer.values![valueState])}</p>
                                : <p>{formatPrice(appetizer.value![valueState])}</p>
                        }
                    </div>
                    </>
                    : null
            }
            <AddCart product={appetizer} valueSelection={valueState} />
        </div>
    )
}
