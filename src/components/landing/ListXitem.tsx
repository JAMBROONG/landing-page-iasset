import React, { ReactNode } from "react";

interface propsTypes {
  children: ReactNode;
  title: String;
}

const ListXitem: React.FC<propsTypes> = ({ children, title }) => {
  return (
    <li className="space-y-2">
      <div className="flex items-center space-x-2">
        {/* <CheckCircleIcon :size="20" class="text-[#0c66ee]" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="min-w-[22px] min-h-[22px] w-[22px]" viewBox="0 0 48 48">
          <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
        </svg>

        <span>{title}</span>
      </div>
      {children}
    </li>
  );
};

export default ListXitem;
