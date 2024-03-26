import React, { ReactNode } from "react";

interface SlotComponentProps {
    classname: string,
    href: string,
    children: ReactNode;
}

const LinkButton: React.FC<SlotComponentProps> = ({ classname, children, href }) => {
    return (
        <a
            href={href}
            className={`text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 ${classname}`}
        >
            {children}
        </a>
    )
}

export default LinkButton