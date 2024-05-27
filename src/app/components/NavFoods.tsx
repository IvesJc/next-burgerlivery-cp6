import CardapioButton from "./CardapioButton";

export default function NavFoods() {
    return (
        <div >
        <ul className="flex justify-center gap-20 my-10">
            <li>
                <CardapioButton route="/hamburgers">
                    Hamburgers
                </CardapioButton>
            </li>
            <li>
                <CardapioButton route="/appetizers">
                    Aperitivos
                </CardapioButton>
            </li>
            <li>
                <CardapioButton route="/beverages">
                    Bebidas
                </CardapioButton>
            </li>
            <li>
                <CardapioButton route="/desserts">
                    Sobremesas
                </CardapioButton>
            </li>

        </ul>
    </div>
    );
}