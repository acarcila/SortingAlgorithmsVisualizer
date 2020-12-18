import React from "react";
import Styles from "./ArrayForm.module.sass";
import { Form, Button, Container } from "react-bootstrap";

function ArrayForm({
    formData: { length, isRamp, minRange, maxRange, sortingAlgorithm, speed },
    handleInputChange,
    handleShuffle,
}) {
    return (
        <div className={`d-flex flex-row text-white ${Styles["form--array"]}`}>
            <Container className="d-flex flex-row col-md-12 p-2 m-0 justify-content-around align-items-center">
                <Form className="d-flex flex-row flex-wrap col-md-12 p-0 m-0 align-items-center">
                    <Form.Group className="d-flex flex-row flex-wrap col-md-6 p-0 m-0 my-2 justify-content-between align-items-center">
                        <Form.Group className="d-flex flex-column col-md-4 p-1 m-0 align-items-start justify-content-center">
                            <Form.Label className="small">Speed</Form.Label>
                            <Form.Control
                                type="number"
                                name="length"
                                placeholder="Length"
                                value={length}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="col-md-5 p-2 m-0 d-flex flex-column align-items-start justify-content-start">
                            <Form.Label className="small">Range</Form.Label>
                            <Form.Group className="col-md-12 p-0 m-0 d-flex flex-row align-items-center">
                                <Form.Control
                                    className="col-md-6"
                                    type="number"
                                    name="minRange"
                                    placeholder="Min"
                                    value={minRange}
                                    onChange={handleInputChange}
                                />
                                <Form.Label className="p-1 m-0 col-md-0">-</Form.Label>
                                <Form.Control
                                    className="col-md-6"
                                    type="number"
                                    name="maxRange"
                                    placeholder="Max"
                                    value={maxRange}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group className="d-flex col-md-3 p-1 m-0 align-items-center justify-content-center">
                            <Form.Check
                                type="checkbox"
                                label="Ramp"
                                name="isRamp"
                                checked={Boolean(isRamp)}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="d-flex flex-row col-md-5 p-0 m-0 my-2 justify-content-between align-items-center">
                        <Form.Control
                            className="col-md-6"
                            as="select"
                            custom
                            name="sortingAlgorithm"
                            value={sortingAlgorithm}
                            onChange={handleInputChange}
                        >
                            <option value="BUBBLE_SORT">Bubble sort</option>
                            <option value="MERGE_SORT">Merge sort</option>
                            <option value="QUICK_SORT">Quick sort</option>
                        </Form.Control>
                        <Form.Group className="col-md-6 m-0 d-flex flex-column align-items-start">
                            <Form.Label className="small">Speed</Form.Label>
                            <Form.Control
                                type="range"
                                name="speed"
                                value={speed}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form.Group>
                    <Button className="col-md-1 text-center p-1" onClick={handleShuffle}>Shuffle</Button>
                </Form>
            </Container>
        </div>
    );
}

export default ArrayForm;
