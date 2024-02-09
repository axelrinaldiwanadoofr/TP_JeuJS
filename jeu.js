


// Cree un objet un objet vide

var acteur1 = {} ;



// Ajoute les proprietes x et y

acteur1.x = 20 ;

acteur1.y = 40 ;



// Cree un objet du DOM du type IMG et stocke sa reference dans nouvel attribut

// image que l'ajoute a l'objet

acteur1.image = document.createElement( "img" ) ;



// Initialise les proprietes de l'objet IMG 

acteur1.image.src = "images/mur.bmp" ; // Associe un fichier contenant l'image

acteur1.image.style.position = "absolute" ; // Pour que l'image puisse s'afficher n'importe ou

acteur1.image.style.left = acteur1.x ; // Positionne le coin superieur gauche de l'image

acteur1.image.style.top = acteur1.y ; // a partir des coordonnes de l'acteur



// Insere l'image de l'acteur dans l'arboresence du DOM pour qu'elle 

// soit affichee par le navigateur

document.body.appendChild( acteur1.image ) ;
