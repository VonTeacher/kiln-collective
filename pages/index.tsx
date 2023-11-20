import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${albertSans.className}`}
    >
      kiln collective &trade;
    </main>
  );
}
