import { Albert_Sans } from "next/font/google";

const inter = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main
      className={`mx-auto flex min-h-screen max-w-sm flex-col items-center justify-between border border-black ${inter.className}`}
    >
      kiln collective &trade;
    </main>
  );
}
