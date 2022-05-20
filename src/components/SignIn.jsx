import { auth, provider } from "../init-firebase.config";
import { signInWithPopup, setPersistence, browserLocalPersistence } from "firebase/auth";

const SignIn = () => {

   async function signInWithGoogle() {
     await setPersistence(auth, browserLocalPersistence)
    
        const result = await signInWithPopup(auth,provider);

      const user = result.user

    }


  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-[#edf2f7]">
        <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
            <div className="relative container m-auto px-3 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-4/6 xl:w-4/6">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy"
                                    className="w-10" alt="tailus logo"></img>
                                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br /> best of SafeX        .
                                </h2>
                            </div>
                            <div className="mt-16 grid space-y-4">
                                <button onClick={signInWithGoogle} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300   hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                            className="absolute left-0 w-5" 
                                            alt="google logo" />
                                        <span
                                            className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                            with Google</span>
                                    </div>
                                </button>
                                
                                {/* <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                        hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                                            className="absolute left-0 w-5" alt="Facebook logo" />
                                        <span
                                            className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                            with Facebook</span>
                                    </div>
                                </button> */}
                            </div>

                            <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                                <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of
                                        Use</a> and confirm you have read our <a href="#" className="underline">Privacy and
                                        Cookie Statement</a>.</p>
                                <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#"
                                        className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms
                                        of Service</a> apply.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default SignIn;