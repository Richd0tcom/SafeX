import React, {useEffect,useState}from "react";
import QRCode from "qrcode"

const Receipt = ({dest}) => {
  const data = JSON.parse(localStorage.getItem('userData'));
  const [src, setSrc]= useState('')

  const receipt = {
    name:data.name,
    email:data.email,
    destination: dest || "Trenches",
    eta: "5pm" 
  }
  useEffect(()=>{
    QRCode.toDataURL(JSON.stringify(receipt)).then((data)=>{setSrc(data)});
  },[])
  return (
    <div className="px-1 py-2 text-gray-800">
      <div className="hidden xl:flex flex-row justify-between shadow-md border rounded-md">
        <div className="flex flex-col items-center justify-between w-1/4 px-4 py-2 bg-white border-r-2 border-gray-500 border-dashed rounded-l-md">
          <div className="flex-col">
            <img src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a" alt=""/>
            <p className="my-2 text-xs italic font-light text-gray-500">
              Scan here to check in!
            </p>
            <div className="text-xs mb-2 text-gray-600">
              <span className="text-gray-500">Valid until :</span>
              <br />
              Monday, 28 September 2020 18:30:23
            </div>
          </div>
          <div className="text-left">
            <p className="pb-2 text-xs italic">Powered By</p>
            <img src="https://ad-venture.org.uk/wp-content/uploads/2017/05/logo-placeholder.png" alt=""/>
          </div>
        </div>
        <div className="relative flex flex-col w-3/4">
          <img src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png" alt=""/>
          <div className="absolute p-1 bottom-24">
            <div className="flex flex-row px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md ">
              <span className="mr-2 font-normal text-gray-500">
                Organizer :
              </span>
              <p className="font-semibold text-red-800">Banua Coder</p>
            </div>
          </div>
          <div className="absolute self-end mr-1 mt-1">
            <p className="px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md ">
              <span className="font-normal text-gray-500">Ticket Number :</span>
              12
            </p>
          </div>
          <div className="absolute bottom-0 flex flex-col w-full h-24">
            <div className="w-full h-full bg-white opacity-75 rounded-br-md"></div>
            <div className="absolute flex flex-row p-2 text-gray-800 opacity-100">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <p className="mb-1 text-xs text-gray-500">Start Date :</p>
                  <p className="text-xs font-semibold text-red-800">
                    Monday, 28 September 2020 09:00
                  </p>
                </div>
                <div className="hidden md:flex flex-col mt-1">
                  <p className="mb-1 text-xs text-gray-500">End Date :</p>
                  <p className="text-xs font-semibold text-red-800">
                    Monday, 28 September 2020 19:00
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="hidden md:flex flex-col">
                  <p className="mb-1 text-xs text-gray-500">Type of event :</p>
                  <p className="text-xs font-semibold text-red-800">Seminar</p>
                </div>
                <div className="flex flex-col mt-1">
                  <p className="mb-1 text-xs text-gray-500">Location :</p>
                  <p className="text-xs font-semibold text-red-800">
                    Banua Coder Coworking Space, Palu Timur, Kota Palu, Sulawesi
                    Tengah
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="flex flex-col">
                  <p className="mb-1 text-xs text-gray-500">Ticket Owner :</p>
                  <p className="text-xs font-semibold text-red-800">
                    Fajrian Aidil Pratama
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden flex flex-col bg-white border rounded-md shadow-md">
        <div className="py-2 px-4 flex-col flex text-center">
          <img
            className="mx-auto"
            src={src}
            alt=""
          />
          <p className="font-bold text-lg md:text-3xl">
            Scan here to check in!
          </p>
        </div>
        <hr className="border-dashed border-2 border-gray-400" />

        <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
          <p className="self-start font-bold text-gray-500">Depature</p>
          <div className="flex text-sm justify-between my-2 md:text-xl">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <p className="font-bold text-red-800">Friday, 29 September 2020</p>
          </div>
          <div className="flex text-sm justify-between my-2 md:text-xl">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="font-bold text-red-800">10:30</p>
          </div>
        </div>
        <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
          <p className="self-start font-bold text-gray-500">ETA</p>
          <div className="flex text-sm md:text-xl justify-between my-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <p className="font-bold text-red-800">Friday, 29 September 2020</p>
          </div>
          <div className="flex text-sm md:text-xl justify-between my-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="font-bold text-red-800">15:30</p>
          </div>
        </div>
        <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
          <p className="self-start font-bold text-gray-500">Destination</p>
          <div className="flex text-sm md:text-xl justify-between my-2">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <p className="font-bold text-red-800">
              {receipt.destination}, Naija
            </p>
          </div>
        </div>
        <hr className="border-gray-400" />
        <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
          <p className="self-start font-bold text-gray-500">Powered By</p>
          <img
            className="mx-auto my-2"
            src="https://ad-venture.org.uk/wp-content/uploads/2017/05/logo-placeholder.png"
            alt="e"
          />
        </div>
      </div>
    </div>
  );
};

export default Receipt;
