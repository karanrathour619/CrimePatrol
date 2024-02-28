import React from 'react'

function UserEdit() {
  return (
    <>
    <div className='sm:px-[4rem] px-[2rem] pt-[8rem] 2xl:px-[10rem] xl:px-[6rem] bg-slate-800 flex md:flex-row flex-col md:min-h-[100vh]'>
                <div className='flex md:flex-col pb-4 sm:flex-row flex-col sm:items-start items-center md:w-[18rem] md:mr-10 mb-2'>
                    <div className='rounded-full bg-slate-300 p-4 sm:mr-6 object-contain w-[10rem] h-[10rem] overflow-hidden'>
                        <img src={require('../components/images/userlogo.png')} className='h-10' alt="" />
                    </div>
                    <div className='flex flex-col sm:pl-4 mt-4 sm:items-start items-center'>
                        <div className='text-green-500 flex text-xl mb-2 font-bold'>@karanrathour</div>
                        <div className='text-red-600 font-bold text-xl mb-2 '  >10 Alerts</div>
                    </div>
                </div>
                <form id="updateprofile" className='rounded-xl flex flex-col items-center'>
                    <div className='flex flex-col p-8 rounded-xl bg-slate-950 md:overflow-auto max-w-[60rem]'>
                        <div className='flex justify-end'>
                            <label className='p-3 font-bold text-right text-white'>Change your name :</label>
                            <div className='flex flex-col'>
                                <input className='rounded-md outline-none sm:w-[12rem] w-[10rem] p-4 mb-4 placeholder:text-bold text-white text-bold bg-slate-700' placeholder='First name' autoFocus></input>
                                <input className='rounded-md outline-none sm:w-[12rem] w-[10rem] p-4 mb-4 placeholder:text-bold text-white text-bold bg-slate-700' placeholder='Last name'></input>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <label className='p-3 font-bold  text-right text-white'>Change your city :</label>
                            <input className='rounded-md outline-none sm:w-[12rem] w-[10rem] p-4 mb-4 placeholder:text-bold text-white text-bold bg-slate-700' placeholder='Jamshedpur'></input>
                        </div>
                        <div className='flex justify-end'>
                            <label className='p-3 font-bold  text-right text-white'>Change your state :</label>
                            <select id="stateselect" className='rounded-md outline-none sm:w-[12rem] w-[10rem] p-4 mb-4 placeholder:text-bold text-white text-bold bg-slate-700'>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className="text-white text-right px-6 py-4 mt-4 mb-8 shadow-[0px_0px_15px_0px_rgb(34,197,94)] rounded-md font-bold hover:shadow-none transition-[shadow_200ms] active:bg-green-600 bg-green-500 cursor-pointer">Save Changes</button>
                </form>
            </div>
    </>
  )
}
export default UserEdit