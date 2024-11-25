"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineAddBox } from 'react-icons/md'
import Spinner from './Spinner'
import BooksTable from './home/BooksTable'
import BooksCard from './home/BooksCard'
interface Book{
    _id:string;
    title:string;
    author:string;
    publishYear:number;
}
const Main = () => {
    const [books,setBooks]=useState<Book[]>([])
    const [loading,setLoading]=useState(false)
    const [showType,setShowType]=useState('table')

    useEffect(()=>{
        setLoading(true)
        axios.get<{data:Book[]}>('http://localhost:5555/books')
       .then((response)=>{
        console.log(response.data)
        setBooks(response.data.data)
        setLoading(false)
       })
       .catch((error)=>{
        console.log(error)
        setLoading(false)
       })
    },[])
  return (
    <div className='p-4'>
        <div className="flex justify-center items-center gap-x-4">
            <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                onClick={()=>setShowType('table')}
            >
                Table
            </button>
            <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
                onClick={()=>setShowType('card')}
            >
                Card
            </button>
        </div>
        <div className="flex justify-between items-center">
            <h1 className='text-3xl my-8'>Books List</h1>
            <Link href='/books/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl'/>
            </Link>
        </div>
        {loading ? (
            <Spinner/>
            ) : (
                showType === 'table' ? (<BooksTable  books={books}/>): (<BooksCard books={books}/>)   
            )
        }
    </div>
  )
}

export default Main
