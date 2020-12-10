for (let i = 0; i < 5; i++) {
   console.log("\n")
}

//TODO
var compressString = function (S) {
   let result = []
   let same = 1
   for (let i = 1; i < S.length; i++) {
      if (S[i] === S[i - 1]) {
         same++
      } else {
         result.push(S[i - 1])
         result.push(same)
         same = 1
      }
      if (i === S.length - 1) {
         result.push(S[i])
         result.push(same)
      }
   }
   if (result.join("").length < S.length && S.length > 1) {
      return result.join("")
   }
   return S
}

console.log(compressString("a"))
























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
