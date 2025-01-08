"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const Shorten = () => {

    const [url, seturl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = async () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setShorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='mx-auto max-w-lg bg-purple-100 p-5 rounded-lg flex flex-col gap-5 my-5'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-5'>
                <input className='px-4 py-2' type="text" placeholder='Enter your URL (eg:- https://example.com)' onChange={e => { seturl(e.target.value) }} />
                <input className='px-4 py-2' type="text" placeholder='Enter preffered short URL (eg:- adansdadjapopaojpd)' onChange={e => { setShorturl(e.target.value) }} />
                <button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold hover:underline text-white' onClick={generate}>Shorten</button>
            </div>
            {generated && <> <span className='font-bold text-lg'>Your link :- </span> <code> <Link className='bg-purple-200 p-2 rounded-lg font-bold text-lg hover:underline' target='_blank' href={generated}>{generated}</Link> </code> </>}
        </div>
    )
}

export default Shorten