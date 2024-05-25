import React from 'react';

type Props = {
    text: string
}

const Button = ({ text }: Props) => {
    return (
        <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full">
            {text}
        </button>
    );
};

export default Button;