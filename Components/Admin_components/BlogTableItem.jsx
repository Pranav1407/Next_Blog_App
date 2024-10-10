import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImg , title , author , date , deleteBlog , id}) => {

    const blogDate = new Date(date);

  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image src={authorImg ? authorImg : assets.profile_icon} width={40} height={40} />
            <p>{author ? author : 'No author found'}</p>
        </th>
        <td className='px-6 py-4'>
            {title ? title : 'No title found'}
        </td>
        <td className='px-6 py-4'>
            {blogDate.toDateString()}
        </td>
        <td className='px-6 py-4 cursor-pointer text-center' onClick={() => deleteBlog(id)} >
            X
        </td>
    </tr>
  )
}

export default BlogTableItem