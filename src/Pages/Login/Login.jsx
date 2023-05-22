import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/Authprovider';
const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-gray-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <div className="card-body">
                    <h1 className="text-3xl text-black font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered bg-gray-200 text-black " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered text-black bg-gray-200" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600 hover:bg-orange-800 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-black my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/signup"> Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;