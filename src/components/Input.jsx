import { useState } from "react";
import { db, auth } from "../init-firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Input = ({scroll}) => {
    const [msg, setMsg] = useState('');
    async function sendMessages(e){
        e.preventDefault();
        const { uid, photoURL} = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: msg,
            photoURL,
            uid,
            createdAt: serverTimestamp(),
        });
        setMsg('');
        scroll.current.scrollIntoView({behaviour: 'smooth'});
    }

  return (
    <form
      id="input"
      className="border-t-2 border-gray-200 px-4 pt-4 pb-4 mb-2 sm:mb-0"
      onSubmit={sendMessages}
    >
      <div className="relative flex">
        <span className="absolute inset-y-0 flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              ></path>
            </svg>
          </button>
        </span>
        <input
          type="text"
          placeholder="Write your message!"
          className="w-full pr-12 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
          onChange={(e)=>{setMsg(e.target.value)}}
          value={msg}
        />
        <div className="absolute right-0 items-center inset-y-0 flex">
          <button
            type="submit"
            onClick={sendMessages}
            className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
          >
            <span className="font-bold hidden md:inline-block">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 ml-2 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Input;
