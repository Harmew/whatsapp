import React from "react";

// Context
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

// Components
import Avatar from "../common/Avatar";

function ChatListItem({ data, isContactsPage = false }) {
  const [{ userInfo, currentChatUser }, dispatch] = useStateProvider();

  const handleContactClick = () => {
    // if(currentChatUser?.id === data?.id) {
    dispatch({
      type: reducerCases.CHANGE_CURRENT_CHAT_USER,
      user: { ...data },
    });
    dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE });
    // }
  };

  return (
    <div
      className={`flex cursor-pointer items-center hover:bg-background-default-hover`}
      onClick={handleContactClick}
    >
      <div className="min-w-fit px-5 pt-1 pb-1">
        <Avatar type="lg" image={data?.profilePicture} as="image" />
      </div>
      <div className="min-h-full flex flex-col justify-center mt-1 pr-2 w-full">
        <div className="flex justify-between">
          <div>
            <span className="text-white">{data?.name}</span>
          </div>
        </div>
        <div className="flex border-b border-conversation-border pb-3 pt-1 pe-2">
          <div className="flex justify-between w-full">
            <span className="text-secondary line-clamp-1 text-sm">
              {data?.about || "\u00A0"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
