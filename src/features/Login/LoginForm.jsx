import IconCircleUser from "../../assets/IconCircleUser";
//import IconLogin from "../../assets/IconLogin";

function LoginForm() {
  return (
    <section className="p-4 max-w-lg">
      <div className=" bg-white shadow-xl rounded-lg">
        <div className=" p-8 text-white grid place-items-center rounded-t-lg bg-violet-400">
          {/*  <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 hover:text-creative-yellow"
            >
            <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
            />
        </svg> */}
          <IconCircleUser
            className="hover:text-creative-lilac"
            width="5rem"
            height="5rem"
          />
        </div>
        <div className="p-5">
          <p>Please enter your user name and password</p>
          <form className="flex flex-col content-center gap-3 mt-3 ">
            <input
              className="border rounded-md sm:rounded-r-none border-gray-300 px-4 py-2 mb-2 hover:border-violet-400 focus:outline-none focus:border-violet-500 flex-grow"
              type="text"
              placeholder="username..."
            ></input>
            <input
              className="border rounded-md sm:rounded-r-none border-gray-300 px-4 py-2 hover:border-violet-400 focus:outline-none  focus:border-violet-500 flex-grow"
              type="password"
              placeholder="password..."
            ></input>
            <button className="mt-2 px-4 py-2 rounded-md sm:rounded-r-none text-stone-100 font-semibold bg-violet-400 focus:outline-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
