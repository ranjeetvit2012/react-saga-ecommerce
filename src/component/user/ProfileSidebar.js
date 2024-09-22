import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { HiOutlineMinusSm,HiUserCircle , HiOutlinePlusSm, HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

const ProfileSidebar = ()=>{
  const token = localStorage.getItem('getToken');
    return(
        <div class="p-4 md:p-2">
             <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
                <NavLink to="/dashboard">
                <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item> 
                </NavLink>
              
              <Sidebar.Collapse 
                icon={HiShoppingBag} 
                label="E-commerce"
                renderChevronIcon={(theme, open) => {
                  const IconComponent =  open ? HiOutlineMinusSm : HiOutlinePlusSm; 
                  return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />
                }}
              >
                

                <Sidebar.Item>
                <NavLink to="/product-add">
                  Product Add</NavLink></Sidebar.Item>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                <Sidebar.Item href="#">Shipping</Sidebar.Item>
              </Sidebar.Collapse>
              <NavLink to={`/profile/${token}`}>
              <Sidebar.Item  icon={HiUserCircle}>
                Profile
              </Sidebar.Item>
              </NavLink>
              <NavLink to="/">
              <Sidebar.Item  icon={HiShoppingBag}>
                Products List
              </Sidebar.Item>
              </NavLink>
              <NavLink to="/user-list">
              <Sidebar.Item  icon={HiUser}>
               User List
              </Sidebar.Item>
              </NavLink>
              
              <Sidebar.Item  icon={HiArrowSmRight}>
                Logout
              </Sidebar.Item>
              
             
              
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

            <Outlet/>
        </div>
    )
}


export default ProfileSidebar;