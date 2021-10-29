import NavTop from "../../components";
import BackPage from "../../components/Back";
import Link from "next/link";

export default function AccountPage() {
  return (
    <>
      <NavTop />
      <BackPage />
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
      <div>
        <Link href="/account/user">
          <a>User Profile</a>
        </Link>
      </div>
    </>
  );
}
