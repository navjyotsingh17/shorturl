import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold ${poppins.className}`}>
            The best URL shortner in the Market
          </p>
          <p className="mx-4 text-center">
            We are the most straightforward and easy to use URL shortner
            , trusted by millions of users worldwide. Shorten your links and track their performance with ease. Join us today and experience the difference!
          </p>
          <div className="flex gap-3">
            <Link href='/shorten'><button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold hover:underline text-white'>Try now</button></Link>
            <Link href='/github' target="_blank"><button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold hover:underline text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image alt="vector image" src={"/vector.webp"} fill={true} />
        </div>
      </section>
    </main>
  );
}
