import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section>
       <div className='container mx-auto'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <Link href={`#`} className=''>
               <h2>
                Resume
               </h2>
            </Link>

         </div>
       </div>
    </section>
  )
}

export default page
