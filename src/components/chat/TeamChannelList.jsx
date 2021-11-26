import { DocumentAddIcon } from "@heroicons/react/outline";

function TeamChannelList({childern, error =false, loading, type}) {
  if(error) {
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-chanenel-list__message">
          There was an error loading the channels.
        </p>
      </div>
    ): null;
  }
  if(loading) {
    return (
      <div className="team-channel-list">
        <p className="team-chanenel-list__message loading">
        {
          type === 'team' ? 'Channels...' : 'Messages...'
        } loading...
        </p>
      </div>
    )
  }
  return (
    <div className="team-chanenel-list">
       <div className="team-chanenel-list__header">
         <p className="team-chanenel-list__header__title">
           {type=== 'team'? 'Channels': 'Direct Messages'}
         </p>
         {/*Button to add channel */}
       </div>
       {childern}
    </div>
  )
}

export default TeamChannelList
