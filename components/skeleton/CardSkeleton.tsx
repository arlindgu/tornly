// components/BarsCardSkeleton.tsx
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function CardSkeleton() {
  return (
    <>
        <Skeleton className="h-6 w-24 mb-4" /> {/* Title */}
        <Skeleton className="h-4 w-12" />
    </>
  );
}
