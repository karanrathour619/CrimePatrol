import React from 'react' 
import { Link } from 'react-router-dom'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function User() { 

  return (
    <>
    <div className='sm:px-[4rem] px-[2rem] pt-[8rem] 2xl:px-[10rem] xl:px-[6rem] bg-slate-800 flex md:flex-row flex-col md:h-[100vh]'>
                <div className='flex md:flex-col pb-4 sm:flex-row flex-col sm:items-start items-center md:w-[25rem] md:mr-10 border-b-2 md:border-none mb-2'>
                    <div className='rounded-full bg-slate-300 p-4 sm:mr-6 object-contain w-[10rem] h-[10rem] overflow-hidden'>
                      <img src={require('../components/images/userlogo.png')} className='h-10' alt="" />
                    </div>
                    <div className='flex flex-col sm:pl-4 mt-4 sm:items-start items-center'>
                        <div className='text-white flex text-xl mb-2 font-bold'>@karanrathour<Link to="/UserEdit" className='pl-3 opacity-75 hover:opacity-100'>
                            <FontAwesomeIcon icon={faPen} />
                        </Link></div>
                        <div className='text-white text-xl mb-2 '  >Karan Singh Rathour</div>
                        <div className='text-white text-xl mb-2 '  >Jamshedpur,Jharkhand</div>
                        <div className='text-red-600 font-bold text-xl mb-2 '  >10 Alerts</div>
                    </div>
                </div>
                <div id="postcontainer" className='flex flex-col md:overflow-auto max-w-[60rem]'>
                    <div className='md:mt-0 md:mb-4 mt-4 sm:p-8 p-6 rounded-md bg-slate-600'>
                        <div className='font-bold text-white text-2xl'>Robbery</div>
                        <div className='font-s pb-4 text-slate-300 sm:text-lg text-sm'>@karanrathour</div>
                        <div className='text-white pb-4 sm:text-lg text-sm'>A sneaky robber stole Mrs.Ambani jweleries when the family was out of town. The guard dog was found poisioned.</div>
                        <div className='text-slate-300'>24-02-2024</div>
                        <div className='flex justify-between text-white flex-wrap'>
                            <div className='flex text-green-500 '>
                                <Link href="#" className='hover:underline sm:text-lg text-sm' >Jamshedpur</Link>
                                <div className='px-1 sm:text-lg text-sm'>,</div>
                                <Link href="#" className='hover:underline sm:text-lg text-sm' >Jharkhand</Link>
                            </div>
                            <div className='text-red-600 pt-1 hover:text-red-700 font-semibold cursor-pointer sm:text-lg text-sm'>Report</div>
                        </div>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default User
