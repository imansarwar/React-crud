import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Aboutus',
    path: '/about',
    icon: <IoIcons.IoMdBook />,
    cName: 'nav-text'
  },
  {
      title: 'Contact',
      path:'/contact',
      icon: <IoIcons.IoMdContact/>,
      cName:'nav-text'
  },
  {
    title: 'Signin',
    path: '/signin',
    icon: <IoIcons.IoMdLogIn />, 
    cName: 'nav-text'
  },
  {
    title: 'Signup',
    path: '/signup',
    icon: <IoIcons.IoMdKey />, 
    cName: 'nav-text'
  },


//   {
//     title: 'Students',
//     path: '/students',
//     icon: <IoIcons.IoMdPeople />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Teachers',
//     path: '/Teachers',
//     icon: <IoIcons.IoMdPeople />,
//     cName: 'nav-text'
//   },
  
];
