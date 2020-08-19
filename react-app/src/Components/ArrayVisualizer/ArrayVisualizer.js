import React, { useState, useEffect } from 'react';
import Styles from './ArrayVisualizer.module.sass';
import ArrayVisualizerElement from '../ArrayVisualizerElement/ArrayVisualizerElement';
import bubbleSort from '../../Utilities/SortingUtil/BubbleSort';
import mergeSort from '../../Utilities/SortingUtil/MergeSort';
import { arrayMove } from '../../Utilities/ArrayUtil/ArrayUtil';

const generateArray = (lenght, range) => {
    return Array.from(Array(lenght)).map(e => Math.round(Math.random() * (range.max - range.min) + range.min));
}

const nextStep = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.forEach(element => {
        newArray = arrayMove(newArray, element.index, element.newIndex);
    });

    return newArray;
}

const createElements = (array, currentStep, range, lenght) => {
    const arrayElements = array.map((e, i) => {
        return (
            <ArrayVisualizerElement isActive={currentStep.elements.find(e => e.index === i)} height={(e / range.max) * 100} width={(1 / lenght) * 100} key={i} />
        );
    });
    return arrayElements;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

function ArrayVisualizer({ lenght, range }) {

    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState({ elements: [], isChange: false });
    const [finalArray, setFinalArray] = useState([]);

    var arrayElements = createElements(array, currentStep, range, lenght);

    useEffect(() => {
        const randomArray = generateArray(lenght, range);
        setArray(randomArray);
        console.log("array", randomArray);
        // const merge = mergeSort(randomArray, 0, (randomArray.length - 1));
        // const sort = randomArray.sort((a, b) => a - b)
        // console.log("merge", merge);

        const bubbleSorted = mergeSort(randomArray, 0, (randomArray.length - 1));
        setFinalArray(bubbleSorted.newArray);
        setSteps(bubbleSorted.steps);
    }, []);

    useEffect(() => {
        arrayElements = createElements(array, currentStep, range, lenght);
    }, [currentStep, array]);

    const handleStartAnimation = async () => {
        var oldArray = array;
        console.log(steps, array);
        for (const step of steps) {
            setCurrentStep(step);
            const newArray = nextStep(step, oldArray)
            setArray(newArray);
            oldArray = newArray;
            await delay(10);
        }
        setCurrentStep({ elements: [], isChange: false });
        setSteps([]);
    }

    return (
        <div className={Styles['array-visualizer']}>
            {arrayElements}
            <div onClick={() => handleStartAnimation()}>start</div>
        </div>
    );
}

export default ArrayVisualizer;