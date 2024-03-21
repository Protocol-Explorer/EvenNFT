import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const account = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (account.address) {
      console.log("address detected redirect");
      router.push("/profile");
    }
  }, [account.address, router]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <main className="flex flex-col items-center justify-center px-4 py-12 text-center space-y-4 z-10">
        <h1 className="text-5xl font-bold">EvenNFT</h1>
        <p className="text-lg">The place where things happen on chain</p>

        <div className="w-full max-w-md mx-auto mt-8 relative">
          <Image
            src="/party.jpg"
            layout="responsive"
            width={600} 
            height={338}
            alt="party"
          />
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-blue-900 via-purple-900 to-transparent"></div>
      <div className="absolute top-4 right-4 z-20">
        <ConnectButton />
      </div>
    </div>
  );
}
