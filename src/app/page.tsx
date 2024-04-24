import path from "path";
import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";
import myImage from "@/../public/lachlan-donald-eaTHXNIUsYM-unsplash.jpg";

export default async function Home() {
  const file = await fs.readFile(
    path.resolve(
      __dirname,
      "../../../public/lachlan-donald-eaTHXNIUsYM-unsplash.jpg"
    )
  );
  const { base64 } = await getPlaiceholder(file);
  return (
    <main>
      <h1 className="text-4xl">Home</h1>
      <Image
        src={myImage}
        alt=""
        width={1291}
        height={807}
        placeholder="blur"
        blurDataURL={base64}
      />
    </main>
  );
}
