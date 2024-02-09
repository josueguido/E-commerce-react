// Container.js
import Header from "./Header";
import Principal from "./Principal";
import Footer from "./Footer";

function Layout() {
    return ( 
        <>
        <Header></Header>
        <main>
            <Principal></Principal>
        </main>
        <Footer></Footer>
    </>
     );
}

export default Layout; 

