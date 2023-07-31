

import { Link } from 'react-router-dom'


const Signup = () => {
    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    

    
    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/4ce96108-1f99-4476-ba90-af8b26d471e7/IN-en-20230220-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-full'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form   className='w-full flex flex-col py-4'>
                                <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                                <input  className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                                    Sign In
                                </button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p>
                                        <input className='mr-2' type="checkbox" name="" id="" />
                                        Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-gray-600'>Already subscribed to Netflix?
                                    </span>{' '}
                                    <Link to='/login'>Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup