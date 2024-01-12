import React from "react";
import ProfileMenu from "../../components/profileMenu";

function Home() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-2xl">Stream Parties</h1>
      <ProfileMenu />
    </header>
  );
}

export default Home;
