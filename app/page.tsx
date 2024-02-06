import ConnectButton from "@/components/connect-button";
import { PaymentForm } from "@/components/payment-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Paraleln Polis košice
      </div>

      <div className="flex mt-10 flex-col">
        <ConnectButton />
        <PaymentForm />
      </div>

    </main>
  );
}
