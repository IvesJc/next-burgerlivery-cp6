'use client'

import { DessertsType } from "../types/DessertsType"
import Image from "next/image"
import { useState } from "react"

type DessertImageProps = {
    product: DessertsType ;
    valueState: number;
    fill?: boolean
}

export default function DessertsImage({ product, fill }: DessertImageProps) {

    const [loading, setLoading] = useState(true)
    const imageSrc = typeof product.image === "string" ? product.image : product.image[0];


    return fill ? (
        <Image
            src={imageSrc}
            fill
            alt={product.title}
            className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0 max-h-5'
                }`}
            onLoad={() => setLoading(false)}
        />
    ) : (
        <Image
            src={imageSrc}
            width={400}
            height={400}
            alt={product.title}
            className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0 max-h-72'
                }`}
            onLoad={() => setLoading(false)}
        />
    )
}