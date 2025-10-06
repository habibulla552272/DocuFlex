'use client'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const Resume = () => {
    const [experience, setExperience] = useState(1)
    const [innovation, setInnovation] = useState(1)


    return (
        <section>
            <div className='container mx-auto'>
                <form action="handleform">
                    <input type="text" placeholder='Enter you name' className='outline-none text-xl font-bold ' />
                    <div>
                        <input type="emial" placeholder='Enter you Email' />
                        <input type="number" placeholder='Enter your Phone Number' />
                    </div>

                    {/* education */}
                    <div>
                        <h2 className='text-2xl font-bold border-b-2 border-black'>EDUCATION</h2>
                        <div className='md:flex justify-between'>
                            <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='enter your university Name' />
                            <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='place' />
                        </div>
                        <div className='md:flex justify-between'>
                            <input className='w-full md:1/2 outline-none text-sm font-normal' type="text" placeholder='enter your subject Name' />
                            <input className='w-full md:1/2 outline-none text-sm font-normal' type="text" placeholder='Session' />
                        </div>
                        <input type="text" placeholder='if any award' />

                        <div className='flex gap-2'>
                            <p className='text-sm font-bold'>Relavant Course:</p>
                            <input type="w-full  outline-none text-sm font-normal" placeholder='relavant course' />
                        </div>
                        <div>
                            {/* study abroad university  */}
                            <h2 className='text-xl font-bold pt-7'>study abroad university</h2>
                            <div className='md:flex justify-between'>
                                <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='enter your university Name' />
                                <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='place' />
                            </div>
                            <div className='md:flex justify-between'>
                                <input className='w-full md:1/2 outline-none text-sm font-normal' type="text" placeholder='enter your subject Name' />
                                <input className='w-full md:1/2 outline-none text-sm font-normal' type="text" placeholder='Session' />
                            </div>
                            <input type="text" placeholder='if any award' />

                            <div className='flex gap-2'>
                                <p className='text-sm font-bold'>Relavant Course:</p>
                                <input type="w-full  outline-none text-sm font-normal" placeholder='relavant course' />
                            </div>
                        </div>

                    </div>
                    {/* Experience */}
                    <div>
                        <div className='flex justify-between gap-4'>

                            <h2 className='text-2xl font-bold border-b-2 border-black'>WORK EXPERIENCE</h2>
                            <FaPlus onClick={() => setExperience(experience + 1)} className='text-2xl px-3 py-2 bg-green-400 rounded-xl' />

                        </div>
                        {Array.from({ length: experience }, (_, i) => (
                            <div key={i}>

                                <div className='md:flex justify-between'>
                                    <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='enter your company Name' />
                                    <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='place' />
                                </div>
                                <div className='md:flex justify-between'>
                                    <input className='w-full md:1/2 outline-none text-sm font-normal' type="text" placeholder='Dejignation Name' />
                                    <input className='w-full md:1/2 outline-none text-sm font-normal' type="text" placeholder='Session' />
                                </div>
                                <input type="text" placeholder='if any award' />

                                <div className='flex gap-2'>
                                    <p className='text-sm font-bold'>Relavant Course:</p>
                                    <input type="w-full  outline-none text-sm font-normal" placeholder='relavant course' />
                                </div>
                            </div>
                        ))

                        }



                    </div>
                    {/* LEADERSHIP $ COMMUNITY INVOLVEMENT */}
                    <div>
                        <div className='flex justify-between gap-4'>

                            <h2 className='text-2xl font-bold border-b-2 border-black'>LEADERSHIP $ COMMUNITY INVOLVEMENT</h2>
                            <FaPlus onClick={() => setInnovation(innovation + 1)} className=' px-3 py-2 rounded-xl' />

                        </div>

                        <div className='md:flex justify-between'>
                            <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='Place Name' />
                            <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='TIME' />
                        </div>
                        <FaPlus />
                        <div className='md:flex justify-between'>
                            <input className='w-full md:1/2 outline-none text-sm font-normal' type="text" placeholder='Dejignation Name' />
                        </div>

                    </div>
                    {/* Skill $ CERTIFICATIONS*/}
                    <div>
                        <div className='flex justify-between gap-4'>

                            <h2 className='text-2xl font-bold border-b-2 border-black'>Skill $ CERTIFICATIONS</h2>
                            <FaPlus />

                        </div>

                        <div className='md:flex justify-between'>
                            <p className='flex gap-1'>
                                <span className='text-xl font-bold'>Language:</span>
                                <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='Languages' />
                            </p>
                            <p className='flex gap-1'>
                                <span className='text-xl font-bold'>Skills:</span>
                                <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='Languages' />
                            </p>
                            <p className='flex gap-1'>
                                <span className='text-xl font-bold'>Interests:</span>
                                <input className='w-full md:1/2 outline-none text-xl font-bold' type="text" placeholder='Languages' />
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Resume
