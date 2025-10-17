import Navbar from "@/components/system/navbar";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
}