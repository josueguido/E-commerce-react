import Header from "./Header";
import Principal from "./Principal";
import Footer from "./Footer";
import { CarritoProvider } from "./CarritoContext"; // Importa el proveedor de contexto

function Layout() {
    return (
        <CarritoProvider> {/* Envuelve todo en el proveedor de contexto */}
            <Header />
            <main>
                <Principal />
            </main>
            <Footer />
        </CarritoProvider>
    );
}

export default Layout;


