for (let i = 0; i < 5; i++) {
   console.log("\n")
}




//TODO
var replaceSpaces = function (S, length) {
   return S.substr(0, length).split(" ").join("%20")
}

console.log(replaceSpaces("Mr John Smith ", 13))
console.log(replaceSpaces("               ", 5))


























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
