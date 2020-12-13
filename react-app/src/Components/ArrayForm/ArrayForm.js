import React from "react";
import Styles from "./ArrayForm.module.sass";
import { Form, Button, Container } from "react-bootstrap";

function ArrayForm({
    formData: { length, isRamp, minRange, maxRange, sortingAlgorithm, speed },
    handleInputChange,
    handleCustomize,
    handleShuffle,
}) {
    return (
        <div>
            <Container className="d-flex flex-column">
                <Form className="d-flex flex-row flex-wrap">
                    <Form.Group>
                        <Form.Group className="col-md-6">
                            <Form.Control
                                type="number"
                                name="length"
                                placeholder="Length"
                                value={length}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="col-md-6">
                            <Form.Check
                                type="checkbox"
                                label="Ramp"
                                name="isRamp"
                                // defaultChecked={false}
                                // value={isRamp}
                                checked={Boolean(isRamp)}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="col-md-6">
                            <Form.Label>Range</Form.Label>
                            <Form.Control
                                type="number"
                                name="minRange"
                                placeholder="Min"
                                value={minRange}
                                onChange={handleInputChange}
                            />
                            <Form.Label>-</Form.Label>
                            <Form.Control
                                type="number"
                                name="maxRange"
                                placeholder="Max"
                                value={maxRange}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button onClick={handleCustomize}>Customize</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
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
                        <Form.Group>
                            <Form.Label>Speed</Form.Label>
                            <Form.Control
                                type="range"
                                name="speed"
                                value={speed}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form.Group>
                    <Button onClick={handleShuffle}>Shuffle</Button>
                </Form>
            </Container>
        </div>
    );
}

export default ArrayForm;
