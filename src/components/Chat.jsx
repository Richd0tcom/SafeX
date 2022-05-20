import { useState, useEffect, useRef } from 'react';
import { auth, db } from '../init-firebase.config';
import { collection, getDocs, query, limit, orderBy,onSnapshot } from "firebase/firestore";
import Message from './Message';
import Input from './Input';



const Chat = () => {
   const scroll = useRef()
   const [messages, setMessages] = useState([]);

   useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(50))
      //const querySnapshot = await getDocs(q); //used to get data once. onSnapshot listens to realtime updates
      const querySnapshot =  onSnapshot(q, (querySnap)=>{
         setMessages(querySnap.docs.map(docs=>docs.data()))
      })
     
   }, [])
   

  

  return (
   <div className="h-screen overflow-hidden flex items-center justify-center bg-[#edf2f7]">
    <div className="flex-1 p:2  justify-between flex flex-col h-screen ">
      <div id="header" className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 pl-3 pr-3">
         <div className="relative flex items-center space-x-4">
            <div className="relative">
               <span className="absolute text-green-500 right-0 bottom-0">
                  <svg width="20" height="20">
                     <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                  </svg>
               </span>
               <img
                  src={auth.currentUser.photoURL}
                  alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
            </div>
            <div className="flex flex-col leading-tight">
               <div className="text-2xl mt-1 flex items-center">
                  <span className="text-gray-700 mr-3">{auth.currentUser.displayName}</span>
               </div>
               <span className="text-lg text-gray-600">online</span>
            </div>
         </div>
         <div className="flex items-center space-x-2">

            <button type="button"
                     className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                     onClick={()=>{auth.signOut()}}
                     >
                     <span className="font-bold">Sign Out</span>
            </button>

         
         </div>
      </div>
      <div id="messages"
         className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
         {messages.map(({id, text, photoURL, uid})=>{
            return (
               <Message id={id} value={text} img={photoURL} uid={uid} />
            )
         })}

         <div ref={scroll}></div>
      </div>

      <Input scroll={scroll}/>
      
   </div>
    {/* <!--<style>
   .scrollbar-w-2::-webkit-scrollbar {
   width: 1rem;
   height: 0.25rem;
   }

   .scrollbar-track-blue-lighter::-webkit-scrollbar-track {
   --bg-opacity: 1;
   background-color: #f7fafc;
   background-color: rgba(247, 250, 252, var(--bg-opacity));
   }

   /*.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
   --bg-opacity: 1;
   background-color: #edf2f7;
   background-color: rgba(237, 242, 247, var(--bg-opacity));
   }

   .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
   border-radius: 0.25rem;
   }
</style>-->

   <script>
      const el = document.getElementById('messages')
      el.scrollTop = el.scrollHeight
   </script> */}
   
</div>
  )

}

export default Chat;