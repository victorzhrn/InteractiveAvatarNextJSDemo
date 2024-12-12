"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import InteractiveAvatar from "@/components/InteractiveAvatar";

export default function LiveAvatarPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const avatarId = params.avatar_id as string;
  const personality = searchParams.get('personality');

  useEffect(() => {
    if (personality) {
      localStorage.setItem(`avatar-personality-${avatarId}`, personality);
    }
  }, [avatarId, personality]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300">
      <div className="w-[900px] flex flex-col items-start justify-start gap-5 mx-auto pt-4 pb-20">
        <div className="w-full">
          <InteractiveAvatar 
            initialAvatarId={avatarId} 
            autoStartVoiceMode={true} 
          />
        </div>
      </div>
    </div>
  );
} 