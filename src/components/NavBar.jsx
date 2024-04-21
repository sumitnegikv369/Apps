import { Link } from "react-router-dom"
import {FaHome, FaScroll} from "react-icons/fa"

const NavBar = () => {
  return (
    <nav className="flex gap-2 text-xl my-9 mx-4 flex-col absolute left-0 text-center justify-center items-center">
        <Link className="text-teal-500/60 bg-black/20 p-4 rounded-full hover:bg-black/10" to="/"><FaHome/></Link>
        <Link className="text-teal-500/60 bg-black/20 p-4 px-4 rounded-full hover:bg-black/10" to="/ui"><FaScroll/></Link>
    </nav>
  )
}

export default NavBar