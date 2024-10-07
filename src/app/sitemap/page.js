import Link from "next/link";

export default function Sitemap() {
  return (
    <div className="w-full flex flex-col justify-center py-44 px-28">
      <h1 className="text-3xl font-bold">Sitemap for Pallhotellet</h1>
      <ul className="space-y-4 list-disc my-10">
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/">Hem</Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/services/goods_handling">
            Tjänster - Godshantering
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/services/indoor_storage">
            Tjänster - Lagerhållning inomhus
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/services/miscellaneous">
            Tjänster - miscellaneous
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/services/outdoor_storage">
            Tjänster - Lagerhållning utomhus
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/services/storage_rent">
            {" "}
            Tjänster - Hyra av förråd
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/contact">Kontakt</Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/login">Logga in</Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/quotation">
            Offertförfrågan
          </Link>
        </li>
      </ul>
    </div>
  );
}
