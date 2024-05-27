'use client'

import { HamburgersType } from "../types/HamburgersType"
import Image from "next/image"
import { useState } from "react"

type HamburgerImageProps = {
    product: HamburgersType;
    valueState: "single" | "combo";
    fill?: boolean
}

export default function HamburgerImage({ product, fill, valueState }: HamburgerImageProps) {

    const [loading, setLoading] = useState(true);
    const imageIdx = valueState === "single" ? 0 : 1;
    const imageSrc = typeof product.image === "string" ? product.image : product.image[imageIdx];

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