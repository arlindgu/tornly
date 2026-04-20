import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getUserBattlestats, { BattleStat } from "@/lib/api/user/battlestats";
import { isSuccess } from "@/lib/api/errors/errors";

export default async function BattlestatsCard() {
  const battlestats = await getUserBattlestats();

  if (!isSuccess(battlestats)) {
    return <div>Error loading battlestats</div>;
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Battle Stats</CardTitle>
        <CardDescription>Overview of your battle performance</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Battlestat
          battlestat={battlestats.data.battlestats.strength}
          label="Strength"
          total={battlestats.data.battlestats.total}
        />
        <Battlestat
          battlestat={battlestats.data.battlestats.defense}
          label="Defense"
          total={battlestats.data.battlestats.total}
        />
        <Battlestat
          battlestat={battlestats.data.battlestats.speed}
          label="Speed"
          total={battlestats.data.battlestats.total}
        />
        <Battlestat
          battlestat={battlestats.data.battlestats.dexterity}
          label="Dexterity"
          total={battlestats.data.battlestats.total}
        />
      </CardContent>
    </Card>
  );
}

// ✅ Props Interface: erwartet ein BattleStat Objekt
interface BattlestatProps {
  battlestat: BattleStat; // ✅ Ein einzelner BattleStat
  label: string;
  total?: number;
}

export function Battlestat({ battlestat, label, total }: BattlestatProps) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">{label}</p>
      <Progress value={(battlestat.value / (total || 1)) * 100} className="mb-2" />
      <p className="inline-flex flex-col">
        <span>
          {(
            battlestat.value *
            (battlestat.modifier / 100 + 1)
          ).toLocaleString()}
        </span>
        <span className="text-muted-foreground">
          {battlestat.value.toLocaleString()}
          {battlestat.modifier !== 0 && (
            <span
              className={`ml-2 text-xs font-medium ${
                battlestat.modifier > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {battlestat.modifier > 0
                ? `+${battlestat.modifier}`
                : battlestat.modifier}
            </span>
          )}
        </span>
      </p>
    </div>
  );
}
