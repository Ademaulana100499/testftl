import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-16 h-screen mt-5 bg-white  flex flex-col items-center py-5">
      <a href="#" className="text-white bg-blue-500 p-2 rounded-lg text-2xl">
        <FaHome />
      </a>
    </div>
  );
};

export default Sidebar;
