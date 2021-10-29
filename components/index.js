import Link from "next/link";
import { Nav, NavItem } from "reactstrap";

export default function NavTop() {
  return (
    <>
      <Nav fill>
        <NavItem>
          <Link href={"/"}>
            <a active> Home </a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/category">
            <a active>Categories</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/viewbag">
            <a active>Viewbag</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/help">
            <a active>Help</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/account">
            <a active>Account</a>
          </Link>
        </NavItem>
      </Nav>
    </>
  );
}
