'use strict';

function iloscKsiazek(ksiazki){
    var iloscPrzeczytanych = 0;
    for(var i =0; i < ksiazki.length; i++){
        var ksiazka = ksiazki[i];
        
        if(ksiazka.przeczytana == true)
        {
            iloscPrzeczytanych++;
        }
        
        console.log(ksiazka.wyswietlInfo());
    }
    
    return iloscPrzeczytanych;
}

function Ksiazka(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
    
    this.wyswietlInfo = function () {
        if (this.przeczytana == true) 
        {
            return 'Ta ksiażka ma tytuł ' + this.tytul + ' autorem jest ' + this.autor + ' i została przeczytana.'
        } 
        else 
        {
            return 'Ta ksiażka ma tytuł ' + this.tytul + ' autorem jest ' + this.autor +' i nie została przeczytana'
        }
    }
} 


//var harry = new Ksiazka('Harry Potter', 'J.K Rowling', false);

//console.log(harry.wyswietlInfo());

var ksiazki = [
    new Ksiazka('Wiedzmin', 'Andrzej Sapkowski', true);
    new Ksiazka('Harry Potter', 'J.K Rowling', false);
    new Ksiazka('Lord of the Rings', 'Tolkien', false);
    
];

console.log("Ilosc przeczytanych to: " + iloscKsiazek(ksiazki));