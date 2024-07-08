
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

new_password = ""
new_password1 = ""
function generate() {
    if (new_password.length > 0){
        new_password = ""
        new_password1 = ""}
   for ( i = 0; i < 15; i++ ) {
let randomi = Math.floor(Math.random()* characters.length)
   new_password += characters[randomi] ;
let randomii = Math.floor(Math.random()* characters.length)
   new_password1 += characters[randomii] ;
}
password_el.textContent = new_password ;
password_el1.textContent = new_password1 ;

}
