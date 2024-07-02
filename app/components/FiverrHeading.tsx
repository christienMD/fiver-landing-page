
import React from "react";

const FiverrHeading = ({ label }: { label: string }) => {
  return (
    <h2 className="text-4xl md:text-5xl text-zinc-700 w-full md:max-w-xl mb-2 font-medium">
      {label}
    </h2>
  );
};

export default FiverrHeading