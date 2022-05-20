import React from 'react'

const Payment = () => {
  return (
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style="max-width: 600px">
        <div className="flex justify-between w-full">
                            <div className="w-full pt-1 pb-5">
                                <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                    <i className="mdi mdi-credit-card-outline text-3xl"></i>
                                </div>
                            </div>
                            <div className="w-full pt-1 pb-5">
                                <div className="bg-red-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                    <i className="mdi mdi-credit-card-outline text-3xl"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-10">
                            <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                        </div>
                        
                        <div className="mb-3">
                            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                            <div>
                                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                            <div>
                                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="font-bold text-sm mb-2 ml-1">Description</label>
                            <div>
                                <input className="w-full px-3 py-5 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                            </div>
                        </div>
                        
                        <div className="mb-10">
                            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                            <div>
                                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                            </div>
                        </div>
                        <div>
                            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                        </div>
                    </div>
  )
}

export default Payment