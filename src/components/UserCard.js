import React from "react";
import UserImage from "./UserImage";
import UserName from "./UserName";
import FilterOptions from "./FilterOptions";

const UserCard = () => {
  return (
    <section className="bg-neutralDarkBlue flex flex-col items-center justify-center rounded-3xl">
      <div className="bg-primaryBlue flex items-center justify-center rounded-3xl">
        <UserImage />
        <UserName />
      </div>
      <FilterOptions />
    </section>
  );
};

export default UserCard;
