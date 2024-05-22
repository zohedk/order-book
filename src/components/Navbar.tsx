import { GoHome } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { RxSpeakerLoud } from "react-icons/rx";
import { ProductIcon } from "./ProductIcon";
import { MdKeyboardArrowDown, MdOutlinePayments } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { LuMousePointer2 } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navObj: Array<{ title: string; icon: React.ReactNode }> = [
    {
      title: "home",
      icon: <GoHome />,
    },
    {
      title: "orders",
      icon: <TbNotes />,
    },
    {
      title: "product",
      icon: <ProductIcon />,
    },
    {
      title: "delivery",
      icon: <CiDeliveryTruck />,
    },
    {
      title: "marketing",
      icon: <RxSpeakerLoud />,
    },
    {
      title: "analytics",
      icon: <ImStatsBars />,
    },
    {
      title: "payments",
      icon: <MdOutlinePayments />,
    },
    {
      title: "tools",
      icon: <LuMousePointer2 />,
    },
    {
      title: "discount",
      icon: <CiDiscount1 />,
    },
    {
      title: "audience",
      icon: <FiUsers />,
    },
    {
      title: "appearance",
      icon: <IoColorPaletteOutline />,
    },
    {
      title: "plugins",
      icon: <BsLightningCharge />,
    },
  ];
  return (
    <div className="w-[100%] h-[100%] p-[10px] flex flex-col justify-between text-white">
      <div className="flex flex-col">
        <div className="flex  justify-between items-center text-black  mt-[10px]">
          <div className="flex gap-[20px]">
            <div className="relative w-[50px] h-[50px] bg-[#FEFEFE] rounded-md flex flex-col justify-center items-center capitalize text-[8px] font-serif">
              <div className="z-[5]">nihsyan</div>
              <div className="text-[3px] z-[5]">made with love</div>
              <div className="absolute clippy-bg w-[100%] h-[100%] bg-[#fedfbadc]"></div>
            </div>
            <div className="felx flex-col justify-center items-center text-white">
              <div className="text-[18px] ">Nishyan</div>
              <div className="text-[15px] underline text-[#D3D4D9] cursor-pointer">
                Visit store
              </div>
            </div>
          </div>
          <MdKeyboardArrowDown className="text-white text-[30px]" />
        </div>
        {/* navigation */}
        <nav>
          <ul className="flex flex-col mt-[30px] gap-[10px] text-[#D3D4D9] pl-[5px]">
            {navObj.map(({ title, icon }) => {
              if (title == "home") {
                return (
                  <Link to={`/`} key={title}>
                    <li className="flex items-center gap-[15px] cursor-pointer hover:bg-[#ffffff23] p-[10px] rounded-lg">
                      <div className="text-[27px]">{icon}</div>
                      <div className="capitalize">{title}</div>
                    </li>
                  </Link>
                );
              }
              return (
                <Link
                  to={`/${title}`}
                  key={title}
                  style={{
                    background: title == "payments" ? "#ffffff23" : "",
                  }}
                  className="rounded-md"
                >
                  <li className="flex items-center gap-[15px] cursor-pointer hover:bg-[#ffffff23] p-[10px] rounded-md">
                    <div className="text-[27px]">{icon}</div>
                    <div className="capitalize">{title}</div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* available credit */}
      <div className="w-[100%] h-[60px] flex  items-center bg-[#363C53] rounded-md p-[15px] gap-[20px] cursor-pointer">
        <div className="flex items-center ">
          <div className="w-[40px] h-[40px] flex justify-center items-center text-[30px] bg-[#4A5064] rounded-md">
            <CiWallet />
          </div>
        </div>
        <div className="flex flex-col text-[13px]">
          <div className="text text-[#D3D4D9]">Availabe credit</div>
          <div>222.10</div>
        </div>
      </div>
    </div>
  );
};
