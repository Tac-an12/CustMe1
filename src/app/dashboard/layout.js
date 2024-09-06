'use client';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button } from '@mui/material';
import { Menu, Notifications, Dashboard, Chat, ShoppingCart, DesignServices, Store, Logout } from '@mui/icons-material';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`flex-shrink-0 ${sidebarOpen ? 'w-1/5' : 'w-16'} transition-all bg-blue-500 text-white flex flex-col items-center py-4 overflow-y-auto`}
        style={{ maxHeight: '100vh' }} // Keep sidebar height 100% of the viewport
      >
        <Avatar
          alt="Ivan Camus"
         src="https://i.ytimg.com/vi/N7W-J2jN9Mg/maxresdefault.jpg"
          sx={{ width: 80, height: 80 }}
          className={`transition-all ${sidebarOpen ? 'block' : 'hidden'}`}
        />
        {sidebarOpen && (
          <>
            <p className="mt-4 text-xl">Ivan Camus</p>
            <p className="text-sm opacity-70">User</p>
          </>
        )}

        <div className="mt-8 w-full">
          <SidebarLink icon={<Dashboard />} label="Dashboard" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<Chat />} label="Chats" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<ShoppingCart />} label="My Purchases" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<DesignServices />} label="Designer" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<Store />} label="Printing Shops" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<Logout/>} label="Logout" sidebarOpen={sidebarOpen} />
        </div>

     
      </div>

      <div className="flex flex-col w-full overflow-auto">
        <AppBar position="static">
          <Toolbar className="flex justify-between">
            <Typography variant="h6" component="div">
              CustMe
            </Typography>
            <div>
              <IconButton color="inherit">
                <Notifications />
              </IconButton>
              <IconButton color="inherit" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        
        <main className="p-6 bg-gray-100 flex-grow h-full overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, label, sidebarOpen }) => (
  <div className="py-3 px-6 hover:bg-blue-600 cursor-pointer flex items-center space-x-2 w-full text-center justify-start">
    <div>{icon}</div>
    {sidebarOpen && <span>{label}</span>}
  </div>
);

export default Layout;
