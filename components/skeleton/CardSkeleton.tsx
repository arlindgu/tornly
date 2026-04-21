// components/BarsCardSkeleton.tsx
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function CardSkeleton() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <Skeleton className="h-6 w-24" /> {/* Title */}
        <Skeleton className="h-4 w-48" /> {/* Description */}
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
  );
}
