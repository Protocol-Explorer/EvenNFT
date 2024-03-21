import Image from "next/image";
import { Inter } from "next/font/google";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ActionButton from "@/components/ActionButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const account = useAccount()
  const router = useRouter()

  useEffect(() => {
    if(!account.address){
      console.log("no address redirect home")
      router.push("/")
    }
  },[account.address, router])
  
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full flex justify-end p-4">
        <ConnectButton />
      </div>
      <main
        className={`flex flex-1 flex-col items-center p-24 ${inter.className}`}
      >
        <h1>My Events</h1>
        <p>This is the place for events</p>
        <p>Show any events here</p>
        <ActionButton label="Create Event" />
      </main>
    </div>
  );
}
