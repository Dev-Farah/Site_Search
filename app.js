let mobiles = {
    apple: {
        "iphone 13 mini": {
            RAM: `4 GB`,
            ROM: `512 GB`,
            Price: `Rs.272,900`,
            src: "./images/Apple/iphone-13-mini.jpg",
        },
        "iphone 13": {
            RAM: `4 GB`,
            ROM: `512 GB`,
            Price: `Rs.300,500`,
            src: "./images/Apple/iphone-13-green.jpg",
        },
        "iphone 13 pro": {
            RAM: `8 GB`,
            ROM: `1 TB`,
            Price: `Rs.394,000`,
            src: "./images/Apple/iphone-13-pro.jpg",
        },
        "iphone 13 pro max": {
            RAM: `8 GB`,
            ROM: `1 TB`,
            Price: `Rs.416,300`,
            src: "./images/Apple/iphone-13-pro-max.jpg",
        },
    },
    oppo: {
        "oppo reno6": {
            RAM: `8 GB + 5 GB`,
            ROM: `128 GB`,
            Price: `Rs.64,999`,
            src: "./images/Oppo/OPPO Reno6.webp",
        },
        "reno6 pro 5g": {
            RAM: `12 GB + 7 GB`,
            ROM: `256 GB`,
            Price: `Rs.106,999`,
            src: "./images/Oppo/OPPO Reno6 Pro 5G.webp",
        },
        "oppo f17": {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.37,999`,
            src: "./images/Oppo/F17.webp",
        },
        "oppo f19 pro": {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.46,999`,
            src: "./images/Oppo/F19-Pro.webp",
        },
    },
    samsung: {
        "galaxy a03": {
            Display: `6.5″`,
            ROM: `64 GB`,
            Price: `Rs.23,999`,
            src: "./images/Samsung/Galaxy-A03.jpg",
        },
        "galaxy a32": {
            Display: `6.4″`,
            ROM: `128 GB`,
            Price: `Rs.47,500`,
            src: "./images/Samsung/Galaxy-A32.png",
        },
        "galaxy s20 fe": {
            Display: `6.5″`,
            ROM: `128 GB`,
            Price: `Rs.102,999`,
            src: "./images/Samsung/Galaxy-S20 FE.jpg",
        },
        "galaxy s22 ultra": {
            Display: `6.8″`,
            ROM: `256 GB`,
            Price: `Rs.285,999`,
            src: "./images/Samsung/Galaxy-S22 Ultra.jpg",
        },
    },
    vivo: {
        "y33s": {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.39,999`,
            src: "./images/Vivo/Vivo Y33s.jpg",
        },
        "y53s": {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.40,999`,
            src: "./images/Vivo/Vivo Y53s.jpg",
        },
        "v23 5g": {
            RAM: `12 GB`,
            ROM: `256 GB`,
            Price: `Rs.89,999`,
            src: "./images/Vivo/Vivo V23 5G.jpg",
        },
        "x70 pro": {
            RAM: `12 GB`,
            ROM: `256 GB`,
            Price: `Rs.139,999`,
            src: "./images/Vivo/Vivo X70 Pro.jpg",
        },
    },
};

// ----------------------------- Search through user input (functionality) -----------------------------

function searchVal() {
    mobileModel.setAttribute("hidden", "true");
    // mobileBrand.firstElementChild.setAttribute("disabled", "false");
    // mobileBrand.firstElementChild.setAttribute("selected", "true");

    // Get Elements from DOM HTML
    let mobBrand = document.getElementById("mobBrand");
    let mobModel = document.getElementById("mobModel");
    let productDetails = document.getElementById("productDetails");

    BrandValue = ((mobBrand.value).toLowerCase()).trim();
    ModelValue = (((mobModel.value).replace(/\s\s+/g, ' ')).toLowerCase()).trim();
    let selectedMob = mobiles[BrandValue][ModelValue];
    productDetails.innerHTML = "";

    // Create elements for image display
    let figure = document.createElement("figure");
    productDetails.appendChild(figure);

    let img = document.createElement("img");
    img.setAttribute("src", selectedMob.src);
    img.setAttribute("width", "220px");
    figure.appendChild(img);

    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `<h4>${titleCase(ModelValue)}</h4>`; 

    for (const entry of Object.entries(selectedMob)) {
        if (entry[0] === "src") {
            break;
        };
        figcaption.innerHTML += `<li><b>${entry[0]}</b>: ${entry[1]}</li>`;
    };
    
    figure.appendChild(figcaption);


    mobBrand.value = "";
    mobModel.value = "";
};




// ----------------------------------- Dropdown (Functionality) -----------------------------------

// Get Elements from DOM HTML
let mobileBrand = document.getElementById("mobileBrand");
let mobileModel = document.getElementById("mobileModel");
let productDetails = document.getElementById("productDetails");

function fillMainKeys() {
    // Get all the keys of object
    let allBrands = Object.keys(mobiles);

    mobileBrand.innerHTML = `<option value="#" selected disabled>Select</option>`
    for (let i = 0; i < allBrands.length; i++) {
        // Render Each key in the dropdown & Capitalize each word
        mobileBrand.innerHTML += `<option value=${allBrands[i]}>${titleCase(allBrands[i])}</option>`;
    }
};
fillMainKeys();


function fillDropdown2() {
    // Enable/Display the dropdown (any one of them can be used)
    mobileModel.disabled = false;
    mobileModel.hidden = false;
    // Create the select option
    mobileModel.innerHTML = `<option value="#" selected disabled>Select</option>`;

    // Get Selected Brand Models
    let brandModels = Object.keys(mobiles[mobileBrand.value]);

    for (let i = 0; i < brandModels.length; i++) {
        // mobileModel.innerHTML += `<option value=${brandModels[i]}>${brandModels[i]}</option>`;
        // Adding (') to get the complete value instead of just first word
        mobileModel.innerHTML += `<option value='${brandModels[i]}'>${titleCase(brandModels[i])}</option>`;
    }
};

function showDetails() {
    let modelDetails = mobiles[mobileBrand.value][mobileModel.value];
    // console.log(modelDetails);
    productDetails.innerHTML = "";

    // Create elements for image display
    let figure = document.createElement("figure");
    productDetails.appendChild(figure);

    let img = document.createElement("img");
    img.setAttribute("src", modelDetails.src);
    img.setAttribute("width", "220px");
    figure.appendChild(img);

    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `<h4>${titleCase(mobileModel.value)}</h4>`; 

    for (const entry of Object.entries(modelDetails)) {
        if (entry[0] === "src") {
            break;
        };
        figcaption.innerHTML += `<li><b>${entry[0]}</b>: ${entry[1]}</li>`;
    };
    
    figure.appendChild(figcaption);
};


// Convert text to Title Case
function titleCase(string) {
    let arr = string.split(" ");

    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j][0].toUpperCase() + arr[j].slice(1).toLowerCase();
    }
    let titleCase = arr.join(" ");

    // replacing some strings
    titleCase = titleCase.replace(/Iphone/g, "iPhone").replace(/5g/g, "5G").replace(/ Fe/g, " FE");
    // console.log(titleCase);
    return titleCase;
};