import React from "react";

// Next
import Image from "next/image";

function Empty() {
  return (
    <div className="border-conversation-border border-l w-full bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center">
      <Image
        src="/whatsapp.gif"
        alt="Whastapp"
        width={100}
        height={100}
        priority={true}
      />
    </div>
  );
}

export default Empty;
