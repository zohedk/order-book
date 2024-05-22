import { LiaQuestionCircleSolid } from "react-icons/lia";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiCurrencyInrBold } from "react-icons/pi";
import { TransactionHistory } from "../components";

export const Payment = () => {
  return (
    <div className="w-[100%] h-screen">
      {/* top search bar */}
      <div className="w-[100%] h-[50px] flex justify-between items-center bg-white bg-shadow pl-[30px] pr-[30px]">
        <div className="flex items-center gap-[10px]">
          <div>Payments</div>
          <div className="flex justify-center items-center gap-[5px]">
            <LiaQuestionCircleSolid />
            <div className="text-[11px]">How it works</div>
          </div>
        </div>
        <div className="bg-[#F2F2F2] flex items-center w-[35%] h-[35px] rounded-md pl-[10px] pr-[10px]">
          <label htmlFor="payment-search" className="w-[5%]">
            <HiMiniMagnifyingGlass className="text-[20px]" />
          </label>
          <input
            type="text"
            id="payment-search"
            className=" bg-[#F2F2F2] border-none outline-none w-[80%]"
            placeholder="Search features, tutorial, etc"
          />
        </div>
        <div className="flex justify-center items-center gap-[5px] ">
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#e7e6e6] rounded-full text-[#4D4D4D] text-[20px] cursor-pointer">
            <HiSpeakerphone />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#e7e6e6] rounded-full text-[#4D4D4D] text-[35px] cursor-pointer">
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
      {/* overview */}
      <div className=" flex flex-col pl-[30px] pr-[30px] mt-[50px] gap-[30px]">
        <div className="flex justify-between ">
          <div className="text-[20px] ">Overview</div>
          <div className="w-[120px] h-[30px] flex justify-center items-center bg-shadow border border-[#6a696949] text-[#757577] rounded-md cursor-pointer">
            <div>Last Month</div>
            <div className="text-[25px]">
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[49%] h-[100px] flex flex-col justify-center bg-white bg-shadow p-[10px] gap-[20px] ">
            <div className="text-[#757577]">Online orders</div>
            <div className="text-[25px] tracking-[3px]">231</div>
          </div>
          <div className="w-[49%] h-[100px] flex flex-col justify-center bg-white bg-shadow p-[10px] gap-[20px] ">
            <div className="text-[#757577]">Amount received</div>
            <div className="text-[25px]  flex  items-center tracking-[2px]">
              <PiCurrencyInrBold />
              <div>23,92,312.19</div>
            </div>
          </div>
        </div>
      </div>
      {/* transaction history */}
      <div className=" flex flex-col pl-[30px] pr-[30px] mt-[50px] gap-[30px]">
        <div className="text-[20px] ">Transaction | This Month </div>
        <div>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};
