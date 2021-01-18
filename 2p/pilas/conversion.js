class Conversion{
    constructor() {
        this.conversiones=[]
        this.top=0;

    }
    Poner(si){
        this.conversiones[this.top++] = si
    }
    Eliminar(){
        return this.conversiones[--this.top]
    }
    Tamaño(){
        return this.top;
    }
}

function Conversiones(Numero, Base) {
    let conversiones = new Conversion();
    let Numero2=Numero;
    do {
        conversiones.Poner(Numero % Base);
        Numero = Math.floor(Numero /= Base);
    }
    while (Numero > 0);
    let convertido = '';
    while (conversiones.Tamaño() > 0) {
        convertido += conversiones.Eliminar();
    }
    console.log(Numero2 +' a base '+ Base + ' se convierte en ' +convertido);
    return convertido;
}
Conversiones(125,5)
Conversiones(16,4)
Conversiones(100,15)
Conversiones(32,2)