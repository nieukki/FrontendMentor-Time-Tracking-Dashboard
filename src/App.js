import React from "react";
import Content from "./components/Content";
import UserCard from "./components/UserCard";

function App() {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-neutralVeryDarkBlue">
      <Content>
        <UserCard />
      </Content>
    </section>
  );
}

export default App;
