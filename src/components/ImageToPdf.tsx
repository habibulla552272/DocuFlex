'use client'
import React, { useState } from 'react'
import { jsPDF } from 'jspdf'
const ImageToPdf = () => {
    const [url, setUrl] = useState<string | null>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        console.log('1', e.target.files?.[0])
        console.log('2', file)
        if (file) {
            const reader = new FileReader();
            console.log('3', reader);
            reader.onload = (event) => {
                setUrl(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
        setUrl(e.target.value)
        console.log('3', e.target.value)
    }
    const handlepdf = () => {
        if (!url) {
            alert('Please Select an Image First');
            return;
        }
        const doc = new jsPDF('p', 'mm', 'a4');
        doc.text("Hello worl", 10, 10);
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.addImage(url, 'JPEG', 0, 0, pageWidth, pageHeight)
        doc.save('Example.pdf');
    }
    return (
        <section>
            <div className='container mx-auto'>
                <div>
                    <h2>Chooce Your Image</h2>
                    <input onChange={handleChange} type="file" placeholder='..' />
                </div>
                <button onClick={() => handlepdf()} className='bg-green-400 px-10 py-3 rounded-2xl cursor-pointer'>Click Here</button>
            </div>
        </section>
    )
}

export default ImageToPdf
