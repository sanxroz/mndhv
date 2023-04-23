import { useRouter } from "next/router";
import { useEffect } from "react";
import posthog from 'posthog-js';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home.html");
  }, []);

  return null;
}
