import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/actions";

const UserDetail = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <section>
        <div className=" flex justify-around py-4 ">
          <h1 className="sm:text-2xl text-xl font-medium text-white">
            WELCOME TO THE <span className="text-hara-rang"> EARTH</span>
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="sm:text-2xl text-xl font-medium  text-white">
              {user.email}
            </h1>
            <button onClick={handleLogout} className=" tracking-[2px] text-white bg-hara-rang border-0 py-1 px-8  hover:bg-opacity-70 rounded text-lg">
              LOGOUT
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDetail;
