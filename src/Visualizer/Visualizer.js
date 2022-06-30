import { render } from "@testing-library/react"
import React from "react"
import "./Visualizer.css";
import Button from "../components/Button";



// Make responsive on all screens
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


let animationSpeed = 1; // animation speed
if (screenWidth < 700) {
  animationSpeed = 3;
}

export default class Visualizer extends React.Component {
    constructor(props) {
        super(props)


        this.animationSpeed = animationSpeed;
        this.numberOfBars = screenWidth / 8;
        this.primaryColor = "orange";
        this.secondaryColor = "white";
        this.barHeight = screenHeight - 500;

        this.state = {
            array: []
        }
    }

    componentDidMount(){
        //on initial load or page refresh
        this.resetArray();
    }

    resetArray() {
        //reset array with randomly generated numbers
        const array = [];
        for (let i = 0; i < this.numberOfBars; i++) {
            array.push(getRandomNumber(5, this.barHeight));
        }
        this.setState({ array });
    }

    // const[task, setTask] = useState()

    // handleChangeTask(event){
    //     const {name, value} = event.target;
    //     return(
    //         setTask(prevTask => {
    //             [name] : value
    //         })
    //     )
    // }

    

    render() {
        const { array } = this.state;
        return (
            <div className="array--container">
                {array.map((value, index) => (
                    <div className="array--bar" key={index} style={{ height: `${value}px` }}></div>
                ))}

                {/* <Button 
                    name="Generate New Array"
                    // value={this.handleChangeTask}
                    handleClick={() => this.resetArray()}
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
                /> */}

            </div>
        );
    }
    
}

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
