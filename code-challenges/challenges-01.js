"use strict";

// --------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array.
//  Without using build-in methods.
//
   var arr = [12,32,22,45,78,12,50];
//  Output: 78

const findMax = (arr) => {
  //let max;
  // write your cvar arr = new Array(7);
/*var arr = new Array(7);
arr[0]=12;
arr[1]=32;
arr[2] =22;
arr[3]=45;
arr[4] = 78;
arr[5] = 12;
arr[6] =50;*/

var max=arr[0];

    for(var i=1;i<=6;i++) {
        if(arr[i]>max) {
            max=arr[i];}
        }return max;
};
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an array and returns the sum of the numeric values.
//  Inside the array (there could be strings), without using built-in methods (You can use `typeof`)
//
//  Input: [20, '234', 'car', 41, 20, 'chair']
//  Output: 81
var arr = [20,'243','car',41,20,'chear'];
var sum =0
const sumNums = (arr) => {
  //let sum;
  // write your code herefor(var x=0;x<=5;x++){
        if(typeof A[x]!=='string') {
          sum=sum+A[x]
          
      }
  return sum;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };