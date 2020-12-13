import React, { useState, useRef } from "react";
import "./App.css";
import ArraySortingController from "./Components/ArraySortingController/ArraySortingController";
import ArrayForm from "./Components/ArrayForm/ArrayForm";
const sortingAlgorithms = {
  MERGE_SORT: "MERGE_SORT",
  QUICK_SORT: "QUICK_SORT",
  BUBBLE_SORT: "BUBBLE_SORT",
};

function App() {
  const arrayController = useRef(null);
  const [arrayFormData, setArrayFormData] = useState({
    length: 1,
    isRamp: false,
    minRange: 1,
    maxRange: 10,
    sortingAlgorithm: sortingAlgorithms.BUBBLE_SORT,
    speed: 0,
  });

  const handleInputChange = (event) => {
    const value = (event.target.name === "isRamp") ? event.target.checked : event.target.value;
    setArrayFormData({
      ...arrayFormData,
      [event.target.name]: value,
    });
  };

  const handleCustomize = (event) => { };

  const handleShuffle = (event) => { };

  const handlePlayClick = () => {
    // console.log(arrayController);
    arrayController.current.handlePlayAnimation(true);
    // arrayController.current.handleNextStep();
  };

  const handleNextClick = () => {
    // console.log(arrayController);
    arrayController.current.handlePlayAnimation(false);
    arrayController.current.handleNextStep();
  };

  const handlePreviousClick = () => {
    // console.log(arrayController);
    arrayController.current.handlePlayAnimation(false);
    arrayController.current.handlePreviousStep();
  };
  return (
    <div className="App">
      <ArrayForm
        formData={arrayFormData}
        handleInputChange={handleInputChange}
        handleCustomize={handleCustomize}
        handleShuffle={handleShuffle}
      />
      <ArraySortingController
        ref={arrayController}
        length={parseInt(arrayFormData.length)}
        range={{ min: parseInt(arrayFormData.minRange), max: parseInt(arrayFormData.maxRange) }}
        isRamp={arrayFormData.isRamp}
        sortingAlgorithm={arrayFormData.sortingAlgorithm}
      />
      <div onClick={handlePlayClick}>play</div>
      <div onClick={handleNextClick}>next</div>
      <div onClick={handlePreviousClick}>previous</div>
    </div>
  );
}

export default App;
