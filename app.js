import { Library } from "./Library.js";
import { books } from "./Data.js";
import { Patron } from "./Patron.js";
let library1 = new Library("Abbas Alnajafy Library",books);
let patron1 = new Patron("Abbas Abd Alhusain",1);
let patron2 = new Patron("Patron-2",2);
let patron3 = new Patron("Patron-3",3);
let patron4 = new Patron("Patron-4",4);
let patron5 = new Patron("Patron-5",5);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
console.log(library1.books);
library1.addBook( "Author-11" , "php and myqsl"  );
library1.addBook( "Author-12" , "js essential" );
library1.addBook( "Author-13" , "python language" );
library1.addBook( "Author-14" , "python language" );
library1.addBook( "Author-15" , "python language" );
library1.removeBook(1);
library1.removeBook(100);
library1.removeBook(12);
library1.removeBook(120);
library1.checkOutBook(1,patron1);
library1.checkOutBook(5,patron2);
library1.checkOutBook(11,patron2);
library1.checkOutBook(2,patron3);
library1.checkOutBook(5,patron4);
library1.checkOutBook(10,patron5);
library1.checkIn(1);
library1.checkIn(5);
library1.checkIn(11);
library1.display();
