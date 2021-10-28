import Link from "next/link";
import NavTop from "../components";

export default function Category() {
  return (
    <>
      <NavTop />
      {/* <h2> Product 1 </h2>
      <h2> Product 2 </h2>
      <h2> Product 3 </h2> */}
      <div>
        <Link href="/items">
          <a>Product 1</a>
        </Link>
      </div>
      <div>
        <Link href="/items">
          <a>Product 2</a>
        </Link>
      </div>
    </>
  );
}
