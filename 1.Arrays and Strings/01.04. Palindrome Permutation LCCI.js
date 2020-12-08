for (let i = 0; i < 5; i++) {
   console.log("\n")
}




//TODO
var canPermutePalindrome = function (s) {
   let check = {}
   for(let i = 0; i < s.length; i++){
      if(!(s[i] in check)){
         check[s[i]] = 1
      }
      else{
         check[s[i]]++
      }
   } 

   let single = 0
   for(const letter in check){
      if(check[letter] %2 !== 0){
         single++
      }
   }

   return single <= 1
}

console.log(canPermutePalindrome("tactcoaa")) 

























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
