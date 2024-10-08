import Link from "next/link";

export default function Sitemap() {
  return (
    <div className="w-full flex text-white bg-[#163c45] flex-col justify-center pt-48 pb-24 px-28">
      <h1 className="text-3xl font-bold">Sitemap for Pallhotellet</h1>
      <ul className="space-y-4 list-disc my-10">
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/">Hem</Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/tjanster/godshantering">
            Tjänster - Godshantering
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/tjanster/lagerhållning_inomhus">
            Tjänster - Lagerhållning inomhus
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/tjanster/ovrigt">
            Tjänster - ovrigt
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/tjanster/lagerhållning_utomhus">
            Tjänster - Lagerhållning utomhus
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/tjanster/hyra_av_förråd">
            {" "}
            Tjänster - Hyra av förråd
          </Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/kontakt">Kontakt</Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/logga_in">Logga in</Link>
        </li>
        <li className="text-lg ">
          <Link href="https://www.pallhotellet.com/offertförfrågan">
            Offertförfrågan
          </Link>
        </li>
      </ul>
    </div>
  );
}
