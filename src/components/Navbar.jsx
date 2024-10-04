import Badge from "@mui/material/Badge"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Link } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext"
import { useContext } from "react"

export default function Navbar() {

    const {listaCompras} = useContext(CarritoContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg p-4 border-bottom border-3 border-warning bg-dark" id="nav">
                <div className="container-fluid">
                    <Link to='/'>
                        <button className="navbar-brand fs-1 border-0 text-warning fw-bold bg-transparent">Only Shop</button>
                    </Link>
                    <ul className="navbar-nav me-auto mb-lg-0 d-flex align-center">
                        <li className="nav-item d-flex align-center">
                            <Link to='/'>
                                <button className="border-0 text-light bg-transparent fs-5">Our products</button>
                            </Link>
                        </li>
                    </ul>
                    <Link to='/mycart'>
                        <Badge badgeContent={listaCompras.length} color="secondary">
                            <ShoppingCartIcon className="text-light fs-2" />
                        </Badge>
                    </Link>
                </div>
            </nav>
        </>
    )
}
