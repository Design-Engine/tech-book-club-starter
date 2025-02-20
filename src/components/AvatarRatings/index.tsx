import React from "react";
import Stars from "@/components/Stars";
import Image from "next/image";
import { avatars } from "@/constants";
import { cn } from "@/lib/utils";

export default function AvatarRatings({ className }: { className?: string }) {
  return (
    <div className={cn("avatar-1", className)}>
      <div className="avatar-2">
        {avatars.map((avatar, index) => (
          <div className="avatar-3" key={index}>
            <Image
              key={avatar.src}
              src={avatar.src}
              alt={avatar.alt}
              fill
              className="avatar-4"
            />
          </div>
        ))}
      </div>

      <div className="avatar-5">
        <Stars count={5} />

        <p className="avatar-6">200+ developers joined already</p>
      </div>
    </div>
  );
}
