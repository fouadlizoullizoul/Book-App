"use client"
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import {  useState } from "react";
import BackButton from "../../../components/BackButton";
import Spinner from "../../../components/Spinner";
const DeletePage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {id}=useParams();
  const handleDeleteBook=()=>{
    setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
      router.push('/')
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner/> :''}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
            <h3>Are You Sure You want to delete this book?</h3>
            <button onClick={handleDeleteBook} className="p-4 bg-red-600 text-white m-8 w-full">Yes,Delte it</button>
        </div>
    </div>
  )
}

export default DeletePage
