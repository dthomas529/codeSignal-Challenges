function centuryFromYear(year) {
   var hundreds = year/100;
   if (year % 100 === 0) {
   return hundreds;
}
   return Math.trunc(hundreds) + 1;
  
   
}

