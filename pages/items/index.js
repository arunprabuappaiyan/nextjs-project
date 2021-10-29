import NavTop from "../../components";
import BackPage from "../../components/Back";
import { LISTOFITEMS } from "../../components/ListOfItems";
import Link from "next/link";

export default function Items() {
  return (
    <>
      <NavTop />
      <BackPage />

      <ul>
        {LISTOFITEMS.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link href={"/" + item.id + "/p?subcate=yyyy/p"}>
                  <a> {item.name}</a>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
