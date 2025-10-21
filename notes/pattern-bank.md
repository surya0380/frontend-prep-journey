**DAY 1 : HASHMAPS**

main pattern is "HashMap / Object (same pattern as Two Sum: "have I seen this value before?"
pattern for hashmap : 
count frequency, commonly used in character counting 
if [1,1,2,2,3,3,4,2,4] then using hashmap 

hasMap = {} 
loop into given arr
hashMap[item] = (hasmap[item] || 0) + 1 
by this we can count character easily

--------------------------------------
**PROBLEM 1 leetcode  ->  2 SUM**
for 2 sum 
if we have nums = [2, 7, 11, 15], target = 9
here 2 and 7 are the numbers and their indexs are
[0, 1]
case 1: we can do a 
for (i=0;i<nums.length;i++)
    for (j=1;j<nums.length;j++)
        nums[i]+nums[j] === target

but this time complexity is 2 loops that males ot a O(n2)

MAIN SOLUTION !!! with time complexity of single loop O(n)
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

**PROBLEM 217 leetcode -> Contains duplicate**
i have an array of
[1,2,3,1]

i will create a map {}
i will loop thru my nums array
at 0 il check if my nums[i] i.e 1 is in my map {}
no
i will store it 
numsMap[1] = true;  => {1: true}

same goes till last element 1
i will check if i have 1 in my numsMap
1 in {1: true, 2: true, 3: true}
1 is present so return true !!

for finding duplicates and check duplicates we can use ne Set() in this case as well as it removes the duplicates

=================================================================================>
DAY 2