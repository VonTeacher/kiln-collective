import { getSortedMembersData } from "@/lib/members";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface HomeProps {
  allMembersData: Member[];
}

interface Member {
  firstName: string;
}

const Home = (props: HomeProps) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${albertSans.className}`}
    >
      Kiln Collective index.tsx &trade;
    </main>
  );
};

export const getStaticProps = async () => {
  const allMembersData = getSortedMembersData();
  return {
    props: {
      allMembersData,
    },
  };
};

export default Home;
