import Banner from "components/Banner"
import { Children } from "react"
import { Outlet } from "react-router-dom"

const DefaultPage = ({ children }) => {
    return (
        <main>
            <Banner />
            {/* Carregar conteúdo das paginas filhas da DefaultPage lá em routs.js */}
            <Outlet />
            {children}
        </main>
    )
}

export default DefaultPage