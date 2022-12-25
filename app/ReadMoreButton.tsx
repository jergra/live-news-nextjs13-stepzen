'use client'

import Link from "next/link"

import { useRouter } from "next/navigation"

type Props = {
    article: Article
}

function ReadMoreButton({article}: Props) {
    const router = useRouter()

    const handleClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join('&')
            const url = `/article?${queryString}`
            console.log(url)
            router.push(url)
    }
  
    return (
        <button 
            //onClick={handleClick}
            className='flex justify-items-center items-center bg-orange-400 h-18 rounded-b-lg dark:text-gray-900 font-medium
                hover:bg-orange-500'
        >
            <div>
                <Link href={article.url} target='_blank'>
                    Read More
                </Link>
            </div>
        </button>
  )
}

export default ReadMoreButton