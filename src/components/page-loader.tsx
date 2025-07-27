"use client";

import { Loader2 } from "lucide-react";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="text-lg font-medium text-muted-foreground">Please wait...</p>
      </div>
    </div>
  );
}
