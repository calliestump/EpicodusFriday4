# Pizza Parlor

#### **11.06.20**

## By _Callie Stump_
---
## **Description**
This website takes a user to a Pizza Parlor webpage. The user gets asked for pizza size, topping, and contact information. Once order is submitted, a reciept is displayed to the screen. For effective functionality each unit has been tested.

## **Setup**
1. Copy this download link: https://github.com/calliestump/Friday4PizzaParlor.git
2. Open bash and go to the directory where you would like to store your cloned project.
3. Clone the repo.
```
git clone "https://github.com/calliestump/Friday4PizzaParlor.git"
```
4. Navigate to the cloned project folder and open VS code.
```
$ cd Desktop
$ cd [known directory]
$ code .
```
#### Dont forget that in order to push any changes you need to add your own GitHub repo. to your project.
```
git remote add origin [repo. link]
```
## **Technologies Used**
* HTML
* CSS
* Bootstrap
* javaScript
* jQuery
* GIT
* GitHub
* Unit Testing

## **Specs**

```
Describe: Pizza(size);
Test: takes in two objects into the constructor
Expect (Pizza(size)).toEqual(true)
```
```
Describe: totalCost();
Test: calculates each topping and size for a total
Expect totalCost().toEqual(true)
```
```
Describe: addUserTopping();
Test: adds each topping into its own index in array
Expect addUserTopping().toEqual(true)
```
```
Describe: toppingFinal();
Test: joins indexed array into string for final result @ topping HTML id.
Expect toppingFinal().toEqual(true)
```


## Legal
Copyright (c) 2020 Callie Stump
