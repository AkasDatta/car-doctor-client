import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setBookings(data));
    }, [url]);
      
    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleConfirm = id => {
        const proceed = confirm('Are you sure you want to update?');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: 'confirm'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    alert('Updated successfully');
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = "confirm"
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
        }
    }

    return (
        <div>
            <h1 className="text-5xl mb-6 text-center text-orange-600 font-bold">Your bookings: {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => <BookingRow
                                key={booking._id} 
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRow>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
