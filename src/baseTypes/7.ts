/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday', 
  Sunday = 'Sunday'
 }
 
 const isWeekend = (day: Day):boolean => {
   if(day === Day.Saturday || day === Day.Sunday){
     return true
   }
   else{
    return false
   }
 }
