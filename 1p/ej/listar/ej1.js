//haciendo uso de esta secuencia S=[3,1,4,2,3] 
//no leer datos, ie usar constantes n=5, r=2
//considerar dos números 3, elementos diferentes, por ejemplo cambiar a 31,32
//potencia(S)//powerSet
var  powerSet  =  function ( str )  {

    var  set  =  [ ] ;
    var  hash  =  { } ;
    if  ( ! str )  {  str  =  '' ;  }
    str  =  str . dividir ( '' ) . sort ( ) ;
  
    // eliminar duplicados
    para  ( var  i  =  1 ;  i  <  str . longitud ;  i ++ )  {
      si  ( str [ i  -  1 ]  ===  str [ i ] )  {
        str . empalme ( i ,  1 ) ;
        i - ;
      }
    }
  
    // recursivo a través de los subconjuntos
    var  recurse  =  function ( strSet )  {
      var  unido  =  strSet . unirse ( '' ) ;
  
      // comprobar si hemos visitado este combo
      if  ( hash [ unido ] )  {  volver ;  }
      hash [ unido ]  =  verdadero ;
      establecer . empujar ( unido ) ;
  
      // no recurrir al conjunto vacío - agréguelo una vez al final
      if  ( strSet . length  ===  1 )  {  return ;  }
  
      // recurrir a todos los subconjuntos
      para  ( var  i  =  0 ;  i  <  strSet . length ;  i ++ )  {
        var  subSet  =  strSet . rebanada ( 0 ,  i ) . concat ( strSet . slice ( i  +  1 ) ) ;
        recurse ( subconjunto ) ;
      }
    } ;
    recurse ( str ) ;
    establecer . empujar ( '' ) ;  // el conjunto de potencia, por definición, incluye el conjunto vacío
  
     conjunto de retorno ;
    } ;