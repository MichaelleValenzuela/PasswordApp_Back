const JWT = require("jsonwebtoken");

const hashingScript_funcJS_base64 = (isEncrypt, str) => isEncrypt ? btoa(str) : atob(str);

//obj_fields=  btoa(JSON.stringify(src.inputs_data)); <-- como recibe una cadena, y se combierte en objeto
// ahora lo parseamos y lo convertimos en objeto para acceder a su información

// -------------------------------------------------------------------------------------
// JWT: JSON WEB TOKEN

const encryptJWT = (isEncrypt, fieldToEncrypt) => isEncrypt ? JWT.sign(fieldToEncrypt, 'asdsadjashdjsahdoqjkwjdlwqjdlwdqwd', { expiresIn: "10 days" }) : JWT.verify(fieldToEncrypt, 'asdsadjashdjsahdoqjkwjdlwqjdlwdqwd');