import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import avatar from "../../assets/icons/user.svg";

function UserDropdown() {
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div className="min-w-[240px] rounded-md bg-white border border-grey-300 flex flex-col">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-b-grey-300">
        <div className="flex items-center justify-center w-10 h-10">
          <img src={avatar} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-medium font-inter text-grey-900">
            {user?.name}
          </h1>
          <h1 className="text-sm font-inter text-grey-700">{user?.email}</h1>
        </div>
      </div>
      <Link
        to="/setting"
        className="px-4 py-[10px] cursor-pointer duration-300 hover:shadow-[inset_0_-2px_0_0_#F2F4F7,inset_0_2px_0_0_#F2F4F7]"
      >
        <h1 className="text-sm font-inter text-grey-900">My Account</h1>
      </Link>
      <Link
        to="/history"
        className="px-4 py-[10px] cursor-pointer duration-300 hover:shadow-[inset_0_-2px_0_0_#F2F4F7,inset_0_2px_0_0_#F2F4F7]"
      >
        <h1 className="text-sm font-inter text-grey-900">My Orders</h1>
      </Link>
      <Link to='/setting' className="px-4 py-[10px] cursor-pointer duration-300 hover:shadow-[inset_0_-2px_0_0_#F2F4F7,inset_0_2px_0_0_#F2F4F7]">
        <h1 className="text-sm font-inter text-grey-900">Settings</h1>
      </Link>
      <Link
        to="/dev"
        className="px-4 py-[10px] cursor-pointer duration-300 hover:shadow-[inset_0_-2px_0_0_#F2F4F7,inset_0_2px_0_0_#F2F4F7]"
      >
        <h1 className="text-sm font-inter text-grey-900">For Developers</h1>
      </Link>
      <Link
        to="/faqs"
        className="px-4 py-[10px] cursor-pointer duration-300 hover:shadow-[inset_0_-2px_0_0_#F2F4F7,inset_0_2px_0_0_#F2F4F7]"
      >
        <h1 className="text-sm font-inter text-grey-900">FAQs</h1>
      </Link>
      <div
        className="px-4 py-[10px] border-t border-t-grey-300 cursor-pointer duration-300"
        onClick={handleLogout}
      >
        <h1 className="font-inter text-sm text-[#F97066]">Log out</h1>
      </div>
    </div>
  );
}

export default UserDropdown;
