import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import { ChatIcon, LogoutIcon } from "@heroicons/react/solid";

const Sidebar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <ChatIcon className="h-8" />
      </div>
    </div>

    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <LogoutIcon className="h-8" />
      </div>
    </div>
  </div>
);
const OrganizationHeader = () => (
  <div className="channerl-list__header">
    <p className="channel.list__header__text">SCU Forum</p>
  </div>
);
function ChannelListContainer() {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <OrganizationHeader />
        <ChannelSearch />
        <ChannelList filters={{}} 
          channelRenderFilterFn={()=>{}} 
          List={(listProps)=>(
          <TeamChannelList {...listProps} type="team"/>
        )}/>
      </div>
    </>
  );
}

export default ChannelListContainer;
