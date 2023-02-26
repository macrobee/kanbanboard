
const Header = ({text}) => {
    return <h1 className="text-xl font-bold self-start shadow-lg w-auto mt-2 ml-2 md:m-0 md:w-full md:w-1/2 rounded-md md:rounded-none bg-slate-200/50 px-4 py-2 flex justify-center align-center">
    {text}
  </h1>
}

export default Header;