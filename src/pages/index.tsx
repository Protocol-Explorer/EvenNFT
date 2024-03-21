import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const account = useAccount()
  const router = useRouter()
  console.log({ add: account.address })
  useEffect(() => {
    if(account.address){
      console.log("address detected redirect")
      router.push("/profile")
    }
  },[account.address, router])
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1>EvenNFT</h1>
      <p>The place where things happen but just on chain yo</p>
      <ConnectButton />
    </main>
  );
}
