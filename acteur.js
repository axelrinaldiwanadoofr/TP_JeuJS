

class Acteur
{
    constructor( x, y, nomFichierImage )
    {
        this.x = x ; // Crée l'attribut x et on y copie la valeur contenue dans l'argument x
        this.y = y ;

        // Crée un élément HTML de type image
        // que copie dans le nouvel attribut image
        this.image = document.createElement( "img") ;

        // Mise à jour des propiétés de l'image
        this.image.src = nomFichierImage ;
        this.image.style.position = "absolute" ;
        this.image.style.left = x + "px" ;
        this.image.style.top = y + "px" ;

        // Insertion de l'image dans le contenu HTML de la page
        document.body.appendChild( this.image ) ;
    }

    setPosition( x, y )
    {
        // Repositionne l'acteur
        this.x = x ;
        this.y = y ;

        // Reposieitionne l'image
        this.image.style.left = x + "px" ;
        this.image.style.top = y + "px" ;
    }
}
