import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Happy, Energy, Nerve, Life } from "@/lib/api/user/bars";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";

interface BarsCardProps {
    title: string
    Bars: Happy | Energy | Nerve | Life
    color?: string
    icon: React.ReactNode
}

export default async function BarsCard( props: BarsCardProps) {

    const totalMinutes = Math.floor(props.Bars.full_time / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return (
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardAction>{props.icon}</CardAction>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            <span className="font-bold text-xl">{props.Bars.current}</span> / <span className="text-muted-foreground">{props.Bars.maximum}</span>

          </p>
          <Progress
            value={props.Bars.current / props.Bars.maximum * 100}
          />
          <p className="text-sm text-muted-foreground mt-2">
            {" "}
            + {props.Bars.increment} / {Math.floor(props.Bars.interval / 60)}{" "}
            mins
          </p>
        </CardContent>
        <CardFooter className={cn(`border-${props.color}-500`)} hidden={totalMinutes === 0}>
          {totalMinutes < 60 ? (
            <p>Full in: {totalMinutes}m</p>
          ) : (
            <p>
              Full in: {hours}h {minutes}m
            </p>
          )}
        </CardFooter>
      </Card>
    );
}