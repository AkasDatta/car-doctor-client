
const BookingRow = ({booking, handleDelete, handleConfirm}) => {
    const {_id, service, date, price, img, status} = booking;

    return (
        <tr>
        <th className="bg-gray-900">
        <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-active btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </th>
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {img && <img src={img} />}
                </div>
            </div>
        </td>
        <td className="text-white">
            {service}
        </td>
        <td className="text-white">{date}</td>
        <td className="text-white">${price}</td>
        <th>
        {
            status === 'confirm' ? <span className="font-bold text-orange-600">Confirmed</span> :
            <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
        }
        </th>
    </tr>
    );
};

export default BookingRow;