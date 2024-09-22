import { Navigate, useLocation } from 'react-router-dom'
import { UserAuth } from './Auth'

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const auth = UserAuth();

    if (!auth.user) {
        return <Navigate to="/" state={{ path: location.pathname }} />
    }
    return children
}

export default PrivateRoutes