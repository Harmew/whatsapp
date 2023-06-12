import React from "react";

// Context
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

// Icons
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";

// Components
import Avatar from "../common/Avatar";

function ChatListHeader() {
  const [{ userInfo }, dispatch] = useStateProvider();

  const handleAllContactsPage = () => {
    dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE });
  };

  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center">
      <div className="cursor-pointer">
        <Avatar type="sm" image={userInfo?.profileImage} as="image" />
      </div>
      <div className="flex gap-6">
        <BsFillChatLeftTextFill
          className="text-panel-header-icon cursor-pointer text-xl"
          title="New Chat"
          onClick={handleAllContactsPage}
        />
        <BsThreeDotsVertical
          className="text-panel-header-icon cursor-pointer text-xl"
          title="Menu"
        />
      </div>
    </div>
  );
}

export default ChatListHeader;
