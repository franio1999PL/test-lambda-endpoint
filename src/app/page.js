import axios from 'axios'

export const revalidate = 20;
export default async function Home() {
  const data = await axios.get('https://zkvagdvmx7.execute-api.us-east-1.amazonaws.com/prod/test')

  return (
    <>
      <div className='w-full h-screen bg-slate-900'>
        <div className='flex flex-col justify-center items-center w-full h-full text-slate-100'>
          <p>
            Response test:
          </p>
          <p>{data && data.data.message}</p>
          <p className='text-green-500'>{data && data.data.code}</p>
        </div>
      </div>
    </>
  )
}
