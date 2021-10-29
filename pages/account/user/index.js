import BackPage from "../../../components/Back";
import Link from "next/link";

export default function UserPage() {
  return (
    <>
      <BackPage />
      <div>
        <Link href="/account/user/address">Address Details</Link>
      </div>
      <div>
        <Link href="/account/user/bank">Bank Details</Link>
      </div>
    </>
  );
}
