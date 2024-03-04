import SkeletonCard from "@/components/SkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    </main>
  );
};

export default loading;
