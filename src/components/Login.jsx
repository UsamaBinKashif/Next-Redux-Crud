import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
      })
    );
  };

  return (
    <div className="video w-full  relative h-screen">
      <div className="absolute w-full h-full"></div>
      <video
        src="/earth.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bottom-0 flex flex-col justify-center items-center text-white">
        <div class=" p-10 rounded ">
          <div class="flex flex-col text-center  ">
            <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 tracking-[2px] ">
              EARTH
            </h1>
          </div>
          <form class=" mx-auto">
            <div class="flex flex-col items-center">
              <div class="p-2 w-96">
                <div class="relative">
                  <label
                    for="email"
                    class="tracking-[2px]  text-base font-semibold "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-96">
                <div class="relative">
                  <label
                    for="password"
                    class="tracking-[2px]  text-base font-semibold "
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 ">
                <button
                  onClick={onSubmit}
                  class=" mx-auto tracking-[2px] text-white bg-green-600 border-0 py-2 px-8  hover:bg-opacity-70 rounded text-lg "
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
