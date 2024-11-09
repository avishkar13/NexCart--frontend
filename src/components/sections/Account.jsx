import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Utility/Navbar';
import { toast } from 'react-toastify';

// Set Axios default base URL
axios.defaults.baseURL = 'https://nexcart-backend.vercel.app/api/auth';

const Account = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState('');
  const [user, setUser] = useState({ username: '', email: '' });
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
    
        setUser(response.data);
      } catch (error) {
        setMessage('Failed to load user data');
        setMessageType('error');
        console.error(error);
      }
    };

    const storedProfilePic = localStorage.getItem('profilePicture');
    if (storedProfilePic) {
      setProfilePicture(storedProfilePic);
    }
    fetchUserData();
  }, []);

  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      localStorage.setItem('profilePicture', reader.result);
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    toast.success('Profile Picture Updated!!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        '/change-password',
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setMessage(response.data.message);
      setMessageType('success');
      toast.success('Password Updated!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setOldPassword('');
      setNewPassword('');
    } catch (error) {
      setMessage('Password change failed. Please try again.');
      toast.error('Password change failed, Try again!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setMessageType('error');
      console.error(error);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = confirm("Do you want to delete your account?");
    
    // Proceed only if the user confirms
    if (!confirmed) return;
  
    try {
      const response = await axios.delete('/delete-account', { // Adjust API path if needed
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      
      setMessage(response.data.message);
      setMessageType('success');
      toast.success('Account Deleted!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.removeItem('token');
      navigate('/signup');
    } catch (error) {
      toast.error('Error in Account Deletion!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setMessage('Account deletion failed');
      setMessageType('error');
      console.error(error);
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <Navbar />
      <div className="account-container p-8 bg-slate-100 w-[90vw] lg:w-[70vw] mx-auto pt-24">
        <h2 className="text-3xl font-mono font-semibold text-center mb-6">Account Center</h2>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-medium mb-4">User Info</h3>
          <img
            src={profilePicture || "/src/assets/userdemo.webp"}
            alt="Profile"
            className="mt-4 mb-4 rounded-full h-40 w-40"
          />

          <h3 className="text-xl font-serif mb-2">Change Profile Picture</h3>
          <input
            type="file"
            className="w-[80%] md:w-[50%] p-2 mb-4 border border-gray-300 rounded-lg"
            onChange={handleProfilePicUpload}
          />

          <p className="flex gap-2"><strong>Username:</strong> {user.username}</p>
          <p className="flex gap-2 text-blue-800"><strong className="text-black">Email:</strong> {user.email}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-medium mb-4">Change Password</h3>
          <form onSubmit={handleChangePassword}>
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full md:w-[30vw] bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Change Password
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col">
          <h3 className="text-2xl font-medium mb-4">Delete Account</h3>
          <button
            onClick={handleDeleteAccount}
            className="w-full md:w-[30vw] bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
          >
            Delete Account
          </button>
          <button
            onClick={handleLogout}
            className="w-full md:w-[30vw] bg-slate-700 text-white mt-4 p-2 rounded-lg hover:bg-slate-800"
          >
            Logout
          </button>
        </div>

      </div>
    </>
  );
};

export default Account;
