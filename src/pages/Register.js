import { Link } from 'react-router-dom'
function Register() {
  return (
    <>

        <div className="bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl mx-auto text-center">
            <span className="text-2xl font-light">Register to Stay Alert</span>
            <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div className="h-2 bg-indigo-400 rounded-t-md"></div>
                <div className="py-6 px-8">
                {/* <label className="block font-semibold">Username</label> */}
                <input
                    type="text"
                    placeholder="Username"
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                {/* <label className="block font-semibold">Email</label> */}
                <input
                    type="text"
                    placeholder="Email"
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                {/* <label className="block mt-3 font-semibold">Password</label> */}
                <input
                    type="password"
                    placeholder="Password"
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <div className="flex justify-between items-baseline">
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">
                    Register
                    </button>
                </div>
                <div className='flex justify-center pt-4 space-x-3'>
                    <p className='mt-2'>Already have an account?</p>
                    <button className=" bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">
                <Link to="/login">Login</Link>
                </button>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    </>
   
  )
}

export default Register