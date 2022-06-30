import React from "react"
import icon from "./images/sort.png"
import Button from "./Button"

export default class Navbar extends React.Component {
    render(){
        return (
            <nav className="nav--bar">
               
                <h1 className="nav--text">  <img src={icon} className="nav--icon" />Sorting Algorithm Visualizer</h1>
                <ul className="nav--buttons">
                    <Button 
                            name="Generate New Array"   
                            // value={this.handleChangeTask}
                            onClick={this.handleClick}
                        />
    
                        <Button 
                            name="Merge Sort"
                            // value={this.handleChangeTask}
                            handleClick={() => this.mergeSort()}
                        />
    
                        <Button 
                            name="Quick Sort"
                            // value={this.handleChangeTask}
                            handleClick={() => this.quickSort()}
                        />
    
                        <Button 
                            name="Insertion Sort"
                            // value={this.handleChangeTask}
                            handleClick={() => this.insertionSort()}
                        />
    
                        <Button 
                            name="Bubble Sort"
                            // value={this.handleChangeTask}
                            handleClick={() => this.bubbleSort()}
                        />
                </ul>
            </nav>
        )
    }
    
}