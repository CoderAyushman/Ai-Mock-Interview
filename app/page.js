"use client";
import { Button } from "@/components/ui/button";

// import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "./dashboard/_components/Header";
// import { to } from "./../.next/static/chunks/main-app";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const onPress = () => {
    router.push("/dashboard");
  };
  return (
    <div>
      <h2>Welcome to Ai-mock-interview</h2>
      <Button onClick={onPress}>Hello</Button>
    </div>
  );
}
