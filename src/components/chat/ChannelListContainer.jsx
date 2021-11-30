import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "../chat";
import { ChatIcon, LogoutIcon } from "@heroicons/react/solid";


const cookies = new Cookies();
const Sidebar = ({logout}) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <ChatIcon className="h-8" />
      </div>
    </div>

    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner" onClick={logout}>
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
  const logout =()=>{    
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullname");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");
    cookies.remove("avatarURL");
    cookies.remove("email");

    window.location.reload()
  }
  return (
    <>
      <Sidebar logout ={logout} />
      <div className="channel-list__list__wrapper">
        <OrganizationHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(PreviewProps) => (
            <TeamChannelPreview {...PreviewProps} type="team" />
          )}
        />

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(PreviewProps) => (
            <TeamChannelPreview {...PreviewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
