import { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <progress className="progress progress-warning w-56 bg-white"></progress>
            </div>
        );
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivateRoute;
