import React, { useState, useEffect } from 'react';
import Styles from './ArraySortingController.module.sass';
import ArrayVisualizer from '../ArrayVisualizer/ArrayVisualizer';
import bubbleSort from '../../Utilities/SortingUtil/BubbleSort';
import mergeSort from '../../Utilities/SortingUtil/MergeSort';
import quickSort from '../../Utilities/SortingUtil/QuickSort';
import { arrayMove } from '../../Utilities/ArrayUtil/ArrayUtil';

const generateArray = (lenght, range) => {
    return Array.from(Array(lenght)).map(e => {
        return {
            value: Math.round(Math.random() * (range.max - range.min) + range.min),
            isActive: false
        }
    });
}

const nextStep = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.forEach(element => {
        newArray[element.index].isActive = true
        newArray = arrayMove(newArray, element.index, element.newIndex);
    });

    return newArray;
}

const deactivate = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.forEach(element => {
        newArray[element.newIndex].isActive = false
    });

    return newArray;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

function ArraySortingController({ lenght, range }) {

    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [currentStep, setCurrentStep] = useState({ elements: [], isChange: false });
    const [finalArray, setFinalArray] = useState([]);

    useEffect(() => {
        const randomArray = generateArray(lenght, range);
        setArray(randomArray);
        // console.log("array", randomArray);
        // const merge = mergeSort(randomArray, 0, (randomArray.length - 1));
        // const sort = randomArray.sort((a, b) => a - b)
        // console.log("merge", merge);

        // const sortedArray = bubbleSort(randomArray);
        const sortedArray = mergeSort(randomArray, 0, (randomArray.length - 1));
        // const sortedArray = quickSort(randomArray, 0, (randomArray.length - 1));
        console.log("sorted", sortedArray);
        setFinalArray(sortedArray.newArray);
        setSteps(sortedArray.steps);
    }, []);

    const handleStartAnimation = async () => {
        if (!sorting) {
            setSorting(true);
            var oldArray = array;
            console.log(steps, array);
            for (const step of steps) {
                setCurrentStep(step);
                var newArray = nextStep(step, oldArray)
                setArray(newArray);

                await delay(0);

                newArray = deactivate(step, newArray);
                setArray(newArray)
                oldArray = newArray;
            }
            setCurrentStep({ elements: [], isChange: false });
            setSteps([]);
        }
    }

    return (
        <div className={Styles['array-sorting-controller']}>
            <div onClick={() => handleStartAnimation()}>start</div>
            <ArrayVisualizer startingArray={array} range={range} lenght={lenght} />
        </div>
    );
}

export default ArraySortingController;