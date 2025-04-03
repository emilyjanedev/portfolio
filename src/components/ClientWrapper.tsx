"use client";

import { useEffect } from "react";
import { initLogRocket } from "@/lib/logrocket";

export default function ClientWrapper() {
  useEffect(() => {
    initLogRocket();
  }, []);

  return null;
}
