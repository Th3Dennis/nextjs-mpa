import ResponsiveAppBar from "./navbar";

export default function Header({ children }) {
    return (
        <>
        <ResponsiveAppBar/>
        {children}
        </>
    )
}