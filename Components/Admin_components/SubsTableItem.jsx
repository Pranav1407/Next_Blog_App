import React from 'react'

const SubsTableItem = ({email , date , id , deleteEmail}) => {

    const emailDate = new Date(date);

  return (
    <tr className='bg-white border-b text-left'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email ? email : 'No email found'}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
        <td className='px-6 py-4 cursor-pointer' onClick={() => deleteEmail(id)}>X</td>
    </tr>
  )
}

export default SubsTableItem