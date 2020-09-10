import React, { useState } from "react";
import Pick from "../components/pick";
import SelectTime from "../components/selectTime";

function Index() {
  const [isFixed, fixTime] = useState(false);

  if (isFixed) {
    return <Pick />;
  } else {
    return <SelectTime fixTime={fixTime} />;
  }
}

export default Index;
