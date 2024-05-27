import Link from "next/link";

type CardapioButtonProps = {
    children: React.ReactNode
    route: string
}

export default function CardapioButton({ children, route }: CardapioButtonProps) {
    return (
        <Link href={route} className="border border-red-700 hover:bg-red-700 hover:text-yellow bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            {children}
        </Link>
    )
}