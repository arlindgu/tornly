import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import getUserIcons, { Icon } from "@/lib/api/user/icons";
import getTornLogtypes from "@/lib/api/torn/logtypes";
import getTornLogcategories from "@/lib/api/torn/logcategories";

export default async function StatusCard() {
    const userStatus = await getUserIcons();

    if (!userStatus) {

    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
                {(() => {
                    const icons = userStatus?.data?.icons ?? [];

                    const withTimestamp = icons
                        .filter((icon) => icon.until != null)
                        .sort((a, b) => (a.until ?? 0) - (b.until ?? 0));

                    return (
                        <>
                            {withTimestamp.map((icon) => (
                                <StatusItem key={icon.id} icon={icon} />
                            ))}
                        </>
                    );
                })()}
            </CardContent>
        </Card>
    );
}

export function StatusItem({ icon }: { icon: Icon }) {
    return (
      <div className="flex flex-row justify-between items-center py-2 first:border-t-0 border-t">
        <div>
          <p className="font-bold">{icon.title}</p>
        </div>

        {icon.until && (
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
            {new Date(icon.until * 1000).toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            <Clock size={16} />
          </p>
        )}
      </div>
    );
}