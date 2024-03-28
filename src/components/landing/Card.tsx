import React, { ReactNode } from 'react';

interface propsTypes {
    children: ReactNode;
    className: String;
}
const Card: React.FC<propsTypes> = ({ children, className }) => {
    return (
        <div className={`rounded shadow-lg ${className}`}>
            <div className="px-6 py-4">
                {children}
            </div>
        </div>
    );
}

export default Card;