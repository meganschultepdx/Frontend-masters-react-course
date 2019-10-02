import React, { useState } from "react";
import { UPCS } from "whereeverwearepullingthefrom";

// input field component that will update state with the value entered in the form input field
// input inside of label and on Blur are for accessibility
const InputField = () => {
  const [upc, setUpc] = useState("");

  return (
    <div className="input-field">
      <form>
        <label htmlFor="inputField">
          ENTER UPC
          <input
            id="inputField"
            value={upc}
            placeholder=""
            key={upc}
            onChange={e => setUpc(e.target.value)}
            onBlur={e => setUpc(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};
