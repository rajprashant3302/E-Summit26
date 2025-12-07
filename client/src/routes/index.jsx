import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Page';
import Register from '../pages/register/Page';
import Login from '../pages/login/Page'
import AuthLayouts from '../layout';
import AdminDashboard from '../pages/admin/AdminDashboard'
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Denied from '../components/Denied'
import Store from '../pages/store/Page'
import AdminNotifications from '../pages/admin/AdminNotifications';
import AdminUsers from '../pages/admin/AdminUsers';
import AdminUserDetails from '../pages/admin/AdminUserDetails';
import AdminManageEditors from '../pages/admin/AdminManageEditors';
import AdminCreateEditor from '../pages/admin/AdminCreateEditor';
import Payment from '../pages/event/Page';
import SuccessMessage from '../pages/event/SuccessMessage';
import ErrorMessage from '../pages/event/ErrorMessage';



const router = createBrowserRouter([
    {
        path:'/',
        element : <AuthLayouts> <App/></AuthLayouts> ,
        children : [
            {
                index: true,
                element : <Home />
            },
            {
                path: 'home',
                element : <Home />
            },
            {
                path:'register',
                element: <Register />,
            },
            {
                path : 'login',
                element : <Login />
            },
            {
                path: 'denied',
                element : <Denied/>
            },
            {
                path: 'store',
                element: <PrivateRoute><Store/></PrivateRoute>
            },
            {
                path: '/event/payment',
                element : <PrivateRoute><Payment/></PrivateRoute>
            },
            {
                path: '/event/success-message',
                element : <PrivateRoute><SuccessMessage/></PrivateRoute>
            },
            {
                path: '/event/error-message',
                element : <PrivateRoute><ErrorMessage/></PrivateRoute>
            },
            {
                path:'admin/dashboard',
                element:<AdminRoute><AdminDashboard/></AdminRoute>
            },
            {
                path : 'admin/notifications',
                element : <AdminRoute><AdminNotifications/></AdminRoute>
            },{
                path: 'admin/users',
                element : <AdminRoute><AdminUsers/></AdminRoute>
            },
            {
                path : '/admin/user/:id',
                element : <AdminRoute><AdminUserDetails/></AdminRoute>
            },{
                path : '/admin/editors',
                element : <AdminRoute><AdminManageEditors/></AdminRoute>
            },
            {
                path : '/admin/create-editor',
                element : <AdminRoute><AdminCreateEditor/></AdminRoute>
            }
        ]
    }
])


export default router;