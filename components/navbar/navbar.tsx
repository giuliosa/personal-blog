import NavbarItem from "./navbar-item";
import NavbarMenu from "./navbar-menu";

export default function Navbar() {
    return (
        <nav className="
            fixed 
            bottom-0 
            bg-primary-900 
            w-screen 
            flex flex-row justify-between items-center 
            text-primary-50">
            <div>
                Logo
            </div>

            <ul>
                <NavbarItem>Blog</NavbarItem>
            </ul>

            <NavbarMenu></NavbarMenu>
        </nav>
    )
}