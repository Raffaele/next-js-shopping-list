"use client";

import Head from "next/head";
import { useEffect } from "react";

export default function ShopNotFound() {
  useEffect(() => {
    document.title = "Shop Not Found";
  }, []);
  return (
    <>
      <Head>
        <title>Shop not found</title>
      </Head>
      <div>
        <h2 className="text-center">Oops! Shop not found</h2>
      </div>
    </>
  );
}
