const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";

const materials = [MATERIAL_AIR_ID, MATERIAL_IRON_INGOT_ID, MATERIAL_STICK_ID];
const materialsImageSrc = [
	MATERIAL_AIR_IMG,
	MATERIAL_IRON_INGOT_IMG,
	MATERIAL_STICK_IMG,
];

const pickaxeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];
const axeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";

const recipeList = [pickaxeRecipe, axeRecipe];
const recipeImageSrcList = [pickaxeRecipeImageSrc, axeRecipeImageSrc];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [1, 2, 2];

// Coder ici

const inventaire = document.querySelector(".inventaire");


function createItemButton(imageSrc, imageAlt) {
	const button = document.createElement("button");
	const image = document.createElement("img");
	
	image.setAttribute("src", imageSrc);
	image.setAttribute("alt", imageAlt);
	
	button.appendChild(image);

	return button;
}

for(let i = [1]; i < inventoryTable.length; i++) {

	const button = createItemButton(imageSrc, imageAlt);
	
	button = button + 1

	inventaire.appendChild(button)
}
