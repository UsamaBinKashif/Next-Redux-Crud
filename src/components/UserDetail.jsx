import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/actions/actions";

const UserDetail = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: logout });
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
            <span className="space-x-4">
              <button
                onClick={handleLogout}
                className=" tracking-[2px] text-white bg-hara-rang border-0 py-1 px-4  hover:bg-opacity-70 rounded text-base"
              >
                LOGOUT
              </button>
              <Link href="/add-task" className="tracking-[2px] text-white bg-blue-500 border-0 py-1 px-4  hover:bg-opacity-70 rounded text-base">
                ADD TASK
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDetail;
