import NavBar from "../components/NavBar"

export const LogIn = () => {
  return (
    <>
            <NavBar></NavBar>
            <div className="flex items-center justify-center  bg-gray-100 h-screen">
            <div className="bg-white p-8 shadow-md rounded-md w-6/12">
             <h2 className="text-2xl font-bold mb-4">Log in</h2>
           <form>
            <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                 Email
                </label>
                <input className="border border-gray-400 rounded-md px-3 py-2 w-full" type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
                </label>
                <input className="border border-gray-400 rounded-md px-3 py-2 w-full" type="password" placeholder="Enter your password"/>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full" type="submit">
            Log in
            </button>
        </form>
      </div>
      </div>

    </>
  )
}
