import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Button, Menu } from "react-daisyui";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import NavbarElement from "./NavbarElement";

function NavbarComponent(args) {
    const dropdownRef = useRef(null);

    const handleNavLinkClick = () => {
        dropdownRef.current?.click();
    };

    return (
        <>

            <div className="z-50 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans fixed top-[0] bg-base-100">
                <Navbar >
                    <Navbar.Start>

                        <Logo link='/'>
                            <svg fill="currentColor"
                                className="fill-current mr-1" style={{ display: 'inline' }} xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" /></svg>
                            template-proj
                        </Logo>

                    </Navbar.Start>


                    <Navbar.Center className="hidden lg:flex ">

                        <Menu horizontal className="p-0">
                            <NavbarElement link='/contact' onClick={handleNavLinkClick}>
                                Contact
                            </NavbarElement>
                        </Menu>

                    </Navbar.Center>

                    <Navbar.End>
                        <ThemeToggle light='catppuccin-mocha' dark='retro' /> {/* coffe/luxury */}
                        <Button>Get started</Button>
                    </Navbar.End>


                </Navbar>


            </div>
            <Outlet />
        </>



    );
};

export default NavbarComponent;