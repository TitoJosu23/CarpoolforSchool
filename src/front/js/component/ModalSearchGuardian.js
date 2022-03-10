import React, { useState } from "react";

export const ModalSearchGuardian = () => {
  const [opened, setOpened] = useState(false);
  return opened ? (
    <div>
      <label for="site-search">Search a Guardian</label>
      <input type="search" id="site-search" name="q" />

      <button>Search</button>
      <div>
        <button type="button" onClick={() => setOpened(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    <button type="button" onClick={() => setOpened(true)}>
      Open
    </button>
  );
};
