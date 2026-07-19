"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { getStatusForHour } from "@/lib/time-status";

function getNYParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const hourFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    hour: "numeric",
    hour12: false,
  });
  return {
    time: formatter.format(date),
    hour: parseInt(hourFormatter.format(date), 10),
  };
}

export default function TimePill() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    const timeout = setTimeout(update, 0);
    const interval = setInterval(update, 30_000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const parts = now ? getNYParts(now) : null;

  return (
    <Link
      href={site.aboutUrl}
      data-cursor-hover
      data-cursor-label="What I do all day"
      className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2"
    >
      <span className="h-2 w-2 rounded-full bg-[#0A2978]" aria-hidden="true" />
      {parts ? (
        <>
          <span className="font-mono text-sm text-[#161616]">{parts.time}</span>
          <span className="text-sm text-[#6b6960]">
            {getStatusForHour(parts.hour)}
          </span>
        </>
      ) : (
        <span className="text-sm text-transparent select-none">
          10:00 PM Currently sleeping
        </span>
      )}
    </Link>
  );
}
