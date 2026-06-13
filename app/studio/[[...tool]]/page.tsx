"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  // Tambahkan properti basePath="/studio" di dalam komponen NextStudio
  return <NextStudio config={config} basePath="/studio" />;
}