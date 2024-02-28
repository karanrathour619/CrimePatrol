import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-950 '>
            <div className='flex flex-wrap sm:justify-around sm:p-4 p-8 text-white'>
                <div className='pb-4 pr-4'>
                    <div className='text-red-600 font-bold text-2xl'>CrimeAlert</div>
                    <div className='w-[15rem] text-slate-500'>Aware about crime alerts in your neighbourhood</div>
                </div>
                <div className='pb-4 pr-4'>
                    <div className='font-bold pb-2 pr-4'>Useful Links</div>
                    <div className='pb-1 text-slate-400 cursor-pointer hover:text-slate-300 transition-[color_200ms] text-sm'>Home</div>
                    <div className='pb-1 text-slate-400 cursor-pointer hover:text-slate-300 transition-[color_200ms] text-sm'>News</div>
                    <div className='pb-1 text-slate-400 cursor-pointer hover:text-slate-300 transition-[color_200ms] text-sm'>Alert</div>
                    <div className='pb-1 text-slate-400 cursor-pointer hover:text-slate-300 transition-[color_200ms] text-sm'>Map</div>
                    <div className='pb-1 text-slate-400 cursor-pointer hover:text-slate-300 transition-[color_200ms] text-sm'>Report</div>
                </div>
                <div className='pb-4 pr-4'>
                    <div className='font-bold pb-2'>Profile</div>
                    <div className='pb-1 text-slate-400 cursor-pointer hover:text-slate-300 transition-[color_200ms] text-sm'>View your Profile</div>
                    <div className='pb-1 text-slate-400 cursor-pointer hover:text-slate-300 transition-[color_200ms] text-sm mr-10'>Update your Profile</div>
                </div>
                <div className='pb-4 pr-4'>
                    <div>
                        <div className='font-bold pb-2'>Get in touch</div>
                        <div className='flex justify-around'>
                            I L G
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white text-center block pb-3'>©2024 Visions. All Rights Reserved.</div>
        </div>
    )
}

export default Footer