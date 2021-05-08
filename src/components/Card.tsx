import React, {FC} from 'react'

export enum CardVariant {
    outlined= 'outlined',
    primary= 'primary'
}

interface CardProps {
    // ? значит что свойство не обязательно
    width?: string;
    height?: string;
    // | значит или
    children?: React.ReactChild | React.ReactNode;
    variant: CardVariant;
    // onClick: (num: number) => void указываем что функция возвращает число 
    onClick: (num: number) => void
}
const Card: FC<CardProps> = 
    ({ 
        width, 
        height,
        variant,
        children,
        onClick
    }) => {

    const [state, setstate] = React.useState(0)
    return (
        <div style={{ width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : '',
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    )
}

export default Card