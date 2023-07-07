'use client'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

interface User {
  first_name: string;
  last_name: string;
  avatar: Blob
  email: string;
}

export default function NavBar() {
  const { data, isLoading, isFetching } = useRetrieveUserQuery();
  const user: User | undefined = data;  // Aqui atribuímos o tipo

  return (
    <div className='flex justify-between text-slate-700'>
      <div className='py-11 px-20 font-bold text-5xl'>
        <h1>Bem vindo de volta!</h1>
      </div>
      <div className='flex py-11 px-20'>
        <div className='flex flex-col px-5'>
          <span className='font-bold text-3xl'>
            {user?.first_name}
          </span>
          <span className=''>
            {user?.last_name}
          </span>
        </div>
        <div className=" w-20 h-20 rounded-full bg-primary-color" />
      </div>
    </div>
  )
};