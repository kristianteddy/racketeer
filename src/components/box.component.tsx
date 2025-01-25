import {ReactNode} from "react";

export type BoxComponentProps = {
    children: ReactNode
    className?: string
}

export default async function BoxComponent({children, className} : BoxComponentProps) {

    return (
        <div className={`p-4 rounded-md flex border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col ${className ?? ""}`}>
            {children}
        </div>
    )
}
