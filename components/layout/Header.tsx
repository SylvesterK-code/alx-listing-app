const Header = () => {
  return (
    <header className="p-4 shadow-md flex justify-between items-center bg-white">
      <div className="text-xl font-bold">StayPlace</div>
      <nav className="space-x-4 hidden md:flex">
        <a href="#" className="hover:text-blue-500">Rooms</a>
        <a href="#" className="hover:text-blue-500">Mansions</a>
        <a href="#" className="hover:text-blue-500">Countryside</a>
      </nav>
      <div className="space-x-2">
        <button className="text-sm">Sign In</button>
        <button className="text-sm border px-3 py-1 rounded-full">Sign Up</button>
      </div>
    </header>
  );
};
export default Header;
