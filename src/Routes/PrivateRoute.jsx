import { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

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

    return <Navigate to="/login" replace />;
};

export default PrivateRoute;
