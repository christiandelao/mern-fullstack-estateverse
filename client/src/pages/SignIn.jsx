import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SignIn() {
const [formData, setFormData] = useState({});
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const handleChange = (e) =>{
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    });
}

const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        setLoading(true);
        const res = await fetch ("/api/auth/signin", {
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (data.success === false){
            setLoading(false);
            setError(data.message);
            return;
        }
        setLoading(false);
        setError(null);
        navigate('/');
        
    } catch (error) {
        setLoading(false);
        setError(error.message);
    }
}; 
console.log(formData);
return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type="text" placeholder="email" id="email" className='border p-3 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder="password" id="password" className='border p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' onChange={handleChange}>
        {loading ? 'Loading...': 'Sign In'}
        </button>
        </form>
        <div className='flex gap-2 mt-5'>
            <p>Dont have an account?
                <Link to={'/sign-up'}>
                    <span className='text-blue-700'> Sign Up</span>
                </Link>
            </p>
        </div>
        {error && <p className='text-red-500 mt-5 text-center'>{error}</p>}
    </div>
)
}
