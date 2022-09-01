import React, { useState } from 'react'
import '../layout.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Badge } from 'antd'
function Layout({ children }) {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    // Menu for User

    const userMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-8-line'
        },
        {
            name: 'Appointments',
            path: '/appointments',
            icon: 'ri-file-list-3-line'
        },
        {
            name: 'Apply Doctor',
            path: '/apply-doctor',
            icon: 'ri-hospital-line'
        },
        {
            name: 'Profile',
            path: '/profile',
            icon: 'ri-profile-fill'
        },
    ];

    // Menu for admin
    const adminMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-8-line'
        },
        {
            name: 'Users',
            path: '/admin/userslist',
            icon: 'ri-user-line',

        },
        {
            name: 'Doctors',
            path: '/admin/doctorslist',
            icon: 'ri-user-star-line',

        },
        {
            name: 'Profile',
            path: '/profile',
            icon: 'ri-profile-fill'
        },

    ];

    // Menu for Doctor

    const doctorMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-8-line'
        },
        {
            name: 'Appointments',
            path: '/appointments',
            icon: 'ri-file-list-3-line'
        },
        {
            name: 'Profile',
            path: `/doctor/profile/${user?._id}`,
            icon: 'ri-profile-fill'
        },
    ];

    const menuToBeRender = user?.isAdmin ? adminMenu : user?.isdoctor?doctorMenu:userMenu;
    return (
        <div className='main'>
            <div className="d-flex  layout">
                <div className='sidebar'>
                    <div className="sidebar-header">
                        <h1 className='logo'>SH</h1>
                    </div>

                    <div className="menu">
                        {
                            menuToBeRender.map((menu) => {
                                const isActive = location.pathname === menu.path
                                return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                                    <i className={menu.icon}></i>
                                    {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                                </div>
                            })
                        }
                        <div className='d-flex menu-item' onClick={() => {
                            localStorage.clear();
                            navigate('/login');
                        }}>
                            <i className='ri-logout-box-line'></i>
                            {!collapsed && <Link to='/login'>Logout</Link>}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        {collapsed ? (
                            <i
                                className="ri-menu-2-fill header-action-icon"
                                onClick={() => setCollapsed(false)}
                            ></i>
                        ) : (
                            <i
                                className="ri-close-fill header-action-icon"
                                onClick={() => setCollapsed(true)}
                            ></i>
                        )}

                        <div className="d-flex align-items-center px-4">
                            <Badge count={user?.unseenNotifications.length} onClick={()=>{
                                navigate('/notifications')
                            }}>
                                <i className="ri-notification-line header-action-icon px-3"></i>
                            </Badge>
                            <Link className='anchor mx-3' to='/profile'>{user?.name}</Link>
                        </div>
                    </div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Layout