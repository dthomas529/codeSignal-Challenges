
int centuryFromYear(int year) {
var hundreds = year/100;
    if (year % 100 == 0) {
        return hundreds;
    }
    return Math.round(hundreds) + 1;
}
