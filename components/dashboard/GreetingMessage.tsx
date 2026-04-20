import { isSuccess } from "@/lib/api/errors/errors";
import getUserBasic from "@/lib/api/user/basic";
import getUserTimestamp from "@/lib/api/user/timestamp";
import { Skeleton } from "../ui/skeleton";

export default async function GreetingMessage() {

function getGreeting(): string {
  const greetings = [
    "Welcome back",
    "Ready to cause chaos",
    "Time to make some moves",
    "Let's get it",
    "Back in action",
    "The streets are waiting",
    "Ready for another day",
    "What's the play today",
    "Time to run it up",
    "Let's cook",
    "Ready to rumble",
    "Game time",
    "Back to business",
    "Let's make it happen",
    "Time to grind",
    "Another day, another dollar",
    "Let's get this bread",
    "Ready to dominate",
    "The city's yours",
    "Let's shake things up",
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}


  const userName = await getUserBasic();
  const timestamp = await getUserTimestamp();

  // ✅ Early return bei Error
  if (!isSuccess(userName) || !isSuccess(timestamp)) {
    return (
      <section>
        <Skeleton className="w-48 h-8 mb-2" />
        <Skeleton className="w-32 h-6" />
      </section>
    );
  }

  // ✅ Ab hier sind BEIDE guaranteed success!
  return (
    <section>
      <h2 className="text-lg font-bold">{getGreeting()}, {userName.data.profile.name}</h2>
      <p className="text-sm text-muted-foreground">
        {new Date(timestamp.data.timestamp * 1000).toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "UTC",
        })}{" "}
        TCT
      </p>
    </section>
  );
}
