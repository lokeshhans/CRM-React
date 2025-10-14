function Signup() {
  return (
    <div className="flex bg-amber-50 h-[90vh]">
        <div className="m-auto bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-5">Signup</h1>
            <form className="flex flex-col gap-5">
                <input type="text" placeholder="Username" className="border border-gray-300 p-2 rounded"/>
                <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded"/>
                <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded"/>
                <details className="dropdown pb-8">
                    <summary className="btn text-blue-50 flex w-full ">User Type</summary>
                    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-full mt-2 ">
                      <li>
                        <a href="">Customer</a>
                      </li>
                      <li>
                        <a href="">admin</a>
                      </li>
                    </ul>
                </details>
                <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">Signup</button>
            </form>
        </div>
    </div>
  );
}

export default Signup;