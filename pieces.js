//Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//Création des 4 élément
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${
  article.prix < 35 ? "€" : "€€€"
})`; //opérateur ternaire prix
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
const descriptionElement = document.createElement("p");
descriptionElement.innerText =
  article.description ?? "Pas de description pour le moment.";
const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite
  ? "En stock"
  : "Rupture de stock";

//Rattachement des éléments au parent
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);
