/* eslint-disable react/no-unescaped-entities */
import { useDispatch } from "react-redux";
import UserDetail from "./UserDetail";

const HomePage = () => {

  return (
    <>
    <section className="h-screen bg-black">

      <UserDetail/>
    </section>
    </>
  );
};

export default HomePage;
