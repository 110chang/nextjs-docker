import Image from "next/image";
import imageSrc from '@/../public/lachlan-donald-eaTHXNIUsYM-unsplash.jpg'

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Home</h1>
      <Image src={imageSrc} alt="" />
    </main>
  );
}
