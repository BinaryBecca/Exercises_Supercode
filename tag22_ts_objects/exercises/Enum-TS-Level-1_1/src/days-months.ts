import { Weekdays } from "./main"

for (const weekday in Weekdays) {
  console.log(weekday)
}

enum Months {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

// ! als String = ohne Zahl in clg

for (const month in Months) {
  console.log(month)
}
