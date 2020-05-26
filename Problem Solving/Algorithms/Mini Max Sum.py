#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the miniMaxSum function below.
def miniMaxSum(arr):
    maxSum=0
    minSum=0

    maxNum=max(arr)
    arr.remove(max(arr))

    for _ in arr:
        maxSum+=_
        
    arr.append(maxNum)
    arr.remove(min(arr))

    for _ in arr:
        minSum+=_
    print(maxSum,minSum)

if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
