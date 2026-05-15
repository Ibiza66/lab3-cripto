// Código utilizado en la consola del navegador para generar
// el hash SHA-256 de una contraseña en texto plano y obtenerlo en Base64.

const password = "Lab3UDP2026!";

const enc = new TextEncoder().encode(password);
const buf = await crypto.subtle.digest("SHA-256", enc);
const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));

console.log(b64);
