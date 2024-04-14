import React from "react"
import "./Visualizer.css";
import Button from "../components/Button";
import icon from "../images/sort.png"
import Info from "../components/Info";
import { getInsertionSortAnimations } from "../Algorithms/InsertionSort";
import { getMergeSortAnimations } from "../Algorithms/MergeSort";
import { getBubbleSortAnimations } from "../Algorithms/BubbleSort";
import { getQuickSortAnimations } from "../Algorithms/QuickSort";




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
        this.numberOfBars = screenWidth / 10 - 50;
        this.primaryColor = "orange";
        this.secondaryColor = "red";
        this.barHeight = screenHeight - 500;

        this.state = {
          array: [],
          isSorting: false, // Add this line
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
            array.push(getRandomNumber(10, this.barHeight));
        }
        this.setState({ array });
    }

    insertionSort() {
      if(this.state.isSorting) return; // Prevent sorting if already sorting
      this.setState({ isSorting: true }); // Set isSorting to true to disable buttons
      
      const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparison1" || animations[i][0] === "comparison2";
            const arrayBars = document.getElementsByClassName("array--bar");
            if(isColorChange) {
                const color = animations[i][0] === "comparison1" ?  this.secondaryColor : this.primaryColor;
                const [, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.animationSpeed);
            } else {
                const [, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * animationSpeed);
            }
        }
        // Set a timeout for the duration of the animations to re-enable the buttons
        setTimeout(() => {
          this.setState({ isSorting: false });
      }, animations.length * this.animationSpeed);
    }

    bubbleSort() {
        if(this.state.isSorting) return; // Prevent sorting if already sorting
        this.setState({ isSorting: true }); // Set isSorting to true to disable buttons

        // Handles displaying bubble sort animations
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const isColorChange =
            animations[i][0] === "comparison1" ||
            animations[i][0] === "comparison2";
          const arrayBars = document.getElementsByClassName("array--bar");
          if (isColorChange) {
            const color =
              animations[i][0] === "comparison1"
                ? this.secondaryColor
                : this.primaryColor;
            const [, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * this.animationSpeed);
          } else {
            const [, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
              continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
              barStyle.height = `${newHeight}px`;
            }, i * this.animationSpeed);
          }
        }
        // Set a timeout for the duration of the animations to re-enable the buttons
        setTimeout(() => {
          this.setState({ isSorting: false });
        }, animations.length * this.animationSpeed);
    }

    quickSort() {
        if(this.state.isSorting) return; // Prevent sorting if already sorting
        this.setState({ isSorting: true }); // Set isSorting to true to disable buttons

        // Handles displaying quick sort animations
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const isColorChange =
            animations[i][0] === "comparison1" ||
            animations[i][0] === "comparison2";
          const arrayBars = document.getElementsByClassName("array--bar");
          if (isColorChange === true) {
            const color =
              animations[i][0] === "comparison1"
                ? this.secondaryColor
                : this.primaryColor;
            const [, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * this.animationSpeed);
          } else {
            const [, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
              continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
              barStyle.height = `${newHeight}px`;
            }, i * this.animationSpeed);
          }
        }
        // Set a timeout for the duration of the animations to re-enable the buttons
        setTimeout(() => {
          this.setState({ isSorting: false });
        }, animations.length * this.animationSpeed);
    }

    mergeSort() {
        if(this.state.isSorting) return; // Prevent sorting if already sorting
        this.setState({ isSorting: true }); // Set isSorting to true to disable buttons
        
        // Handles displaying merge sort animations
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName("array--bar");
          const ifColorChange = i % 3 !== 2;
          if (ifColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? this.secondaryColor : this.primaryColor;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * this.animationSpeed);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * this.animationSpeed);
          }
        }
        // Set a timeout for the duration of the animations to re-enable the buttons
        setTimeout(() => {
          this.setState({ isSorting: false });
        }, animations.length * this.animationSpeed);
    }

    render() {
        const { array } = this.state;
        return (
            <div className="array--container">
                <nav className="nav--bar">

                    { /* NAVBAR */ }
                    <h1 className="nav--text">
                      <img src={icon} className="nav--icon" alt="Sorting Algorithm Visualizer" />
                      Sorting Algorithm Visualizer
                    </h1>
                    
                    { /* BUTTONS */ }
                    <div className="nav--buttons">
                        <Button 
                           name="Generate New Array"   
                           handleClick={() => this.resetArray()}
                           disabled={this.state.isSorting} // Disable button if isSorting is true
                        />
                       <Button 
                           name="Merge Sort"
                           handleClick={() => this.mergeSort()}
                           disabled={this.state.isSorting} // Disable button if isSorting is true
                        />
                       <Button 
                           name="Quick Sort"
                           handleClick={() => this.quickSort()}
                           disabled={this.state.isSorting} // Disable button if isSorting is true
                        />
                       <Button 
                           name="Insertion Sort"
                           handleClick={() => this.insertionSort()}
                           disabled={this.state.isSorting} // Disable button if isSorting is true
                        />
                       <Button 
                           name="Bubble Sort"
                           handleClick={() => this.bubbleSort()}
                           disabled={this.state.isSorting} // Disable button if isSorting is true
                        />                        
                    </div>
                </nav>
                <div>
                    { /* ARRAY CONTAINER */ }
                    {array.map((value, index) => (
                        <div className="array--bar" key={index} style={{ height: `${value}px` }}></div>
                    ))}
                </div>
                <Info />
            </div>
        );  
    }
}

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
