import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
      
    try {
      const response = await axiosInstance.post('/api/auth/login', data);
      localStorage.setItem('token', response.data.token); 
      setSuccess(response.data?.message);
      setError(null);
      toast.success('Login successful!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
   
      // Delay navigation to ensure toast is shown
      setTimeout(() => {
        // Clear form fields
        setEmail('');
        setPassword('');
  
        // Redirect to home
        navigate('/home');
      }, 2000); 

    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setSuccess(null);

      toast.error("Error!! Please enter proper Credentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };


  return (
    <>
      <div className=" bg-[url('/assets/bgg.jpg')] bg-cover h-[100vh] ">


        <section className=" dark:bg-gray-900 py-32 md:py-0 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div className="w-full border-2 mix-blend-multiply rounded-xl shadow-2xl shadow-slate-700 md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
                </h1>
               
                <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-100 border-2 border-gray-500 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} autoComplete='true'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-100 border-2 border-gray-500 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  <div className='flex flex-col justify-center items-center gap-4'>
                   <button type="submit" className=" md:w-1/4  text-black border-2 border-slate-400 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                    <p className="text-sm dark:text-gray-400">
                      Don’t have an account yet? <a href="/signup" className="font-semibold text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                  </div>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  {success && <p style={{ color: 'green' }}>{success}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Login
