'use client'
import React from 'react'
import { jsPDF } from 'jspdf'
const ImageToPdf = () => {


    const handlepdf = () => {
        const doc = new jsPDF();
        doc.text("Hello worl", 10, 10);
        doc.save('Example.pdf');
    }
    return (
        <div>
            <button onClick={() => handlepdf()} className='bg-green-400 px-10 py-3'>Click Here</button>
        </div>
    )
}

export default ImageToPdf
