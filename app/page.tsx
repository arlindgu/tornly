import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex flex-col justify-center items-start px-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-heading font-bold">
            The dashboard every Citizen needs, but doesn't deserve.
          </h1>
          <p>
            Built for the Torn City community, by the Torn City community.
          </p>
        </div>
        <div className="mt-4">
          <Button size="lg" asChild>
            <Link href="/login">
              Login
            </Link>
          </Button>
        </div>
        <div className="h-120 w-full border mt-40">

        </div>
      </section>
    </main>
  );
}
