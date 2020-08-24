import React from "react";
import Styles from "./ArrayVisualizerElement.module.sass";

function ArrayVisualizerElement({ isActive, height, width }) {
  return (
    <div
      className={`${Styles["array-visualizer__element"]} ${
        isActive && Styles["array-visualizer__element--active"]
      }`}
      style={{ height: `${height}%`, width: `${width}%` }}
    >
      &nbsp;
    </div>
  );
}

export default ArrayVisualizerElement;
