import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BsArrowDownUp, BsDownload } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const TransactionHistory = () => {
  const obj: Array<{
    id: string;
    date: string;
    amount: string;
    fees: string;
  }> = [
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
    {
      id: "#281209",
      date: "7, july 2023",
      amount: "1,278.23",
      fees: "22",
    },
  ];

  return (
    <div className="w-[100%]  bg-white p-[10px] gap-[10px]  mb-[50px] rounded-md">
      {/* transaction search bar */}
      <div className="flex justify-between items-center">
        <div className=" bg-white flex items-center w-[230px] h-[35px] rounded-md p-[20px] border border-[#00000036]">
          <label htmlFor="order-search" className="w-[15%]">
            <HiMiniMagnifyingGlass className="text-[20px]" />
          </label>
          <input
            type="text"
            id="order-search"
            className="border-none outline-none w-[80%]"
            placeholder="Search by order ID..."
          />
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <div className="w-[70px] h-[35px] flex justify-center items-center border border-[#00000036] rounded-md p-[20px] gap-[5px] cursor-pointer ">
            <div>Sort</div>
            <div className="text-[13px]">
              <BsArrowDownUp />
            </div>
          </div>
          <div className="w-[35px] h-[35px] flex justify-center items-center border border-[#00000036] rounded-md p-[20px] gap-[5px] cursor-pointer ">
            <div className="text-[20px]">
              <BsDownload />
            </div>
          </div>
        </div>
      </div>
      {/* transaction history */}
      <div className="flex flex-col justify-start items-center w-[100%]  mt-[30px]">
        <div className="w-[100%] flex justify-between bg-[#F2F2F2] p-[10px] rounded-md">
          <div className="w-[25%] flex items-center">Order ID</div>
          <div className="w-[25%] flex items-center gap-[3px] ">
            Order date <IoMdArrowDropdown className="text-[20px]" />
          </div>
          <div className="w-[25%] flex justify-end items-center">
            Order Amount
          </div>
          <div className="w-[25%]  flex justify-end items-center gap-[3px]">
            Transaction fees{" "}
            <AiOutlineExclamationCircle className="text-[15px]" />
          </div>
        </div>
        {obj.map(({ id, date, amount, fees }) => {
          return (
            <div className="w-[100%] flex justify-between  p-[10px] rounded-md">
              <div className="w-[25%] flex items-center text-[#126EB4] cursor-pointer">
                {id}
              </div>
              <div className="w-[25%] flex items-center gap-[3px] ">{date}</div>
              <div className="w-[25%] flex justify-end items-center">
                <PiCurrencyInrBold /> {amount}
              </div>
              <div className="w-[25%]  flex justify-end items-center gap-[3px]">
                <PiCurrencyInrBold /> {fees}
              </div>
            </div>
          );
        })}
      </div>

      {/* next  and previous button*/}
      <div className="flex justify-center items-center mt-[30px]">
        <div className="w-[60%] flex justify-between items-center">
          <div className="w-[100px] h-[35px] flex justify-center items-center border border-[#00000036] rounded-md p-[20px] gap-[5px] cursor-pointer ">
            <div className="text-[20px]">
              <MdKeyboardArrowLeft />
            </div>
            <div>Previous</div>
          </div>
          <div className="flex justify-between items-center gap-[5px]">
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              1
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              ...
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center bg-[#126EB4] rounded-lg text-white">
              10
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              11
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              12
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              13
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              14
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              15
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              16
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              17
            </div>
            <div className="w-[35px] h-[35px] p-[5px] flex justify-center items-center">
              18
            </div>
          </div>
          <div className="w-[100px] h-[35px] flex justify-center items-center border border-[#00000036] rounded-md p-[20px] gap-[5px] cursor-pointer ">
            <div>Next</div>
            <div className="text-[20px]">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
