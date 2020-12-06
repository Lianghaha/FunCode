for (let i = 0; i < 5; i++) {
   console.log("\n")
}

//TODO

const twoSum = (numbers, target) => {
   for (let i = 0; i < numbers.length; i++) {
      for (let y = 0; y < numbers.length; y++) {
         if (y === i) {
            continue
         }
         if (numbers[i] + numbers[y] === target) {
            return [i + 1, y + 1]
         }
      }
   }
}


const twoSum2 = (numbers, target) => {
   if (numbers === null) return null
   let head = 0
   let tail = numbers.length - 1
   while (head < tail) {
      let sum = numbers[head] + numbers[tail]
      if (sum === target) {
         return [head + 1, tail + 1]
      } else if (sum < target) {
         head++
      } else {
         tail--
      }
   }
}


const colors = {
   HEADER : '\033[95m',
    OKBLUE : '\033[94m',
    OKCYAN : '\033[96m',
    OKGREEN : '\033[92m',
    WARNING : '\033[93m',
    FAIL : '\033[91m',
    ENDC : '\033[0m',
    BOLD : '\033[1m',
    UNDERLINE : '\033[4m',
}
const date = new Date()
const time = date.toLocaleString("en-CA", {hour12: false,})
console.log(colors.OKCYAN +`Logged Time: ${time}` + colors.ENDC)
