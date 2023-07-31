"use client";
import React, { useState } from 'react'
import { paginate } from './helper/pagination';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Pagination = (items: any) => {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 30;
    const paginatedPosts1 = paginate(items, currentPage, pageSize);
    const onPageChange = (page: any) => {
        setCurrentPage(page);
        switch (page) {
            case 1:
                return router.push('?limit=30&skip=0');
            case 2:
                return router.push('?limit=30&skip=30');
            case 3:
                return router.push('?limit=30&skip=60');
            case 4:
                return router.push('?limit=30&skip=90');
            case 5:
                return router.push('?limit=30&skip=120');
            default:
                router.push('?limit=30&skip=0');
        }
    };
    const pagesCount = Math.ceil(items.items.total / pageSize); // 100/10
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div>
            <div className='container min-h-full bg-white mt-20 p-2'>
                <h1 className='font-bold text-2xl'>Todo list</h1>
                <div className='h-[2px] w-full bg-stone-200 rounded-xl mt-4'></div>
                <div className='grid grid-cols-4 auto-rows-fr gap-4 mt-14'>
                    {paginatedPosts1.map((items: any, index: any) => {
                        return (
                            <Link
                                href={`/home/${++index}`}
                                key={index}>
                                <div className='h-full mb-1 p-1 border-[1px] rounded-md break-word hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer'>
                                    {items?.todo}
                                </div>
                            </Link>
                        )
                    })
                    }
                </div>
                <div className="flex justify-center">
                    {pages.map((page) => (
                        <button
                            key={page}
                            className={
                                page === currentPage ? "bg-gray-300 w-10 h-14 rounded-md mt-10 mr-1 " : "bg-green-500 w-10 h-14 rounded-md mt-10 mr-1 hover:bg-green-600"
                            }
                            onClick={() => onPageChange(page)}
                        >
                            {page}

                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Pagination
