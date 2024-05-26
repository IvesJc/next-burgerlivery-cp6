'use client'

import { HamburgersType } from "../types/HamburgersType"
import Image from "next/image"
import { useState } from "react"

type HamburgerImageProps = {
    product: HamburgersType;
    fill?: boolean
}

export default function HamburgerImage({ product, fill }: HamburgerImageProps) {

    const [loading, setLoading] = useState(true)

    return fill ? (
        <Image
            src={product.image[0]}
            fill
            alt={product.title}
            className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0 max-h-5'
                }`}
            onLoad={() => setLoading(false)}
        />
    ) : (
        <Image
            src={product.image[0]}
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