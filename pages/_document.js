import { Html, Head, Main, NextScript } from 'next/document'
import cookieCutter from 'cookie-cutter';

import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from 'react';

export default function Document() {
  const router = useRouter();

  

  useEffect(() => {
    if (!router.isReady) return;

    console.log(cookieCutter.get("session") + "e");

    
  }, [router]);

  return (
    <Html lang="en" className="">
      <Head />
      <body className="dark:bg-neutral-900 dark:text-neutral-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}