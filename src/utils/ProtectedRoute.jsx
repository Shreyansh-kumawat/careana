import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom'

const protectedRoutes = ({ children }) => {
    const isAdmin = useSelector(state => state.auth.isAdmin)
    return isAdmin ? children : <Navigate to='/admin' />

};

export default protectedRoutes;