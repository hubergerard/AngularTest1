# AngularTest1

Créer un nouveau projet pokemon

Le but du projet est de pouvoir récupérer une liste de pokemon via [PokeApi](https://pokeapi.co/) et de l'afficher.

### Components 

APP --> Pokemon --> Pokemon-list --> Pokemon-item 

**Le component Pokemon** contient toute la page. Il contient donc l'input qui sert à faire la recherche d'un pokemon et il est en charge d'instancier le component Pokemon-list lorsque c'est nécessaire.

**Le component Pokemon-list** est chargé d'afficher une liste de Pokemon qui lui est passée en input par le component Pokemon. Pour cela, on décide que le component Pokemon-list est chargé d'instancier autant de component Pokemon-item que nécessaire.

**Le component Pokemon-item** est chargé d'afficher un Pokemon que le component Pokemon-list lui passera en input. C'est aussi lui qui est chargé d'afficher les détails supplémentaires quand on clique sur un pokemon.

Vous pouvez choisir ou non de créer le component **Pokemon-item-detail**, chargé d'afficher les détails du pokemon. Ou bien de laisser cette partie là dans Pokemon-item.

### Model

Créer la classe du modèle Pokemon, ainsi que la classe PokemonDetail. Elles serviront à recevoir les données de l'API dans un objet typé.

Pour typer la réponse d'un appel HTTP GET, dans un service, on utilise des chevrons sur la méthode get du client HTTP Angular :
exemple : `this.http.get<Pokemon>(pokemonApiUrl)`

### Service 

Créer le service PokemonService. 
Il contient au minimum les méthodes :
- `getPokemon(id: number): Observable<Pokemon> { // sert à obtenir des détails sur un pokemon en fonction de son numéro }`
- `getPokemons(): Observable<Pokemon[]> { // sert à obtenir une liste de Pokemon }`

## Cas d'utilisation :

En tant qu'utilisateur de l'app Pokemon, je veux pouvoir :
- Voir une liste de pokémon dès le démarrage
- Voir les détails d'un pokémon lorsque je clique sur son nom (une image, les attaques, les caractéristiques)
- Pouvoir rechercher un Pokemon via un input text

## Consignes

La liste des Pokémon doit contenir une image. (A faire en dernier)

Créez un component PokemonSearch, qui contient l'input. (EventEmitter nécessaire)

Un point bonus est accordé à ceux qui décident d'utiliser un framework CSS (de préférence Bootstrap / Material)

Vous êtes notés en fonction du nombres de fonctionnalités codées, de la maniabilité, du style

### Indications :

L'affichage des détails sera codé dans le component Pokemon-item. Il est recommandé de créer une autre classe de modèle nommé PokemonDétail, pour le deuxième appel d'API qui servira à chercher des détails !


### Pour ceux qui veulent un guide pour bien démarrer :

Vous allez commencer par créer le component Pokemon, celui qui contient toute la page, et à l'appeler dans app.

Créer ensuite la classe de modèle Pokemon (name, url)

Codez ensuite le service qui doit faire un appel à l'api Pokemon, pour obtenir une liste de pokemon.

Le ngOnInit du component Pokemon doit maintenant appeler ce service pour récuperer une liste de Pokemon (nom et url des détails).

Le component Pokemon doit ensuite afficher cette liste. Créez le component Pokemon-list et appelez-le depuis le component Pokemon, en lui passant la liste de Pokemon en input.


## Pour ceux qui veulent vraiment une bonne note :

Faites en sorte qu'on puisse ajouter/supprimer (en cliquant) des Pokemon d'une liste de Pokemon favoris stockée dans le localStorage.

Créez un onglet "Favoris" qui vous affiche la liste (avec image) de vos Pokémon favoris.
