"use client";

import { useEffect } from "react";
// import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
// import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";
// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
import Navbar from "@/components/layout/navbar/Navbar";
// import { BlockieAvatar } from "@/components/scaffold-eth";
// import { ProgressBar } from "@/components/scaffold-eth/ProgressBar";
// import { useNativeCurrencyPrice } from "@/hooks/scaffold-eth";
// import { useDarkMode } from "@/hooks/scaffold-eth/useDarkMode";
// import { useGlobalState } from "@/services/store/store";
import { wagmiConfig } from "@/services/web3/wagmiConfig";
// import { appChains } from "@/services/web3/wagmiConnectors";

const App = ({ children }: { children: React.ReactNode }) => {
  // const price = useNativeCurrencyPrice();
  // const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  // useEffect(() => {
  //   if (price > 0) {
  //     setNativeCurrencyPrice(price);
  //   }
  // }, [setNativeCurrencyPrice, price]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="relative flex flex-col flex-1">{children}</main>
        {/* <Footer /> */}
      </div>
      {/* <Toaster /> */}
    </>
  );
};

export const AppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <App>{children}</App>
      {/* <ProgressBar />
      <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
        theme={isDarkMode ? darkTheme() : lightTheme()}
      >
        <App>{children}</App>
      </RainbowKitProvider> */}
    </WagmiConfig>
  );
};
