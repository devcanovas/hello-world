import Banner from "components/Banner"
import { Outlet } from "react-router-dom"

const DefaultPage = () => {
    return (
        <main>
            <Banner />
            {/* Carregar conteúdo das paginas filhas da DefaultPage lá em routs.js */}
            <Outlet />
        </main>
    )
}

export default DefaultPage