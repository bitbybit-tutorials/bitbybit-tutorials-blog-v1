import Link from "next/link";

export default function CustomLink({ as, href }: any) {
  return (
    <>
      <Link as={as} href={href}>
        <a>Lalala</a>
      </Link>
      <style jsx>
        {`
          a {
            color: tomato;
          }
        `}
      </style>
    </>
  );
}
