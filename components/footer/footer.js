import Link from "next/link";

export default function Footer({ children }) {
    return (
        <>
        <footer className="py-3 my-5">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <Link href={"/legal"}>
        <a className="nav-link px-2 text-muted">Legal</a></Link></li>
    </ul>
    <p className="text-center text-muted">© 2021 Dennis Miceli</p>
  </footer>
        </>
    )
}
