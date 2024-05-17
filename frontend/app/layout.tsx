import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DashboardProvider } from "@/context/dashboard-context";

interface IRootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
    const { children } = props;

    return (
        <html lang="en">
            <head></head>
            <body>
                <DashboardProvider>
                    {children}
                    <ToastContainer />
                </DashboardProvider>
                <div id="modal" />
            </body>
        </html>
    );
}
