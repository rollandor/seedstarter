"use client";

import { WagmiConfig } from "wagmi";
import Navbar from "./Navbar/Navbar";
import { wagmiConfig } from "@/services/web3/wagmiConfig";
import { chains } from "@/services/web3/wagmiConfig";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Preloader from "./Preloader";

const App = ({ children }: { children: React.ReactNode; }) => {

  return (
    <>
      <div className="flex flex-col min-h-screen gap-4">
        <Navbar />
        <main className="relative flex flex-col flex-1">{children}</main>
        {/* <Footer /> */}
      </div>
      {/* <Toaster /> */}
    </>
  );
};

export const AppWithProviders = ({ children }: { children: React.ReactNode; }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Preloader />
        <App>{children}</App>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
