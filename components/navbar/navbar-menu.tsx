import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavbarMenu() {
    return (
        <div className="
            bg-secondary-400 
            hover:bg-secondary-300 
            hover:cursor-pointer 
            w-16 h-16 
            flex items-center justify-center">
            <FontAwesomeIcon icon={faBars} color="white" className="w-4"/>
        </div>
    )
}