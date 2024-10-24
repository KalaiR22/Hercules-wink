import React from "react";
import { IoIosClose } from "react-icons/io";
import metis from "../assets/images/metis.png";
import musdc from "../assets/images/musdc.svg";
import { FaArrowDown } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

const TransactionSwap = ({
  fromToken,
  toToken,
  onSwapClick,
  onClose,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black py-2">
      <div className="p-3 sm:p-6 rounded-3xl border-[#6c757d33] border-[.5px] shadow-md w-fit sm:w-[490px] md:w-[500px] bg-primaryBg">
        <div className="mb-3 sm:mb-7 flex justify-between items-center">
          <h1 className="text-start text-white text-lg sm:text-2xl text-two font-semibold">
            Swap
          </h1>
          <IoIosClose
            size={28}
            className="hover:text-white text-notConnectedText mt-1 items-center cursor-pointer"
            onClick={onClose} // Close functionality
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-white flex">
            <img
              src={fromToken.image}
              alt=""
              className="sm:w-10 w-7 sm:h-10 h-7 rounded-full object-cover mr-2"
            />
            <div className="flex flex-col">
              <p className="text-white font-semibold focus:outline-none text-[13px] sm:text-base">
                {fromToken.name}
              </p>
              <h1 className="sm:text-sm text-[11px] font-medium text-two text-balanceText text-start">
                0.01 {/* Replace with actual from amount */}
              </h1>
            </div>
          </div>

          <FaArrowDown
            size={20}
            className="text-notConnectedText items-center ml-2.5"
          />

          <div className="text-white flex">
            <img
              src={toToken.image}
              alt=""
              className="sm:w-10 w-7 sm:h-10 h-7 rounded-full object-cover mr-2"
            />
            <div className="flex flex-col">
              <p className="text-white font-semibold focus:outline-none text-[13px] sm:text-base">
                {toToken.name}
              </p>
              <h1 className="sm:text-sm text-[11px] font-medium text-two text-balanceText text-start">
                0.446069 {/* Replace with actual to amount */}
              </h1>
            </div>
          </div>
        </div>

        <div className="text-white my-6 flex flex-col gap-1">
          <div className="flex justify-between">
            <p className="sm:text-[16px] text-[11px] font-normal text-two text-start">
              Minimum received
            </p>
            <p className="sm:text-[16px] text-[11px] font-normal text-two text-right items-center">
              0.4438 {toToken.name} {/* Replace with actual value */}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="sm:text-[16px] text-[11px] font-normal text-two text-start">
              {fromToken.name}/{toToken.name} Rate
            </p>
            <p className="sm:text-[16px] text-[11px] font-normal text-two text-right flex items-center">
              1 {fromToken.name} = {/* Add actual rate */} 44.607 {toToken.name}
              <BsArrowRight size={20} className="items-center font-thin mx-1" />
            </p>
          </div>
          <div className="flex justify-between">
            <p className="sm:text-[16px] text-[11px] font-normal text-two text-start">
              {toToken.name}/{fromToken.name} Rate
            </p>
            <p className="sm:text-[16px] text-[11px] font-normal text-two text-right flex items-center">
              1 {toToken.name} = {/* Add actual rate */} 0.022 {fromToken.name}
              <BsArrowRight size={20} className="items-center font-thin mx-1" />
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <button
            onClick={onCancel}
            className="text-white font-two bg-notConnectedBg w-1/2 p-1.5 sm:p-2 rounded-full font-medium text-xs sm:text-lg text-center items-center"
          >
            Cancel
          </button>
          <button
            onClick={onSwapClick}
            className="text-black bg-custom-gradient font-two bg-notConnectedBg w-1/2 p-1.5 sm:p-2 rounded-full font-semibold text-xs sm:text-lg text-center items-center"
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionSwap;
