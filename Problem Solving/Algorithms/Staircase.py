#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the staircase function below.
def staircase(n):
    
    # k = 2*n - 2

    # for i in range(0, n):
    #     for j in range(0, k): 
    #         print(end="") 
    #     k = k - 2
    #     for j in range(0, i+1):
    #         print("#", end="") 
    #     print("\r") 

    # n = int(input())
    for i in range(1,n+1):
        print(('#'*i).rjust(n,' '))
if __name__ == '__main__':
    n = int(input())

    staircase(n)
