function Login() {
  return (
    <div className='flex  h-[90vh]  '>
        <div className='m-auto bg-white p-10 rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold mb-5'>Login</h1>
            <form className='flex flex-col gap-5'>
                <input type="text" placeholder='Username' className='border border-gray-300 p-2 rounded'/>
                <input type="password" placeholder='Password' className='border border-gray-300 p-2 rounded'/>
                <button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login