import Link from "next/link";
import React from "react";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Zainab Tameem</p>
      <p>
        <Link href="https://github.com/ZainabTameem/cprg306-assignment" target="_blank">
          GitHub: ZainabTameem/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}