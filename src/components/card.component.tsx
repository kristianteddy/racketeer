import {ReactNode} from "react";

export type CardComponentProps = {
    className?: string | null
    imgSrc: string
    imgAlt: string
    redirectUrl: string
    children: ReactNode
}

export default async function CardComponent({children, className, imgAlt, imgSrc, redirectUrl}: CardComponentProps) {

    return (
        <a href={redirectUrl}
           className={`flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col w-full ${className ?? ""} ${redirectUrl ? "cursor-pointer" : ""}`}>
            <img alt={imgAlt} src={imgSrc} className="rounded-t-lg mx-auto p-4"/>

            <div className="flex h-full flex-col justify-center gap-4 p-6">
                {children}
            </div>
        </a>
    )
}
