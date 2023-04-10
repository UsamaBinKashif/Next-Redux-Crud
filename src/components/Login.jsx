import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/actions";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: login, payload: { email, password } });
  };

  return (
    <div className="video w-full  relative h-screen">
      <div className="absolute w-full h-full"></div>
      <video
        src="/assets/earth.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bottom-0 flex flex-col justify-center items-center text-white">
        <div className=" p-10 rounded ">
          <div className="flex flex-col text-center  ">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 tracking-[2px] text-white ">
              EARTH
            </h1>
          </div>
          <form className=" mx-auto" onSubmit={onSubmit}>
            <div className="flex flex-col items-center">
              <div className="p-2 w-96">
                <div className="relative">
                  <label
                    for="email"
                    className="tracking-[2px]  text-base font-semibold "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="YOUR EMAIL HERE..."
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-hara-rang focus:bg-white  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-96">
                <div className="relative">
                  <label
                    for="password"
                    className="tracking-[2px]  text-base font-semibold "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    required
                    placeholder="*******"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-hara-rang focus:bg-white text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 ">
                <button
                  type="submit"
                  className=" mx-auto tracking-[2px] text-white bg-hara-rang border-0 py-2 px-8  hover:bg-opacity-70 rounded text-lg "
                >
                  LOGIN TO EARTH
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
