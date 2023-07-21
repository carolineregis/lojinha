export default function Header() {
  return(
    <div className="header col-span-2 absolute w-full items-center justify-center font-sans text-sm lg:flex">
      <p className="custom-title text-7xl mr-auto left-0 top-0 flex w-full justify-center lg:w-auto main-page-title">
        Lojinha :)
      </p>
      <div className=" bottom-0 left-0 flex h-14 w-80 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:h-14 lg:w-96 lg:bg-none">
        <label className="relative block w-full h-full">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input className="placeholder:italic bg-transparent placeholder:text-slate-400 block w-full h-full border border-zinc-700 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
        </label>
      </div>
    </div>
  )
}