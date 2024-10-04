import { useState } from "react"
import '../styles/card.css'

export default function Card({ imagen, titulo, descripcion, precio, handleAgregar,  handleEliminarCompra }) {

  const [added, setAdded] = useState(false)

  function agregarAlCarrito() {
    handleAgregar()
    setAdded(true)
  }

  function quitarDelCarrito() {
    handleEliminarCompra()
    setAdded(false)
  }

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjetaImagen" />
      <div className="tarjetaContenido w-100 p-5">
        <h2 className="tarjetaTitulo">{titulo}</h2>
        <p className="tarjetaDescripcion">{descripcion}</p>
        <h2 className="tarjetaPrecio text-danger">{precio} usd</h2>
      </div>

      {added ?
        <button type="button"
          onClick={quitarDelCarrito}
          className="btnQuitarDelCarrito bg-danger text-light border-0">Quitar del carrito</button>
        :
        <button type="button"
          onClick={agregarAlCarrito}
          className="btnAgregarAlCarrito bg-success text-light border-0">Agregar al carrito</button>
      }

    </div>
  )
}
