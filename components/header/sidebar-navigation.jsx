"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import navigation from "@/data/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";

const social = [
    { name: "GitHub", icon: "fab fa-github", color: "bg-dark", href: "https://github.com/shasan11" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", color: "linkedin-bg", href: "https://www.linkedin.com/in/shasan-dhakal/" },
    { name: "Email", icon: "far fa-envelope", color: "facebook-bg", href: "mailto:shasandhakal105@gmail.com" },
];

export default function SidebarNavigation() {
    const isSidebarActive = useSelector((state) => state.toggle.isSidebarActive);
    const dispatch = useDispatch();

    return (
        <div className={`ui-sidebar ${isSidebarActive ? "active" : ""}`}>
            <Sidebar>
                <button onClick={() => dispatch(toggleSidebar())} className="ui-sidebar-close">
                    <i className="fa fa-times"></i>
                </button>
                <Menu>
                    {navigation.map((item) => (
                        <MenuItem
                            key={item.path}
                            component={<Link href={item.path} />}
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                </Menu>

                <h5 className="text-white text-center mt-35 pb-1 d-inline-block ml-3">Connect</h5>
                <ul className="social social-bg text-center d-flex mt-10 ml-3">
                    {social.map((item) => (
                        <li key={item.name} className="mr-2 rotate-hover">
                            <Link className={`${item.color} text-center pr-0 text-white d-block transition-3 rotate`} href={item.href}>
                                <i className={item.icon} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </Sidebar>
        </div>
    );
}
