import React, { ReactNode } from "react";

type CardProps = {
    imageSrc?: string
    imageAlt?: string
    imgW?: string
    imgH?: string
    cardClass?: string
    title?: string
    subTitle?: string
    icones?: ReactNode
}

const Card: React.FC<CardProps> = ({imageSrc, imageAlt, cardClass, title, subTitle, icones, imgH, imgW}) => {
    return (
        <div className=" rounded m-2 p-4 shadow">
            <div className=" m-2">
                <img className=" rounded" src={imageSrc} alt={imageAlt} width={imgW} height={imgH}/>
            </div>

        </div>
    )
}

export default Card;