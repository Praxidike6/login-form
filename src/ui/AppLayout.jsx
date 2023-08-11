import LoginForm from "../features/Login/LoginForm";

function AppLayout() {
  return (
    <>
      {/** wrapper section */}
      <section className="flex flex-col px-8 md:py-5 max-w-screen-2xl min-h-screen antialiased">
        <header className="py-4">
          <a href="https://www.google.com">
            <img
              src="../../public/logo.svg"
              alt="https://cdn.pixabay.com/photo/2013/07/12/15/05/android-149390_1280.png"
              className="h-10 text-violet-500"
            ></img>
          </a>
        </header>
        <section className="flex flex-col gap-20 py-5 md:flex-row md:py-10">
          {/** description section begins */}
          <section className="flex-1 ">
            <h1 className="font-semibold text-6xl leading-tight text-slate-800 ">
              Welcome to Dani&apos;s Cha Cha Cha organising services
            </h1>
            <p className="mt-2 text-violet-500 text-xl">
              We do do what you don&apos;t want to do!
            </p>
            <p className="mt-4 text-lg text-stone-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              mattis enim ut tellus elementum sagittis. Neque vitae tempus quam
              pellentesque nec.
            </p>
          </section>

          {/** description section ends */}
          {/** login section begins */}
          <section className="flex-1">
            {/** login section begins */}
            <span className="centered">
              <LoginForm />
            </span>
          </section>
        </section>
        <footer className="py-8 mt-auto">
          <ul className="flex gap-6 text-sm text-white lg:text-stone-500">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#about">Contact</a>
            </li>
            <li>
              <a href="#about">Privacy Policy</a>
            </li>
          </ul>
        </footer>
      </section>
    </>
  );
}

export default AppLayout;
