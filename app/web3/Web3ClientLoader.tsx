"use client";

import dynamic from "next/dynamic";

const Web3Client = dynamic(() => import("./Web3Client"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center py-20 opacity-60">
      Initialisation Web3…
    </div>
  ),
});

export default function Web3ClientLoader() {
  return <Web3Client />;
}
