/*
---Array Methods
  * Add Elements
    - .push() adds whatever is in the parenthesis to the end of the array
    - .unshift() adds whatever is in the parenthesis to the beginning of the array

  * Remove Elements
    - .pop() removes whatever is at the end of the array. Accepts no arguments in parenthesis
    - .shift() removes whatever is at the beginning of the array. Accepts no arguments...
    -- If needed to store either of .pop() or .shift() values, declare variable, set equal to Array.pop()/.shift()
  
  * .join()
    - creates and returns new string by concatenating all elements of array
      -- separated by string method inside parenthesis (',', ', ', ' '), default is comma with no spaces (empty parenthesis)
  
  *.includes()
    - returns boolean if value specified inside parenthesis is in the array or not

  *.indexOf()
    - returns index of value specifed inside parenthesis
      -- If not in array, returns -1
  
---Multidimensional Arrays| index 0 | index 1 | index 2 | index3
  * Student Test Scores:  | Quiz 1  | Quiz 2  | Quiz 3  | Quiz 4
    index 0 | Student 1   | 80      | 90      | 100     | 95           
    index 1 | Student 2   | 75      | 95      | 85      | 100           
    index 2 | Student 3   | 60      | 70      | 77      | 90    
    
  * Represented in Multidimensional Array:
    - let scores = [[80, 90 , 100, 95], [75, 95, 85, 100], [60, 70, 77, 90]]

  * To get to Student 1's latest quiz grade access as "scores[0][3]" Where 0 is the first array element and 3 is the first array's last element
  * To get to Student 3's first quiz grade it is then accessed as "scores[2][0]"
*/
