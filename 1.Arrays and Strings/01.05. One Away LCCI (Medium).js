for (let i = 0; i < 5; i++) {
   console.log("\n")
}

//TODO
var oneEditAway = function (first, second) {
   if(Math.abs(first.length - second.length) > 1) return false
      for (let i = 0; i < Math.min(first.length, second.length); i++) {
         if (first[i] !== second[i]) {
            //Replace
            if (first.length === second.length) {
               return first.slice(i + 1) === second.slice(i + 1)
            }
            //Add
            if (first.length > second.length) {
               return first.slice(i + 1) === second.slice(i)
            }
            //Delete
            if (first.length < second.length) {
               return first.slice(i) === second.slice(i + 1)
            }
         }
      }
   return true
}

console.log(oneEditAway("pale", "ple"))

const colors = {
   HEADER: "\033[95m",
   OKBLUE: "\033[94m",
   OKCYAN: "\033[96m",
   OKGREEN: "\033[92m",
   WARNING: "\033[93m",
   FAIL: "\033[91m",
   ENDC: "\033[0m",
   BOLD: "\033[1m",
   UNDERLINE: "\033[4m",
}
const date = new Date()
const time = date.toLocaleString("en-CA", { hour12: false })
console.log(colors.OKCYAN + `Logged Time: ${time}` + colors.ENDC)
