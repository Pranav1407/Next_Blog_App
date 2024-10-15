'use client'
import SubsTableItem from '@/Components/Admin_components/SubsTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Page = () => {

  const [emails,setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    setEmails(response.data.emails);
  }

  const deleteEmail = async (id) => {
    const response = await axios.delete('/api/email',{
      params:{
        id:id
      }
    })
    if(response.data.success)
    {
      toast.success(response.data.msg);
      fetchEmails();
    }
    else
    {
      toast.error('Subscription removal failed')
    }
  }

  useEffect(() => {
    fetchEmails();
  },[]);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
        <h1>All subscriptions</h1>
        <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar_hide'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-3'>Email</th>
                <th scope='col' className='px-6 py-3 hidden sm:block'>Date</th>
                <th scope='col' className='px-6 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((item,index) => {
                return <SubsTableItem key={index} email={item.email} date={item.date} id={item._id} deleteEmail={deleteEmail} />
              })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Page
