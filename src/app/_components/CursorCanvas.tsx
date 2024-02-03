"use client"
import Cursor from "./Cursor";
import { COLORS } from "@/constants";
import useLiveCursors from "@/hooks/useLiveCursors";

export default function CursorCanvas() {
  const cursors = useLiveCursors();
  return (
    <>
      {cursors.map(({ x, y, connectionId }) => (
        <Cursor
          key={connectionId}
          color={COLORS[connectionId % COLORS.length]}
          x={x}
          y={y}
        />
      ))}
    </>
  );
}