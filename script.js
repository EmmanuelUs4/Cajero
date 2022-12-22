//Cuenta cliente
let datosCuenta1 = new Object();
nombre1 = 'Maria Cano';
documento1 = '12345';
password1 = '123';
userType = '2';


//Cuenta admin
let datosCuenta2 = new Object();
nombre2 = 'Balduino IV';
documento2 = 'admin123';
password2 = 'admin123';
userType = '1';


let dineroDelCajero = [];
let totalDineroCajero = 0;
//Valor de cada billete
let billeteCinco = 5000;
let billeteDiez = 10000;
let billeteVeinte = 20000
let billeteCincuenta = 50000
let billeteCien = 100000
//Cantidad de billetes
let totalBilletesDeCien = 0
let totalBilletesDeCincuenta = 0
let totalBilletesDeViente = 0
let totalBilletesDeDiez = 0
let totalBilletesDeCinco = 0


//Inicio de la función del cajero, con un ciclo while que preguntará a la persona si desea iniciar el cajero, al negarlo dará resultados//

while (confirm("Iniciar cajero") === true) {
    //Function de logeo donde la persona ingresa sus datos
    loginDocument()
    function loginDocument(logueo) {
        let logind = prompt("Ingresa tu documento")
        let loginPassword = prompt("Ingresa la contraseña")
        if (logind !== documento1 && logind !== documento2 && loginPassword !== password1 && loginPassword !== password2) {
            alert("El usuario y contraseña ingresados, no existen")
            loginDocument()
        }
        //si los datos ingresados son de administrador, arranca una function
        else if (logind === documento2 && loginPassword === password2) {
            //Esta function es exclusiva del administrador, le permite cargar dinero al cajero
            adminAccess();
        }
        //Si los datos ingresados son de un cliente, arranca una function
        else if (loginPassword === password1 && logind === documento1) {
            //Esta function es exclusiva de los clientes, les permite realizar sus retiros de dinero
            userAccess()
        }

    }
}














//Function de cliente
function userAccess(retiro) {//a partir de acá inicia el proceso de retiro del cliente
    console.log("Un cliente ha ingresado")
    alert("Panel de cliente");
    alert(`El cajero cuenta con ${totalDineroCajero}.`)
    retiro = prompt("¿Cuánto quieres retirar?");
    if (retiro <= totalDineroCajero) {
        let denoPorBillete = [100000, 50000, 20000, 10000, 5000];
        //For para que recorra la lista de denoPorBillete   
        for (let index = 0; index < denoPorBillete.length; index++) {
            //Declaro variables para realizar la operación más adelante
            let billetesADar;
            let billetesARestar;
            let valorEnPesosARestar;
            //Los billetes que se le darán al cliente           
            billetesADar = Math.floor(retiro / denoPorBillete[index]);

            //Los billetes que se van a quitar de la lista del cajero
            let billetes = dineroDelCajero[index] / denoPorBillete[index];

            if (billetes >= billetesADar) {
                billetesARestar = billetesADar;
            } else {
                billetesARestar = billetes;
            }
            //Operación matemática para darle el dinero al cliente y guardar los cambios en el cajero y demás variables
            valorEnPesosARestar = billetesARestar * denoPorBillete[index];
            dineroDelCajero[index] -= valorEnPesosARestar;
            totalDineroCajero -= valorEnPesosARestar;
            retiro -= valorEnPesosARestar;
        }

        //Aquí se muestra cuánto dinero tiene el cajero ahora
        alert(`El cajero ahora cuenta con: ${retiroCajero = totalDineroCajero - retiro}`);
        //Acá se muestra la operación realizada co el retiro del cliente
        console.log(totalDineroCajero)
        console.log(`-${retiro}`)
        console.log(retiroCajero)


    }//Acá se aplican los cambios del retiro del cliente
    totalDineroCajero = totalDineroCajero - retiro

}
//Esto es por si el retiro es superior al dinero que hay en el cajero, avisando de ello al cliente
//Y sacándolo de la sesión
if (retiro > totalDineroCajero) {
    alert("No hay dinero suficiente para  darte");
    loginDocument();
    function loginDocument(logueo) {
        let logind = prompt("Ingresa tu documento")
        let loginPassword = prompt("Ingresa la contraseña")
        if (logind !== documento1 && logind !== documento2 && loginPassword !== password1 && loginPassword !== password2) {
            alert("El usuario y contraseña ingresados, no existen")
            loginDocument()
        }
        //si los datos ingresados son de administrador, arranca una function
        else if (logind === documento2 && loginPassword === password2) {
            //Esta function es exclusiva del administrador, le permite cargar dinero al cajero
            adminAccess();
        }
        //Si los datos ingresados son de un cliente, arranca una function
        else if (loginPassword === password1 && logind === documento1) {
            //Esta function es exclusiva de los clientes, les permite realizar sus retiros de dinero
            userAccess()
        }

    }
}



