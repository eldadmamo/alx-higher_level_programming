#!/usr/bin/python3
"""Search peak list of unsorted integers"""

def find_peak(integers):
    """
    Finds a peak unsorted list of integers
    """
    if not integers:
        return None
    if len(integers) == 1:
        return integers[0]
    if len(integers) == 2:
        return integers[0] if integers[0] > integers[1] else integers[1]
    midpoint = len(integers) // 2
    if integers[midpoint] < integers[midpoint - 1]:
        return find_peak(integers[:midpoint])
    if integers[midpoint] < integers[midpoint + 1]:
        return find_peak(integers[midpoint + 1:])
    return integers[midpoint]
