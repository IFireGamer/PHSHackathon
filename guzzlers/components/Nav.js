import { BsList } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

export default function Nav({ user }) {
  return (
    <div className="absolute top-0 right-0 mt-4 mr-4 ">
      <div className="relative flex items-center justify-center rounded-3xl shadow-md text-white bg-neutral-800 p-4 font-bold text-2xl group hover:rounded-b-none">
        <BsList />
        <div className="absolute top-14 rounded-b-3xl text-white bg-neutral-800 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
          <div className="p-4 ">
            <a href={user ? "/dashboard" : "/signIn"}>
              <FaUser />
            </a>
          </div>
          <div className="p-4">
            <a href="/">
              <AiFillHome />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
