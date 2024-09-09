// Ejemplo 1: Ámbito de función
function exampleFunction() {
    const x = "declared inside function"; // x solo puede ser usada dentro de exampleFunction
    console.log("Inside function");
    console.log(x);
  }
  
  try {
    console.log(x); // Genera un error porque x no está definida fuera de la función
  } catch (e) {
    console.error("Error:", e.message);
  }
  
  // Ejecuta exampleFunction
  exampleFunction();
  
  // Ejemplo 2: Ámbito global y de función
  const x = "declared outside function"; 

// Ejemplo 1: Ámbito de función
function exampleFunction() {
  const x = "declared inside function"; // xspleon
  console.log("Inside function");
  console.log(x); 
} 
  // Ejemplo 3: try...catch con return en finally
  function f() {
    try {
      console.log(0); 
      throw 'bogus'; 
    } catch (e) {
      console.log(1); 
      return true; 
    } finally {
      console.log(3); 
      return false; 
    }
    console.log(5); 
  }
  
  console.log(f()); 
  
  // Ejemplo 4: Manejo de Excepciones Personalizadas
  function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }
  
  function getMonthName(mo) {
    mo--; 
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
      return months[mo];
    } else {
      throw new UserException('InvalidMonthNo'); 
    }
  }
  
  let monthName;
  try {
    const myMonth = 15; 
    monthName = getMonthName(myMonth);
  } catch (e) {
    monthName = 'unknown';
    console.error(e.message, e.name); 
  }
  console.log("Month Name:", monthName); 
  