import React, { useState, useRef } from "react";
import Styles from './App.module.sass';
import ArraySortingController from "./Components/ArraySortingController/ArraySortingController";
import ArrayForm from "./Components/ArrayForm/ArrayForm";
import ReproductorController from './Components/ReproductorController/ReproductorController';

const sortingAlgorithms = {
  MERGE_SORT: "MERGE_SORT",
  QUICK_SORT: "QUICK_SORT",
  BUBBLE_SORT: "BUBBLE_SORT",
};

function App() {
  const arrayController = useRef(null);
  const [arrayFormData, setArrayFormData] = useState({
    length: 100,
    isRamp: true,
    minRange: 1,
    maxRange: 10,
    sortingAlgorithm: sortingAlgorithms.MERGE_SORT,
    speed: 0,
  });

  const handleInputChange = (event) => {
    arrayController.current.handlePause();
    const value = (event.target.name === "isRamp") ? event.target.checked : event.target.value;
    setArrayFormData({
      ...arrayFormData,
      [event.target.name]: value,
    });
  };

  const handleShuffle = (event) => {
    arrayController.current.handlePause();
    arrayController.current.shuffleArray();
  };

  const handlePrevious = () => {
    arrayController.current.handlePause();
    arrayController.current.handlePreviousStep();
  };

  const handlePlayBackward = () => {
    arrayController.current.handlePlayBackward();
  };

  const handlePause = () => {
    arrayController.current.handlePause();
  };

  const handlePlayForward = () => {
    arrayController.current.handlePlayForward();
  };

  const handleNext = () => {
    arrayController.current.handlePause();
    arrayController.current.handleNextStep();
  };

  return (
    <div className={Styles["app"]}>
      <div className={Styles["array-form--container"]}>
        <ArrayForm
          formData={arrayFormData}
          handleInputChange={handleInputChange}
          handleShuffle={handleShuffle}
        />
      </div>
      <div className={Styles["array-reproductor"]}>
        <div className={Styles["array-sorting-controller--container"]}>
          <ArraySortingController
            ref={arrayController}
            length={parseInt(arrayFormData.length)}
            range={{ min: parseInt(arrayFormData.minRange), max: parseInt(arrayFormData.maxRange) }}
            isRamp={arrayFormData.isRamp}
            sortingAlgorithm={arrayFormData.sortingAlgorithm}
          />
        </div>
        <div className={Styles["reproductor-controller--container"]}>
          <ReproductorController
            handlePrevious={handlePrevious}
            handlePlayBackward={handlePlayBackward}
            handlePause={handlePause}
            handlePlayForward={handlePlayForward}
            handleNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
