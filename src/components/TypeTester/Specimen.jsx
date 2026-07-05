import React from "react";

import SingleView from "./views/SingleView";
import ParagraphView from "./views/ParagraphView";
import WaterfallView from "./views/WaterfallView";
import GridView from "./views/GridView";

const views = {
  single: SingleView,
  paragraph: ParagraphView,
  waterfall: WaterfallView,
  grid: GridView,
};
// TODO: change to arrow function for consistency with other components
export default function Specimen({ state }) {
  const View = views[state.view];

  return (
    <div>
      <label>Output</label>
      <View state={state} />
    </div>
  );
}
