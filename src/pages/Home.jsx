import React, { useState } from 'react';
import ActorGrid from '../actors/ActorGrid';
import CustomRadio from '../CustomRadio';
import MainPageLayout from '../MainPageLayout';
import { getApiData } from '../misc/apiFetch';
import { useLastQuery } from '../misc/custom-hooks';
import ShowGrid from '../show/ShowGrid';
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from './Home.styled';

function Home() {
  const [searchOptions, setSearchOption] = useState('shows');
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const isShowsSearch = searchOptions === 'shows';

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=men
    getApiData(`/search/${searchOptions}?q=${input}`).then(result => {
      setResults(result);
    });
  };
  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  const radioChange = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder="search for something"
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={radioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={radioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
