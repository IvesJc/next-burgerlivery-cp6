'use client'

import { AppetizerType } from "../types/AppetizerType"
import Image from "next/image"
import { useState } from "react"

type AppetizerImageProps = {
    product: AppetizerType ;
    fill?: boolean
}

export default function AppetizerImage({ product, fill }: AppetizerImageProps) {

    const [loading, setLoading] = useState(true)

    return fill ? (
        <Image
            src={product.image}
            fill
            alt={product.title}
            className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale'
                    : 'scale-100 blur-0 grayscale-0 max-h-5'
                }`}
            onLoad={() => setLoading(false)}
        />
    ) : (
        <Image
            src={product.image}
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