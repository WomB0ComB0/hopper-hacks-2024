"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../../liveblocks.config";
import { LiveObject } from "@liveblocks/client";

export default function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider
      id="my-room-name"
      initialPresence={{
        cursor: null,
      }}
      initialStorage={{
        session: new LiveObject(),
      }}
    >
      {children}
    </RoomProvider>
  );
}