let tableauCitation = [
    {
        citation : "<< le courage n'est pas l'absence de peur, mais la capacité de la vaincre >>",
        auteur : "Nelson Mandela"
    },
    {
        citation : "<< Je pense donc je suis >>",
        auteur : "Descartes"
    },
     {
        citation : "<< la musique est la langue des émotions >>",
        auteur : "Kant"
    },
     {
        citation : "<< la beauté est dans les yeux de celui qui regarde >>",
        auteur : "Oscar Wilde"
    },
    {
        citation : "<< il n'ya point de pires sourds que ceux qui ne veulent pas entendre >>",
        auteur : "Moliere"
    },
    {
        citation : "<< fais de ta vie un rêve et d'un rêve une réalité >>",
        auteur : "Antoine"
    },
    {
    citation: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
    auteur: "Steve Jobs"
  },
  {
    citation: "Visez la lune. Si vous la manquez, vous atteindrez au moins les étoiles.",
    auteur: "Oscar Wilde"
  },
  {
    citation: "L'imagination est plus importante que le savoir.",
    auteur: "Albert Einstein"
  },
   {
    citation: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",
    auteur: "Antoine de Saint-Exupéry"
  },
  {
    citation: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
    auteur: "Winston Churchill"
  },
   {
    citation: "Penser, c'est comme vivre, on ne peut pas se contenter d'un modèle prédéfini.",
    auteur: "Simone de Beauvoir"
  },

  {
    citation: "Il n'y a qu'une seule façon d'éviter la critique : ne rien faire, ne rien dire et n'être rien.",
    auteur: "Aristote"
  },
  {
    citation: "La vie est ce qui arrive quand vous êtes occupé à faire d'autres projets.",
    auteur: "John Lennon"
  },
  {
    citation: "Les défis rendent la vie intéressante. Les surmonter la rend significative.",
    auteur: "Joshua J. Marine"
  }
  
    
];

let description = document.getElementById("description");
let auteurs = document.getElementById("auteurs");
let btn = document.getElementById("btn1");

// let copier = document.getElementById("copier")
// let partager = document.getElementById("partager")


function GetCitation(){
let i = Math.floor((Math.random() * tableauCitation.length) );
let cit = tableauCitation[i];
description.textContent = cit.citation;
auteurs.textContent = cit.auteur;

}

btn.addEventListener('click', GetCitation);
GetCitation();



