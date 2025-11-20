import { useEffect } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../Redux/Slices/AuthSlice";

const HomeLayout = ({ children }) => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout(){
    // .....
    dispatch(logout());
    navigate('/login');
  }
  useEffect(() => {
    // if(!authState.isLoggedIn ) navigate('/login');
  }, []);
  

  return (
    <div>
      <div className=" ">
        <div className="drawer absolute left-0 top-0">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content w-full  text-start">
            {/* Page content here */}
            <label htmlFor="my-drawer-1">
              <BsFillMenuButtonWideFill
                size={"32px"}
                className="cursor-pointer mt-4"
              />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-1"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>View all Tickets</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li className="absolute bottom-4 w-2/3 ">
                <div className="w-full flex items-center justify-center gap-10">
                  {!authState.isLoggedIn ? (
                    <>
                      <Link to='/login'>
                        <button className="btn btn-primary font-semibold text-white rounded-md">
                          login
                        </button>
                      </Link>

                      <Link to='/signup'>
                        <button className="btn btn-secondary rounded-md font-semibold ">
                          signup
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                        <button onClick={handleLogout} className="btn btn-primary font-semibold text-white rounded-md">
                          logout
                        </button>

                      <Link>
                        <button className="btn btn-secondary rounded-md font-semibold ">
                          profile
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  ">
        <div className=" w-3/4 ">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