//Function de administrador
function adminAccess(carga) {

    //A partir de acá se introducen las cantidades de cada uno de los billetes al cajero
    let cantidadBilletesDeCien = parseInt(prompt("Cantidad de billetes de Cien mil a  cargar:"));
    dineroDelCajero.push(cantidadBilletesDeCien)
    let cantidadBilletesDeCincuenta = parseInt(prompt("Cantidad de billetes de Cincuenta mil a cargar:"));
    dineroDelCajero.push(cantidadBilletesDeCincuenta);
    let cantidadBilletesDeVeinte = parseInt(prompt("Cantidad de billetes de Veinte a cargar:"));
    dineroDelCajero.push(cantidadBilletesDeVeinte);
    let cantidadBilletesDeDiez = parseInt(prompt("Cantidad de billetes de Diez mil a cargar:"));
    dineroDelCajero.push(cantidadBilletesDeDiez);
    let cantidadBilletesDeCinco = parseInt(prompt("Cantidad de billetes de Cinco mil a cargar:"));
    dineroDelCajero.push(cantidadBilletesDeCinco);
    //aquí se realiza una suma de todas las cantidades de billetes para tener
    //un total de los billetes en general que estan en el cajero
    billetesCantidadTotal = cantidadBilletesDeCien + cantidadBilletesDeCincuenta + cantidadBilletesDeVeinte + cantidadBilletesDeDiez + cantidadBilletesDeCinco;
    //Acá se multiplica la cantidad de cada billete por su valor respectivamente
    totalBilletesDeCien = cantidadBilletesDeCien * billeteCien;
    totalBilletesDeCincuenta = cantidadBilletesDeCincuenta * billeteCincuenta;
    totalBilletesDeViente = cantidadBilletesDeVeinte * billeteVeinte;
    totalBilletesDeDiez = cantidadBilletesDeDiez * billeteDiez;
    totalBilletesDeCinco = cantidadBilletesDeCinco * billeteCinco;
    totalBilletesDeDiez = cantidadBilletesDeDiez * billeteDiez;



    console.log("Cantidad de billetes de Cien cargados: ", cantidadBilletesDeCien);
    console.log("Cantidad de billetes de Cincuenta cargados: ", cantidadBilletesDeCincuenta);
    console.log("Cantidad de billetes de Veinte cargados: ", cantidadBilletesDeVeinte);
    console.log("Cantidad de billetes de Diez cargados: ", cantidadBilletesDeDiez);
    console.log("Cantidad de billetes de Cinco cargados: ", cantidadBilletesDeCinco);
    //Esta tampoco
    console.log("total de billetes de Cien cargados: ", totalBilletesDeCien);
    console.log("Total de billetes de Cincuenta cargados: ", totalBilletesDeCincuenta);
    console.log("Total de billetes de Veinte cargados", totalBilletesDeViente);
    console.log("Total de billetes de Diez cargados", totalBilletesDeDiez);
    console.log("Total de billetes de Cinco cargados", totalBilletesDeCinco);
    //Ni te digo esta
    totalDineroCajero = (totalBilletesDeCien + totalBilletesDeCincuenta + totalBilletesDeViente + totalBilletesDeDiez + totalBilletesDeCinco);
    console.log(dineroDelCajero)
    console.log("Dinero total del cajero: ", totalDineroCajero);
    //Acá se hace saber al Admin  que los billetes se cargaron con exito
    alert("Ya se ha cargado el cajero con los billetes ingresados");
    console.log("Ya se han cargado los billetes");
    //Acá se le da al admin la posibilidad de elegir entre cargar más billetes o salir
    accion = prompt("¿Qué deseas hacer? \n 1:Cargar el cajero \n 2:Salir")
    while (accion === 1) {
        adminAccess()
        accion = prompt("¿Qué deseas hacer? \n 1:Cargar el cajero \n 2:Salir")
        if (accion == 2) {
            console.log("El admin ha salido");
            break
        }
    }
}


