/* Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.*/

/*Divide the year by 100, drop the decimals and add one. Adding one is necessary because the year 1 is considered the first century, so the year 101 is the second, and so on. For example, to calculate the century in which the year 1955 is, divide 1955 by 100. You will get 19.55.*/

/* Draw it: year = 1905; century = 20  / year = 1700; century = 17 */
/* Write it: 1. Input year, 2. return century, if no decimal places, 3. if decimal places, drop decimals and add 1.*/
/* Write pesudocode: function Name(year); variable hundreds = year/100; if hundreds = 0; return century; else return hundreds (drop decimal places), and then add 1.
/* Sourced tested after Google search GeeksforGeek.org */


function centuryFromYear(year) {
	
	/* find century using math opertor and store in variable hundreds = year/100 */ 
   var hundreds = year/100;
	
	/*if the result of hundreds = 0; return century */
   if (year % 100 === 0) {
   return hundreds;
}
	
	/*Hundreds doesn't equal 0, so drop decimal places (GeeksforGeeks.org), and then add 1. */
   return Math.trunc(hundreds) + 1;
  
   
}

