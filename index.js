// Validación para número con decimales

var cadena = "1234.23";
var result = /^[0-9]*(\.?)[ 0-9]+$/.test(cadena);
console.log(result); // true

// Validación para UUID

var cadena = 
'139923B1-8F94-4094-9CAA-442F3D1CF-V1'
 // 01234567-9ABC-DEF0-1234-56789ABCDEF0

var result =
/^[0-9A-F]{8}-[0-9A-F]{4}-[3][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/.test(cadena);

console.log(result); // true

// Validación para número sin decimales

var cadena = "1234";
var result = /^\d+$/.test(cadena);
console.log(result); // true

// Validación para nombres hispanos

var cadena = "Mario Lopez";
var result = /[a-zA-Z Á-Úá-ú][^1234567890]+$/.test(cadena);
console.log(result); // true


// Validación para url

var cadena = "https://net.tutsplus!com/about";
var result = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(cadena);
console.log(result); // true


