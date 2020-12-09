import React from "react";
import Styles from "./ArrayVisualizer.module.sass";
import ArrayVisualizerElement from "../ArrayVisualizerElement/ArrayVisualizerElement";

const createElements = (array, lenght, range) => {
    const arrayElements = array.map((e, i) => {
        return (
            <ArrayVisualizerElement
                isActive={e.isActive}
                height={(e.value / range.max) * 100}
                width={(1 / lenght) * 100}
                key={i}
            />
        );
    });
    return arrayElements;
};

function ArrayVisualizer({ startingArray, lenght, range }) {
    const arrayElements = createElements(startingArray, lenght, range);
    return <div className={Styles["array-visualizer"]}>{arrayElements}</div>;
}

export default ArrayVisualizer;
