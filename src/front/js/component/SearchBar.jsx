import React from "react";
import styled from "styled-components";
import queryString from "query-string";
import { IoClose, IoSearch } from "react-icons/io5";
import { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { useRef } from "react";
import { Context } from "../store/appContext";
import { MoonLoader } from "react-spinners/MoonLoader";
import { GuardianLabel } from "../component/GuardianLabel.jsx";
import { UseDebounce } from "../component/UseDebounce.jsx";

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  overflow-y: auto;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const containerVariants = {
  expanded: {
    height: "30em",
  },
  collapsed: {
    height: "3.8em",
  },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

useEffect(() => {
  const qs = queryString.parse(location.hash);
  searchFunction(qs.keyword);
}, [store.guardians]);

const searchFunction = (keyword) => {
  console.log("Search function keyword: ", keyword);
  let filteredArray = store.guardians.filter((item) => {
    if (keyword == "" || keyword == undefined) {
      return item;
    } else if (item.first_name.toLowerCase().includes(keyword.toLowerCase())) {
      return item;
    }
  });
  setGuardInfo(filteredArray);
  props.func(filteredArray);
};

export const SearchBar = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { store, actions } = useContext(Context);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();

  const [guardInfo, setGuardInfo] = useState([]);

  const searchHash = (event) => {
    searchFunction(event);
    if (event == "") {
      // setGuardians(store.guardians);
      props.func(store.guardians);
    }
    location.hash = `keyword=${event}`;
  };
  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);

    setGuardInfo([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  return (
    <SearchBarContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <SearchInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          onFocus={expandContainer}
          ref={inputRef}
          onChange={(e) => {
            searchHash(e.target.value);
          }}
        />

        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={collapseContainer}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputContainer>

      <SearchContent>
        <GuardianLabel />
      </SearchContent>
    </SearchBarContainer>
  );
};
