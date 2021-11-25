import React, { useEffect, useState } from 'react';
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from "@heroicons/react/outline";


function ChannelSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //ToDo: fetch channels
    } catch (error) {
      setQuery('');
    }
  }

  const onSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);

  }

  return (
    <div className="channel-search__container">
      <div className="channel-seacrh__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon className="h-8" />
          <input className="channel-search__input__text" 
            placeholder="seacrh" 
            type="text" value={query} 
            onChange={onSearch}
          />
        </div>
      </div>
    </div>
  )
}

export default ChannelSearch
