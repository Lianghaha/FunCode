for (let i = 0; i < 5; i++) {
   console.log("\n")
}

//TODO
//Try use one line to solve it
var CheckPermutation = function (s1, s2) {
   return s1.split("").sort().join() === s2.split("").sort().join()
}


const s1 = "abc"
const s2 = "bca"
console.log(CheckPermutation(s1, s2))


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
