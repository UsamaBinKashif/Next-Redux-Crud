/* eslint-disable react/no-unescaped-entities */
import { useDispatch } from "react-redux";
import { logout } from "redux/authSlice";
import UserDetail from "./UserDetail";

const HomePage = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
    <section className="h-screen bg-black">

      <UserDetail/>
    </section>
    </>
  );
};

export default HomePage;
