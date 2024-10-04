import { useContext } from "react"
import Card from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export default function Productos() {

  const { productos } = useContext(ProductosContext)

  const {agregarCompra, eliminarCompra} = useContext(CarritoContext)

  function handleAgregar(compra){
    agregarCompra(compra)
  }

  function handleEliminarCompra(id){
    eliminarCompra(id)
  }

  return (
    <div className="contenedorCompras p-5">
      <h1 className="text-success">Our products</h1>
      <hr />
      <div className="productos">
        {productos.map(producto => (
          <Card key={producto.id}
            imagen={producto.image}
            descripcion={producto.description}
            titulo={producto.title}
            precio={producto.price}
            handleAgregar={() => handleAgregar(producto)}
            handleEliminarCompra={() => handleEliminarCompra(producto.id)}
          ></Card>
        ))}
      </div>

    </div>
  )
}
