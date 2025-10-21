DAY 1 : HASHMAPS 
pattern for hashmap : 
count frequency, commonly used in character counting 
if [1,1,2,2,3,3,4,2,4] then using hashmap 

hasMap = {} 
loop into given arr
hashMap[item] = (hasmap[item] || 0) + 1 
by this we can count character easily


for 2 sum 
if we have nums = [2, 7, 11, 15], target = 9
here 2 and 7 are the numbers and their indexs are
[0, 1]
case 1: we can do a 
for (i=0;i<nums.length;i++)
    for (j=1;j<nums.length;j++)
        nums[i]+nums[j] === target

but this time complexity is 2 loops that males ot a O(n2)
--------------------------------------

2 SUM
MAIN SOLUTION !!!
using hasmap
[2, 7, 11, 15] target = 9

numsMap = {};

1st case loop os at 2
for loop :
    const res = target - nums[i];
    ex:
     res = 9 - 2 = 7

     if(res // 7 is in numsMap//{})?
        
    
    numsMap[nums[i]//2] = i//0

    numsMap = {2 : 0}

    --------------------------

in next case loop goes to 7
ex
    res = 9 - 7 = 2

    if(res // 2 is in numsMap//{2:0})? 
    YES!
    return [numsMap[compliment],i]


or else return []


## Pattern: HashMap / Single Pass
Used When: quick look-up or complement check  
Signal Words: "pair", "duplicate", "target"  
Examples: Two Sum #1, Contains Duplicate #217  
Complexity: O(n)


=================================================================================>