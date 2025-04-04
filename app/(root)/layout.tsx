import Navbar from "../components/Navbar"

export default function Layout({ children }: any) {

    return (
        
        <main className="font-work-sans">
            <Navbar/>
            {children}
        </main>
    );
}
