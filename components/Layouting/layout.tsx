import React, { ReactNode } from 'react';
import Topbar from '../TopNav/topnav';

interface LayoutProps {
    children: ReactNode;
    //section: string;
}

function Layout( props: LayoutProps ) {
const { children, /*section*/ } = props; 
  return (
    <div className='screen'>
        <Topbar/>
            { children }
    </div>
  )
}

export default Layout