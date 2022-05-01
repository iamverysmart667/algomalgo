# Introduction to Algorithms

An **algorithm** is a procedure that takes in input, follows a certain set of steps, and then produces an output. Oftentimes, the algorithm defines a desired relationship between the input and output. For example, if the problem that we are trying to solve is sorting a hand of cards, the problem might be defined as follows:

> **Problem:** Sort the input\
> **Input:** A set of 5 cards\
> **Output:** The set of 5 input cards, sorted\
> **Procedure:** Up to the designer of the algorithm

This last part is very important, it's the meat and substance of the algorithm. And, as an algorithm designer, you can do whatever you want to produce the desired output! Think about some ways you could sort 5 cards in your hand, and then click below to see some more ideas.

### Algorithm Ideas

> 1. We could simply toss them up in the air and pick them up again. Maybe they'll be sorted. If not, we can try it again and again until it works (spoiler: this is a bad algorithm).
>
> 2. We can sort them one at a time, left to right. Let's say our hand looks like {2, 4, 1, 9, 8}. Well, 2 and 4 are already sorted. But then we have a 1. That should go before 4, and it should go before 2. Now we have {1, 2, 4, 9, 8}. 9 is in the right spot because its higher than the card to its left, 4. But 8 is wrong because it's smaller than 9, so we'll just put it before 9. Now, we have {1, 2, 4, 8, 9}, and we're done. This is called [insertion sort][1].
>
> 3. We can sort them two at a time, left to right. So, our hand is again {2, 4, 1, 9, 8}. 2 and 4 are good. 4 and 1 need to be swapped, so now we have {2, 1, 4, 9, 8}. 4 and 9 are good. 9 and 8 should be swapped, so now we have {2, 1, 4, 8, 9}. We have to start at the beginning again, but that's no problem. We look at the first pair and see that 2 and 1 need to switch, so now we have {1, 2, 4, 8, 9}, and we're done. This is called [bubble sort][2].
>
> 4. There are a million ways to sort this hand of cards! Some are great, most are terrible. It's up to you as the algorithm designer to make a great one.

The study of algorithms involves finding the best ways to achieve the desired output given an input and a goal. Learning about algorithms is essential to being a successful computer programmer, and understanding them can help give you an idea of how computers work. So, if you'd like to learn to code, it's absolutely essential to learn about algorithms.

## Algorithms and computers

Even though algorithms existed before the modern computer, they lie at the heart of computing and technology. Everything you've ever done on any piece of technology relies on algorithms because they tell technology what to do. Algorithms are responsible for your ability to surf the web at tolerable speeds. Imagine that you're visiting a website, and that website has a lot of unsorted content to show you. If it randomly picked a content order every time you visited it, and threw that order away and tried again if it wasn't correct, you'd be waiting for minutes, hours, or even days before your web page loaded!

Studying computer science and computer programming always involves algorithms because the study of algorithms teaches you to think like a machine so that you can program them in the best way possible. If you'd like to learn how to write applications, make websites, or do data analysis, you need to know about algorithms so that your code will run fast and run correctly.

On the theoretical side, many of the simpler algorithms have long since been discovered and heavily studied, but there are many areas left to research. For example, in theoretical computer science, a lingering question is whether *P = NP*, or in other words, "Are problems that can be quickly verified by a computer able to be quickly solved by a computer?" Currently, we don't think so. But if it turned out to be true, then computing and technology would experience an enormous speed increase that we would all benefit from. However, this would also mean that modern *cryptography* is not safe and any hacker could easily crack codes to any system in the world!

As computing grew, applications of computing grew along with it. In order to perform the algorithms that would enable those applications, computer scientists needed a way to represent and store that data. If we wanted to input a set of cards into a computer program, how would we store that data? How would we feed it into the algorithm? Early on, it was good enough to simply represent data as computer bits (zeroes and ones). However, that method could never last, it was too difficult and time-consuming.

[Data structures][3] were the answer. Their invention and research is paralleled by, and is often taught alongside, algorithms. The card sorting algorithm, for example, could take in an [array][4] of numbers to represent cards. More data structures were invented over time, and they allowed algorithm design to progress with them. With these in place, it became much easier to reason about, develop, and research algorithms.

## Properties of Algorithms

Algorithms have 3 main properties that are important to remember during their design and analysis.

> Algorithm Properties:
>
> 1. Time complexity. This is the time an algorithm takes to complete, and it is often given using [big O notation][5] with its input as the independent variable. For example, if we want to search a card in the sorted n cards, we can do in logarithmic time, and the time complexity would be *O(log(n))*.
> 2. Space complexity. This is the space (in computer memory) the algorithm uses during its execution. Again, if we're sorting nn cards, and we need to make an extra array of size nn for each card to do so, the space complexity would be *O(log(n^2))*.
> 3. Correctness. An algorithm is correct if and only if, for every input, it halts and outputs the correct output. Contrary to what you might think, algorithms that are not correct are sometimes useful. For example, partially correct algorithms only guarantee that if the algorithm halts, the answer will be correct.

## Designing an Algorithm 

<br>

When designing an algorithm, it is important to remember that computers are not infinitely fast and that computer memory is not infinitely large. That's why we make algorithms, after all. So, maybe you're designing an algorithm for a computer that is super fast but doesn't have much memory. Maybe you'll make some concessions on the computational requirements so that you can save memory.

But even if you never had to worry about speed or space, you still need to design a good algorithm. Why? You need to design a good algorithm because you need to know that the algorithm will do what you want it to do and that it will stop once it's done. You need to know that it will be correct.

### Efficacy

The **efficacy** of the algorithm you're designing comes down to **time complexity** and **space complexity**. In an ideal world, the algorithm is efficient in both ways, but there is sometimes a tradeoff between them. It is up to the designer to weigh their needs appropriately in order to strike a balance.

It is also up to the designer to make a good algorithm. Doing so requires an understanding of algorithms as well as an understanding of existing algorithms to guide your design process. Otherwise, they might find themselves with a bad algorithm.

Two algorithms that do the same exact thing in different ways could have enormous differences in efficacy. In sorting, for example, [bubble sort][2] requires *O(n)* space during its execution. [Quick sort][6], on the other hand, requires *O(nlg(n))* space. What does that mean for the programmer using those algorithms? Let's assume for simplicity that the input is just 1KB of data (or 8000 bits). Quicksort will require lg(8000) times more space, or almost 13 times more space than bubble sort. Scale that up to inputs of 1GB or even 1TB, and this difference becomes very noticeable and very inefficient.

However, it's worth noting that quicksort runs faster than bubble sort by the same factor. Again, it's a tradeoff, and it's up to the designer to understand the tradeoffs and to optimize their design for their needs.

[1]: <https://empty_page1 "Insertion Sort Info">
[2]: <https://empty_page2 "Bubble Sort Info">
[3]: <https://empty_page3 "Data Structures Info">
[4]: <https://empty_page4 "Arrays Info">
[5]: <https://empty_page5 "Big O Notation Info">
[6]: <https://empty_page6 "Quick Sort Info">

