import { ProductosContext } from "./ProductosContext"
import { useState, useEffect } from "react"

export default function ProductosProvider({ children }) {

    const [productos, setProductos] = useState([])


    async function fetchProductos() {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProductos(data)
        } catch (error) {
            console.log("Ha ocurrido un error: ", error)
        }
    }

    useEffect(() => {
        fetchProductos()
    }, [])  //array de dependencias vacío [] como segundo argumento de useEffect asegura que el efecto solo se ejecute una vez, cuando el componente se renderiza por primera vez.

    return (
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}
