import { useRouter } from "next/router";
import { Button } from "reactstrap";

export default function BackPage() {
  const router = useRouter();

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          let _log = router.back();
        }}
      >
        Back
      </Button>
    </>
  );
}
