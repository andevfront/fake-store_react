export const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center w-full max-w-[590px] py-10 mx-auto px-4">
      <img
        className="h-24 mx-auto my-10"
        src="../assets/images/logo.png"
        alt="logo"
      />
      <form className="flex flex-col items-center gap-5" action="#">
        <div className="relative w-full">
          <input
            type="text"
            id="floating_filled"
            className="peer block w-full appearance-none rounded-lg border-0 bg-white px-2.5 pb-2.5 pt-5 text-sm text-slate-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            for="floating_filled"
            className="pointer-events-none absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-primary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
          >
            Nombre de Usuario
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="password"
            id="floating_filled"
            className="peer block w-full appearance-none rounded-lg border-0 bg-white px-2.5 pb-2.5 pt-5 text-sm text-slate-600 focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            for="floating_filled"
            className="pointer-events-none absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-primary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
          >
            Contraseña
          </label>
        </div>
        <button
          className="border-2 border-primary text-primary py-2 px-6 rounded-lg transition-all duration-300 hover:text-white hover:bg-primary"
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
