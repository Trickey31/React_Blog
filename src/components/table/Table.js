import React from "react";

const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-[10px]">
      <table className="w-full">{children}</table>
    </div>
  );
};

export default Table;
