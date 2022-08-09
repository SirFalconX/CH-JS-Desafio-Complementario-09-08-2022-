

//Seguro Vehículos
//Creado por Alvaro Correa

const marcaAutos = ["Chevrolet", "Renault", "Audi" ]; //Array de marca de vehículos

let okay = false //Validador
let okay2 = false
let pideMarca


function Cotizador() {
    do {
        pideMarca = prompt("Bienvenido/a, por favor ingrese una de las tres marcas de vehículo de a continuación: Chevrolet, Renault o Audi") 
        let pideAnio      
        console.log(pideMarca)
        switch(pideMarca){
            case marcaAutos[0]:
                resuelveAnioChev(pideAnio) 
                okay = false 
                console.log(pideMarca.includes("Chevrolet"))
                break;   
            case marcaAutos[1]:
                resuelveAnioRen(pideAnio)
                okay = false
                console.log(pideMarca.includes("Renault"))
                break;
            case marcaAutos[2]:
                resuelveAnioAudi(pideAnio) 
                okay = false
                console.log(pideMarca.includes("Audi"))
                break;
            default:
                    alert("Por favor, ingrese una marca válida de las descritas anteriormente")
                    okay = true
                    console.log(okay)
              break;
            } 
      
    }while (okay == true)

}


function resuelveAnioChev(pideAnio) {
    do {
        pideAnio = prompt("Ingrese año del vehículo (Entre 2000 a 2022)")
        if (pideAnio != "") {
            console.log(pideAnio)
            if (pideAnio >= 2000 && pideAnio <= 2009) {
                alert("El precio es de $500")
                okay2 = false
            }
            else {
                if(pideAnio >= 2010 && pideAnio <= 2019) {
                    alert("El precio es de $1000")
                    okay2 = false
                }
                else {
                    if(pideAnio >= 2020 && pideAnio <= 2022){
                        alert("El precio es de $1500")
                        okay2 = false
                    }
                    else {
                        if(pideAnio < 2000 || pideAnio > 2022){
                        alert("Se introdujo un año inválido, intente nuevamente")
                        okay2 = true
                        }
                    }
                }
            }
        }

    } while (okay2 == true)
}

function resuelveAnioRen(pideAnio) {
    do {
        pideAnio = prompt("Ingrese año del vehículo (Entre 2000 a 2022)")
        if (pideAnio != "") {
            console.log(pideAnio)
            if (pideAnio >= 2000 && pideAnio <= 2009) {
                alert("El precio es de $1000")
                okay2 = false
            }
            else {
                if(pideAnio >= 2010 && pideAnio <= 2019) {
                    alert("El precio es de $1500")
                    okay2 = false
                }
                else {
                    if(pideAnio >= 2020 && pideAnio <= 2022){
                        alert("El precio es de $1850")
                        okay2 = false
                    }
                    else {
                        if(pideAnio < 2000 || pideAnio > 2022){
                        alert("Se introdujo un año inválido, intente nuevamente")
                        okay2 = true
                        }
                    }
                }
            }
        }

    } while (okay2 == true)
}


function resuelveAnioAudi(pideAnio) {
    do {
        pideAnio = prompt("Ingrese año del vehículo (Entre 2000 a 2022)")
        if (pideAnio != "") {
            console.log(pideAnio)
            if (pideAnio >= 2000 && pideAnio <= 2009) {
                alert("El precio es de $2000")
                okay2 = false
            }
            else {
                if(pideAnio >= 2010 && pideAnio <= 2019) {
                    alert("El precio es de $2500")
                    okay2 = false
                }
                else {
                    if(pideAnio >= 2020 && pideAnio <= 2022){
                        alert("El precio es de $3000")
                        okay2 = false
                    }
                    else {
                        if(pideAnio < 2000 || pideAnio > 2022){
                        alert("Se introdujo un año inválido, intente nuevamente")
                        okay2 = true
                        }
                    }
                }
            }
        }

    } while (okay2 == true)
}



Cotizador()
