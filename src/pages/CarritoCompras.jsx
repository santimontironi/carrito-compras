import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"


export default function CarritoCompras() {

  const {listaCompras,aumentarCantidad,disminuirCantidad,eliminarCompra} = useContext(CarritoContext)

  function calcularCompra(){
    return listaCompras.reduce((total,item) => total +  item.price * item.cantidad,0).toFixed(2)
  }

  return (
    <div className="container p-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td className="d-flex gap-3">
                <button className="btn btn-warning" onClick={() => disminuirCantidad(item.id)}>-</button>
                <p className="fs-5">{item.cantidad}</p>
                <button className="btn btn-success" onClick={() => aumentarCantidad(item.id)}>+</button>
              </td>
              <td><button type="button" className="btn btn-danger" onClick={() => eliminarCompra(item.id)} >Remove</button></td>
            </tr>
          ))}

          <tr>
            <td><b>TOTAL</b></td>
            <td></td>
            <td></td>
            <td className="fs-4">USD {calcularCompra()}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="container-fluid">
        <button className="btn btn-primary w-100 fs-4">Buy now</button>
      </div>
    </div>
  )
}
