import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export default function CarritoProvider({ children }) {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    function agregarCompra(compra) {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] AGREGAR COMPRA',
            payload: compra //se utiliza para pasar datos adicionales al reducer cuando se está ejecutando una acción. Cada vez que se ejecuta el dispatch, el payload contiene la información que el reducer necesita para actualizar el estado.
        }
        dispatch(action) //el dispatch es el que ejecuta el action.
    }

    function aumentarCantidad(id) {
        const action = {
            type: '[CARRITO] AUMENTAR CANTIDAD COMPRA',
            payload: id
        }
        dispatch(action)
    }

    function disminuirCantidad(id) {
        const action = {
            type: '[CARRITO] DISMINUIR CANTIDAD COMPRA',
            payload: id
        }
        dispatch(action)
    }

    function eliminarCompra(id) {
        const action = {
            type: '[CARRITO] ELIMINAR COMPRA',
            payload: id
        }
        dispatch(action)
    }

    function comprasReducer(state = initialState, action = {}) {
        switch (action.type) {
            case '[CARRITO] AGREGAR COMPRA':
                return [...state, action.payload]

            case '[CARRITO] AUMENTAR CANTIDAD COMPRA':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) return {...item,cantidad:cant}
                    return item
                })

            case '[CARRITO] DISMINUIR CANTIDAD COMPRA':
                return state.map(item => {
                    if (item.id === action.payload) {
                        const nuevaCantidad = item.cantidad - 1;
                        return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : item;
                    }
                    return item;
                });

            case '[CARRITO] ELIMINAR COMPRA':
                return state.filter(compra => compra.id !== action.payload)

            default:
                return state
        }
    }

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}
