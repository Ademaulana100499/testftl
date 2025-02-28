import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Content } from "@/components/Content";
export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
