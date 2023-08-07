# Sorting Algorithm Visualizer

![Screen Recording 2022-10-19 at 6 51 55 PM-2](https://user-images.githubusercontent.com/65887526/196841983-810c279d-4ac2-42c3-bd19-880929d9d178.gif)


Sorting-Algorithms-Blender
==========================


Table of contents
=================

<!--ts-->
   * [Introduction](#introduction)
      * [Description](#description)
      * [Getting Started](#getting-started)
      * [Limitations](#limitations)
   * [Sorting Algorithms](#sorting-algorithms)
      * [Bubble Sort](#bubble-sort)
      * [Insertion Sort](#insertion-sort)
      * [Selection Sort](#selection-sort)
      * [Heap Sort](#heap-sort)
      * [Shell Sort](#shell-sort)
      * [Merge Sort](#merge-sort)
      * [Quick Sort](#quick-sort)
   * [Big O](#big-o)
      * [What is Big O Notation?](#what-is-big-o-notation)
      * [Time Complexity Notations](#time-complexity-notations)
      * [Table of Sorting Algorithms](#table-of-sorting-algorithms)
      * [Big O Complexity Chart](#big-o-complexity-chart)
<!--te-->

Introduction
============

## Description
The Sorting Algorithm Visualizer is a dynamic and educational tool that brings to life the mechanics of different sorting algorithms. Its primary aim is to help users understand the intricacies of how various sorting techniques function, the differences between them, and their efficiency in various scenarios.

## Getting Started


## Limitations
These visualizations don't show the efficiency of the algorithms.<br>
They only visualize movement of the elements within the array.<br>
But the array access and comparison counters are indicators of the time complexity of the algorithms.<br>
For more information about the time complexity, you can take a look at the [Big O Table](#table-of-sorting-algorithms).<br>

<strong>Contributions to this project with either ideas from the list or your own are welcome.</strong>


Sorting Algorithms
==================


## Bubble Sort
<p>
Bubble sort is one of the most straightforward sorting algorithms, it makes multiple passes through a list.<br>
<ul>
<li>Starting with the first element, compare the current element with the next element of the array.</li>
<li>If the current element is greater than the next element of the array, swap them.</li>
<li>If the current element is less than the next element, move to the next element.</li>
</ul>
In essence, each item “bubbles” up to the location where it belongs.
</p>

## Insertion Sort

<p>Like bubble sort, the insertion sort algorithm is straightforward to implement and understand.<br>
<ul>
<li>Iterate from arr[1] to arr[n] over the array.</li>
<li>Compare the current element (key) to its predecessor.</li>
<li>If the key element is smaller than its predecessor, compare its elements before.</li>
<li>Move the greater elements one position up to make space for the swapped element.</li>
</ul>
It splits the given array into sorted and unsorted parts, 
then the values from the unsorted parts are picked and placed at the correct position in the sorted part.</p>

## Selection Sort

The algorithm maintains two subarrays in a given array.
<ul>
<li>The subarray which is already sorted.</li>
<li>Remaining subarray which is unsorted.</li>
</ul>
<p>In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.</p>

## Heap Sort

Based on the binary heap data structure, heap sort is mainly considered as a comparison-based sorting algorithm.<br>
In this sorting technique, at first, the minimum element is found out and then the minimum element gets placed at its right position at the beginning of the array.<br>
For the rest of the elements, the same process gets repeated.<br>
So, we can say that heap sort is quite similar to the selection sort technique.<br>
Heap sort basically recursively performs two main operations:
<ul>
<li>Build a heap H, using the elements of array.</li>
<li>Repeatedly delete the root element of the heap formed in 1st phase.</li>
</ul>
  
## Shell Sort
<p>
The shell sort algorithm extends the insertion sort algorithm and is very efficient in sorting widely unsorted arrays.<br>
The array is divided into sub-arrays and then insertion sort is applied.<br>
The algorithm is:
<ul>
<li>Calculate the value of the gap.</li>
<li>Divide the array into these sub-arrays.</li>
<li>Apply the insertion sort.</li>
<li>Repeat this process until the complete list is sorted.</li>
</ul>
This sorting technique works by sorting elements in pairs, far away from each other and subsequently reduces their gap.<br> The gap is known as the interval. We can calculate this gap/interval with the help of Knuth’s formula.
</p>

## Merge Sort

Merge sort uses the divide and conquer approach to sort the elements.<br>
It is one of the most popular and efficient sorting algorithms.<br>

The sub-lists are divided again and again into halves until the list cannot be divided further.<br>
Then we combine the pair of one element lists into two-element lists, sorting them in the process.<br>
The sorted two-element pairs is merged into the four-element lists, and so on until we get the sorted list.

## Quick Sort

Like Merge Sort, Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of Quick Sort that pick pivot in different ways. 
<ul>

<li>Always pick first element as pivot.</li>
<li>Always pick last element as pivot.</li>
<li>Pick a random element as pivot.</li>
<li>Pick median as pivot. (implemented below)</li>
</ul>

The key process in quickSort is <strong>partition()</strong>. Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x.<br>
All this should be done in linear time.

Big O
=====

### What is Big O Notation?

Big O notation is the language we use for talking about how long an algorithm takes to run.<br>
It's how we compare the efficiency of different approaches to a problem.<br>
With Big O notation we express the runtime in terms of **how quickly it grows relative to the input, as the input gets arbitrarily large.**

Let's break that down:
<ul>
<li><strong>how quickly the runtime grows</strong>

It's hard to pin down the exact runtime of an algorithm.<br> 
It depends on the speed of the processor, what else the computer is running, etc. So instead of talking about the runtime directly, we use big O notation to talk about how quickly the runtime grows.</li>
    
<li><strong>relative to the input</strong>

If we were measuring our runtime directly, we could express our speed in seconds.<br>
Since we're measuring how quickly our runtime grows, we need to express our speed in terms of...something else.<br>
With Big O notation, we use the size of the input, which we call<strong> "n"</strong>.<br>
So we can say things like the runtime grows "on the order of the size of the input" <strong>(O(n))</strong> or "on the order of the square of the size of the input" <strong>(O(n^2))</strong>.</li>
    
<li><strong>as the input gets arbitrarily</strong>

Our algorithm may have steps that seem expensive when <strong>"n"</strong> is small but are eclipsed eventually by other steps as <strong>"n"</strong> gets huge.<br> 
For big O analysis, we care most about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as <strong>"n"</strong> gets very large.</li>
</ul>

### Time Complexity Notations
 
These are the asymptotic notations that are used for calculating the time complexity of the sorting algorithms:
<ul>
<li><strong>Big O Notation, O:</strong></li>
  
It measures the upper limit of an algorithm's running time or the worst-case time complexity. It is known by O(n) for input size 'n'.

<li><strong>Omega Notation, Ω:</strong></li>

It measures the minimum time taken by algorithms to execute, and calculates the best case time complexity in sorting. It is known by Ω(n) for input size 'n'.

<li><strong>Theta Notation, θ:</strong></li>

It measures the average time taken by an algorithm to execute. Or, the lower bound and upper bound of an algorithm's running time. It is known by θ(n) for input size 'n'.
</ul>
  
### Table of Sorting Algorithms

In applications such as in radix sort, a bound on the maximum key value <strong>"k"</strong> will be known in advance, and can be assumed to be part of the input to the algorithm.<br>
However, if the value of <strong>"k"</strong> is not already known then it may be computed, as a first step, by an additional loop over the data to determine the maximum key value.<br>  
  
<table>
    <tr>
      <th>Algorithm</th>
      <th colspan="3">Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
    <tr>
      <th></th>
      <th>Best Case</th>
      <th>Average Case</th>
      <th>Worst Case</th>
      <th>Worst Case</th>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Quicksort">Quick Sort</a></td>
      <td><code class="orange">Ω(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="orange">Θ(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="red">O(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="yellow-green">O(log(n))</code><br><img src="./img/good.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Merge_sort">Merge Sort</a></td>
      <td><code class="orange">Ω(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="orange">Θ(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="orange">O(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="yellow">O(n)</code><br><img src="./img/fair.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Timsort">Tim Sort</a></td>
      <td><code class="yellow">Ω(n)</code><br><img src="./img/fair.png" align="left"></td>
      <td><code class="orange">Θ(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="orange">O(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="yellow">O(n)</code><br><img src="./img/fair.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Heapsort">Heap Sort</a></td>
      <td><code class="orange">Ω(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="orange">Θ(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="orange">O(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="green">O(1)</code><br><img src="./img/excellent.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a></td>
      <td><code class="yellow">Ω(n)</code><br><img src="./img/fair.png" align="left"></td>
      <td><code class="red">Θ(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="red">O(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="green">O(1)</code><br><img src="./img/excellent.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Insertion_sort">Insertion Sort</a></td>
      <td><code class="yellow">Ω(n)</code><br><img src="./img/fair.png" align="left"></td>
      <td><code class="red">Θ(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="red">O(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="green">O(1)</code><br><img src="./img/excellent.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a></td>
      <td><code class="red">Ω(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="red">Θ(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="red">O(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="green">O(1)</code><br><img src="./img/excellent.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Tree_sort">Tree Sort</a></td>
      <td><code class="orange">Ω(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="orange">Θ(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="red">O(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="yellow">O(n)</code><br><img src="./img/fair.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Shellsort">Shell Sort</a></td>
      <td><code class="orange">Ω(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="red">Θ(n(log(n))^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="red">O(n(log(n))^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="green">O(1)</code><br><img src="./img/excellent.png" align="left"></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Only for integers. k is a number of buckets" href="http://en.wikipedia.org/wiki/Bucket_sort">Bucket Sort</a></td>
      <td><code class="green">Ω(n+k)</code><br><img src="./img/excellent.png" align="left"></td>
      <td><code class="green">Θ(n+k)</code><br><img src="./img/excellent.png" align="left"></td>
      <td><code class="red">O(n^2)</code><br><img src="./img/horrible.png" align="left"></td>
      <td><code class="yellow">O(n)</code><br><img src="./img/fair.png" align="left"></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Constant number of digits 'k'" href="http://en.wikipedia.org/wiki/Radix_sort">Radix Sort</a></td>
      <td><code class="green">Ω(nk)</code><br><img src="./img/excellent.png" align="left"></td>
      <td><code class="green">Θ(nk)</code><br><img src="./img/excellent.png" align="left"></td>
      <td><code class="green">O(nk)</code><br><img src="./img/excellent.png" align="left"></td>
      <td><code class="yellow">O(n+k)</code><br><img src="./img/fair.png" align="left"></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Difference between maximum and minimum number 'k'" href="https://en.wikipedia.org/wiki/Counting_sort">Counting Sort</a></td>
      <td><code class="green">Ω(n+k)</code><br><img src="./img/excellent.png" align="left"></td>
      <td><code class="green">Θ(n+k)</code><br><img src="./img/excellent.png" align="left"></td>
      <td><code class="green">O(n+k)</code><br><img src="./img/excellent.png" align="left"></td>
      <td><code class="yellow">O(k)</code><br><img src="./img/fair.png" align="left"></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Cubesort">Cube Sort</a></td>
      <td><code class="yellow">Ω(n)</code><br><img src="./img/fair.png" align="left"></td>
      <td><code class="orange">Θ(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="orange">O(n log(n))</code><br><img src="./img/bad.png" align="left"></td>
      <td><code class="yellow">O(n)</code><br><img src="./img/fair.png" align="left"></td>
   </tr>

</table>

### Big O Complexity Chart

![graph](https://user-images.githubusercontent.com/78089013/176728121-e43b51b8-8bdd-4d0a-8376-62662e26b813.svg)
