import NavTop from "../../components";
import Link from "next/link";

export default function AccountPage() {
  return (
    <>
      <NavTop />
      <div>
        <Link href="/account/login">
          <a active>Login</a>
        </Link>
      </div>
      <div>
        <Link href="/account/register">
          <a>Sign Up</a>
        </Link>
      </div>
    </>
  );
}
