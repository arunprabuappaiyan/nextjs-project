import { useRouter } from "next/router";
import BackPage from "../../../components/Back";
import { LISTOFITEMS } from "../../../components/ListOfItems";

export default function ItemView() {
  const router = useRouter();

  let product = LISTOFITEMS.find((item, index) => {
    return router.query.id == item.id;
  });

  if (product === undefined) {
    return <>User not found</>;
  }

  return (
    <>
      <BackPage />
      Product ID {router.query.id}
      {JSON.stringify(product, 0, 2)}
    </>
  );
}
