import React from "react";
import Stars from "@/components/Stars";
import Image from "next/image";
import { avatars } from "@/constants";
import { cn } from "@/lib/utils";

export default function AvatarRatings({ className }: { className?: string }) {
  return (
    <div className={cn("avatar-ratings-1", className)}>
      <div className="avatar-ratings-2">
        {avatars.map((avatar, index) => (
          <div className="avatar-ratings-3" key={index}>
            <Image
              key={avatar.src}
              src={avatar.src}
              alt={avatar.alt}
              fill
              className="avatar-ratings-4"
            />
          </div>
        ))}
      </div>

      <div className="avatar-ratings-5">
        <Stars count={5} />

        <p className="avatar-ratings-6">200+ developers joined already</p>
      </div>
    </div>
  );
}
