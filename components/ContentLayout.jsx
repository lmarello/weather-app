import React from "react";

const ContentLayout = ({ children }) => {
  return (
    <div className="grid h-screen">
      <div className="w-full grid place-content-center">
        <div className="bg-glass text-white h-[600px] w-[400px] text-center py-10 px-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
