import React, { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Context
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

// Icons
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";

// Utils
import { GET_ALL_CONTACTS_ROUTE } from "@/utils/ApiRoutes";

// Components
import ChatListItem from "./ChatListItem";

function ContactsList() {
  const [{}, dispatch] = useStateProvider();
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const {
          data: { users },
        } = await axios.get(GET_ALL_CONTACTS_ROUTE);
        setAllContacts(users);
      } catch (err) {
        console.log(err);
      }
    };
    getContacts();
  }, []);
  return (
    <div className="h-full flex flex-col">
      <div className="h-16 flex items-end px-4 py-5">
        <div className="flex items-center gap-12 text-white">
          <BiArrowBack
            className="cursor-pointer text-xl"
            onClick={() =>
              dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE })
            }
          />
          <span>New Chat</span>
        </div>
      </div>
      <div className="bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar px-1">
        <div className="flex py-3 items-center gap-3 h-14">
          <div
            className="bg-panel-header-background flex items-center gap-3 px-3 py-1 rounded-lg 
        mx-4 flex-grow"
          >
            <div>
              <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-l" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search Contacts"
                className="bg-transparent text-sm focus:outline-none text-white w-full"
              />
            </div>
          </div>
        </div>
        {Object.entries(allContacts).map(([initialLetter, userList]) => (
          <div key={Date.now() + initialLetter}>
            <div className="text-teal-light pl-10 py-5">{initialLetter}</div>
            {userList.map((contact) => (
              <ChatListItem
                key={contact.id}
                data={contact}
                isContactsPage={true}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsList;
