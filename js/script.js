function drewTree(iloscWierszy){ 
  for( var i=1 ; i <= iloscWierszy; i++){
     var star= '';
    for( var j=0 ; j<2*i-1; j++){
        star += '*';       
      }
    console.log(star);
  }
}
var wysokosc = prompt('Podaj wysokosc drzewka');
drewTree(wysokosc);