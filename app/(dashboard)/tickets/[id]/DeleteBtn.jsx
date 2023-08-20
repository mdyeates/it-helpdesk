"use client";

import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const DeleteBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async ({ id }) => {
    setIsLoading(true);

    console.log("deleting id: ", id);
  };

  return (
    <button className="btn-primary" onClick={handleClick} disabled={isLoading}>
      {isLoading && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}

      {!isLoading && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  );
};

export default DeleteBtn;
