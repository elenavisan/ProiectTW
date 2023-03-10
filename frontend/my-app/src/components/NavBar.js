import './navbar.css';
import { Link, useMatch,useResolvedPath} from 'react-router-dom';
import { useImperativeHandle } from 'react';
export default function NavBar(){
    return <nav className="nav">
    <Link to="/" className="site-title">Food Waste App</Link>
    <ul>
    <CustomLink to="/Friends">Friends</CustomLink>
    <CustomLink to="/MyFridge">My fridge</CustomLink>
    </ul>
    </nav>
}

function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive=useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}
