// "use client";
import React from 'react'
import UpdateButton from './button';
export default async function index(props: any) {
  const { params } = props;
  const dataById = await (await fetch(`https://dummyjson.com/todos` + `/` + params.id)).json();
  return (
    <div className='container flex justify-center min-h-full bg-white mt-20 p-2'>
      <div className='w-[400px] h-full border-[1px] p-1 rounded-md break-word shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <p>{dataById.todo}</p>
        <UpdateButton data={dataById} />
       </div>
    </div>
  )
}
