import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList,height='100px',width='100px',backgroundColor='red'){
    const heightInput=boxList.getByLabelText("Height")
    const widthInput=boxList.getByLabelText("Width")
    const backgroundColorInput=boxList.getByLabelText("Background Color")
    const btn =boxList.queryByText("Add Box")
    fireEvent.change(heightInput,{target: {value:'100px',}})
    fireEvent.change(widthInput,{target: {value:'100px',}})
    fireEvent.change(backgroundColorInput,{target: {value:'red',}})
    fireEvent.click(btn)
}

it("renders without crashing", function(){
    render(<BoxList />)
})
it("matches snapshot",function(){
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})
it("should add new item",function(){
    const boxList = render(<BoxList />);
    expect(boxList.queryByText("Remove redBox")).not.toBeInTheDocument();
    addBox(boxList)
    const removeButton = boxList.getByText("Remove redBox");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: red;
  `);
})
it("should remove box",function(){
    const boxList = render(<BoxList />);
    addBox(boxList)
    const removeButton = boxList.getByText("Remove redBox");
    fireEvent.click(removeButton)
    expect(removeButton).not.toBeInTheDocument()
})