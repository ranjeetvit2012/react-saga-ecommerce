
import { NavLink, Outlet } from "react-router-dom";
import { UserAuth } from "../../auth/Auth";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useSelector } from "react-redux";
const SidebarLayout = () => {
  const cartData = useSelector((state) => state?.cart);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const auth = UserAuth();
  const handleLogout = () => {
    auth.logout(null)
  }
  return (
    <div>

      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">

              <img className="h-20  w-auto" src="./kisspng-shopping-cart-computer-icons-online-shopping-clip-online-shop-5ac11205d8e469.5194885815226025018884.jpg" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-900">
              Product List
            </NavLink>

            {/* <NavLink to="/cart" className="text-sm font-semibold leading-6 text-gray-900">
              Cart
            </NavLink> */}
            {/* <NavLink to="/product-details" className="text-sm font-semibold leading-6 text-gray-900">
              Product Details
            </NavLink> */}

            {/* <NavLink to="/product-add" className="text-sm font-semibold leading-6 text-gray-900">
              ProductAdd
            </NavLink> */}
            <NavLink to="/profile/ranjeet" className="text-sm font-semibold leading-6 text-gray-900">
              Profile
            </NavLink>
            <NavLink to="/cart" className="text-sm font-semibold leading-6 text-gray-900">

              <span>{cartData?.cart?.length}
                <img className="h-5  w-5" src="./shopping_cart.png" alt="" />
              </span>
            </NavLink>

          </Popover.Group>
          {!auth.user ?
            <><div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <NavLink to="/register" className="text-sm font-semibold leading-6 text-gray-900">
                  Register <span aria-hidden="true">&rarr;</span>
                </NavLink>
              </div></>
            : <><div className="hidden lg:flex lg:flex-1 lg:justify-end" onClick={handleLogout}>
              <NavLink to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                Logout <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div></>}
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <NavLink to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <NavLink to="/register" className="text-sm font-semibold leading-6 text-gray-900">
                    Register <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container-fluid">

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <a class="navbar-brand mt-2 mt-lg-0" href="#">

            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {!auth.user ? <>
                <li class="nav-item">
                  <NavLink to="/login"
                    style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                      };
                    }}>Login</NavLink>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <NavLink to="/register" style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}>Register</NavLink>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <NavLink to="/card" style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}>
                    Card
                  </NavLink>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <NavLink to="/" style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}>
                    Product List
                  </NavLink>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                  <NavLink to="/product-details" style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}>
                    Product Details
                  </NavLink>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br></>

                : <><li class="nav-item">
                  <NavLink to="/dashboard"
                    style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                      };
                    }}>Dashboard</NavLink>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <NavLink to="/product-add" style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                      };
                    }}>
                      Product Add
                    </NavLink>
                  </li>

                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <NavLink to="/profile" style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                      };
                    }}>Profile</NavLink>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <NavLink style={({ isActive, isPending }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                      };
                    }} onClick={handleLogout}>Logout</NavLink>
                  </li></>}




            </ul>

          </div>



        </div>

      </nav> */}
      <Outlet />
    </div>
  )
}


export default SidebarLayout;