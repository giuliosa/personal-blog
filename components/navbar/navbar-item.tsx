export default function NavbarItem({ children }) {
    return (
        <li className="font-bold uppercase hover:text-secondary-300 hover:cursor-pointer">
            {children}
        </li>
    )
}