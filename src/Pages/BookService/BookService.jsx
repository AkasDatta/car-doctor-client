import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

const BookService = () => {
    const service = useLoaderData();
    const {title, price, _id} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }
        console.log(order);
    }

    return (
        <div>
            <div>
            <h1 className="text-center text-3xl">Book Service: {title}</h1>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input type="text" placeholder="name" defaultValue={user?.displayName}
                        name="name" className="input input-bordered text-black bg-gray-200" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                                <span className="label-text text-black">Date</span>
                        </label>
                        <input type="date" 
                        name="date" className="input input-bordered text-black bg-gray-200" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="email" 
                        name="email" className="input input-bordered text-black bg-gray-200" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Due amount</span>
                        </label>
                        <input type="text" 
                        defaultValue={'$'+ price} className="input input-bordered text-black bg-gray-200" />
                    </div>
                </div>
                <div className="form-control my-6 grid-cols-1">
                        <input className="btn bg-orange-600 hover:bg-orange-800 text-white" type="submit" value="Order Confirm"/>
                    </div>
            </form>
            </div>
        </div>
    );
};

export default BookService;