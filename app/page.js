import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2→</Link>
        <Link href="/week-3">Go to Week 3→</Link>
        <Link href="/week-4">Go to Week 4→</Link>
        <Link href="/week-5">Go to Week 5→</Link>
        Go to Week 6→ Go to Week 7→ Go to Week 8→
      </p>
    </main>
  );
}
