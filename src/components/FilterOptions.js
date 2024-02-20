import React from "react";

const FilterOptions = () => {
  return (
    <section className="w-full">
      <ul className="flex items-center justify-evenly py-4 text-lg">
        <li className="text-white">Daily</li>
        <li className="text-slate-400">Weekly</li>
        <li className="text-slate-400">Monthly</li>
      </ul>
    </section>
  );
};

export default FilterOptions;
