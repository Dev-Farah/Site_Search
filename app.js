let mobiles = {
    apple: {
        "iphone 13 mini": {
            RAM: `4 GB`,
            ROM: `512 GB`,
            Price: `Rs.272,900`,
        },
        "iphone 13": {
            RAM: `4 GB`,
            ROM: `512 GB`,
            Price: `Rs.300,500`,
        },
        "iphone 13 pro": {
            RAM: `8 GB`,
            ROM: `1 TB`,
            Price: `Rs.394,000`,
        },
        "iphone 13 pro max": {
            RAM: `8 GB`,
            ROM: `1 TB`,
            Price: `Rs.416,300`,
        },
    },
    oppo: {
        "oppo reno6": {
            RAM: `8 GB + 5 GB`,
            ROM: `128 GB`,
            Price: `Rs.64,999`,
        },
        "reno6 pro 5g": {
            RAM: `12 GB + 7 GB`,
            ROM: `256 GB`,
            Price: `Rs.106,999`,
        },
        "oppo f17": {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.37,999`,
        },
        "oppo f19 pro": {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.46,999`,
        },
    },
    samsung: {
        "galaxy a03": {
            Display: `6.5″`,
            ROM: `64 GB`,
            Price: `Rs.23,999`,
        },
        "galaxy a32": {
            Display: `6.4″`,
            ROM: `128 GB`,
            Price: `Rs.47,500`,
        },
        "galaxy s20 fe": {
            Display: `6.5″`,
            ROM: `128 GB`,
            Price: `Rs.102,999`,
        },
        "galaxy s22 ultra": {
            Display: `6.8″`,
            ROM: `256 GB`,
            Price: `Rs.285,999`,
        },
    },
    vivo: {
        "y33s": {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.39,999`,
        },
        "y53s": {
            RAM: `8 GB`,
            ROM: `128 GB`,
            Price: `Rs.40,999`,
        },
        "v23 5g": {
            RAM: `12 GB`,
            ROM: `256 GB`,
            Price: `Rs.89,999`,
        },
        "x70 pro": {
            RAM: `12 GB`,
            ROM: `256 GB`,
            Price: `Rs.139,999`,
        },
    },
};

// ----------------------------- Search through user input (functionality) -----------------------------

function searchVal() {
    mobileModel.setAttribute("hidden", "true");
    // mobileBrand.firstElementChild.setAttribute("disabled", "false");
    // mobileBrand.firstElementChild.setAttribute("selected", "true");

    let mobBrand = document.getElementById("mobBrand");
    let mobModel = document.getElementById("mobModel");

    // Get the element from HTML
    let productDetails = document.getElementById("productDetails");
    productDetails.innerHTML = "";

    mobBrand.value = (mobBrand.value).toLowerCase();
    mobModel.value = (mobModel.value).toLowerCase();

    /* let h4 = document.createElement('h4');
    let h4Text = document.createTextNode(titleCase(mobModel.value));
    h4.appendChild(h4Text);
    productDetails.appendChild(h4); */

    let details = (JSON.stringify(mobiles[mobBrand.value][mobModel.value]));
    details = details.replace(/{/g, "");
    details = details.replace(/"/g, " ");
    details = details.replace(/}/g, "");
    // details = details.replace(/ ,/g, " \n");

    /* let li = document.createElement('li');
    let liText = document.createTextNode(details);
    li.appendChild(liText);
    productDetails.appendChild(li); */


    // Create elements for image display
    let figure = document.createElement("figure");
    productDetails.appendChild(figure);

    let img = document.createElement("img");
    img.setAttribute("src", "");
    img.setAttribute("width", "220px");
    figure.appendChild(img);

    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `<h4>${titleCase(mobModel.value)}</h4> <li>${details}</li>`;
    figure.appendChild(figcaption);


    imgHandler(mobModel.value);
    function imgHandler(modelName) {
        if (modelName == 'iphone 13 mini') {
            img.src = "./images/Apple/iphone-13-mini.jpg";
            img.style.width = "190px";
        } else if (modelName == 'iphone 13') {
            img.src = "./images/Apple/iphone-13-green.jpg";
            img.style.width = "200px";
        } else if (modelName == 'iphone 13 pro') {
            img.src = "./images/Apple/iphone-13-pro.jpg";
            img.style.width = "230px";
        } else if (modelName == 'iphone 13 pro max') {
            img.src = "./images/Apple/iphone-13-pro-max.jpg";
        } else if (modelName == 'oppo reno6') {
            img.src = "./images/Oppo/OPPO Reno6.webp";
        } else if (modelName == 'reno6 pro 5g') {
            img.src = "./images/Oppo/OPPO Reno6 Pro 5G.webp";
        } else if (modelName == 'oppo f17') {
            img.src = "./images/Oppo/F17.webp";
        } else if (modelName == 'oppo f19 pro') {
            img.src = "./images/Oppo/F19-Pro.webp";
        } else if (modelName == 'galaxy a03') {
            img.src = "./images/Samsung/Galaxy-A03.jpg";
        } else if (modelName == 'galaxy a32') {
            img.src = "./images/Samsung/Galaxy-A32.png";
        } else if (modelName == 'galaxy s20 fe') {
            img.src = "./images/Samsung/Galaxy-S20 FE.jpg";
        } else if (modelName == 'galaxy s22 ultra') {
            img.src = "./images/Samsung/Galaxy-S22 Ultra.jpg";
        } else if (modelName == 'y33s') {
            img.src = "./images/Vivo/Vivo Y33s.jpg";
        } else if (modelName == 'y53s') {
            img.src = "./images/Vivo/Vivo Y53s.jpg";
        } else if (modelName == 'v23 5g') {
            img.src = "./images/Vivo/Vivo V23 5G.jpg";
        } else if (modelName == 'x70 pro') {
            img.src = "./images/Vivo/Vivo X70 Pro.jpg";
        }
    }

    mobBrand.value = "";
    mobModel.value = "";
};




// ----------------------------------- Dropdown (Functionality) -----------------------------------

let mobileBrand = document.getElementById("mobileBrand");
let mobileModel = document.getElementById("mobileModel");

function fillMainKeys() {
    // Get all the keys of object
    let allBrands = Object.keys(mobiles);

    for (let i = 0; i < allBrands.length; i++) {
        // Render Each key in the dropdown & Capitalize each word
        mobileBrand.innerHTML += `<option value=${allBrands[i]}>${allBrands[i][0].toUpperCase() + allBrands[i].slice(1).toLowerCase()}</option>`;
    }
};

fillMainKeys();

function fillDropdown2() {
    // Enable/Display the dropdown (any one of them can be used)
    mobileModel.disabled = false;
    mobileModel.hidden = false;
    // Create the select option
    mobileModel.innerHTML = `<option value="select" selected disabled>Select</option>`;

    // Get Selected Brand
    let brandModels = Object.keys(mobiles[mobileBrand.value]);

    for (let i = 0; i < brandModels.length; i++) {
        // mobileModel.innerHTML += `<option value=${brandModels[i]}>${brandModels[i]}</option>`;
        // Adding (') to get the complete value instead of just first word
        mobileModel.innerHTML += `<option value='${brandModels[i]}'>${titleCase(brandModels[i])}</option>`;
    }
};

function showDetails() {
    // Get the element from HTML
    let productDetails = document.getElementById("productDetails");
    productDetails.innerHTML = "";

    console.log(mobileModel.value);
    console.log(mobiles[mobileBrand.value][mobileModel.value]);

    /* let h4 = document.createElement('h4');
    let h4Text = document.createTextNode(titleCase(mobileModel.value));
    h4.appendChild(h4Text);
    productDetails.appendChild(h4); */

    let details = (JSON.stringify(mobiles[mobileBrand.value][mobileModel.value]));
    details = details.replace(/{/g, "");
    details = details.replace(/"/g, " ");
    details = details.replace(/}/g, "");
    // details = details.replace(/ ,/g, " \n");

    /* let li = document.createElement('li');
    let liText = document.createTextNode(details);
    li.appendChild(liText);
    productDetails.appendChild(li); */


    // Create elements for image display
    let figure = document.createElement("figure");
    productDetails.appendChild(figure);

    let img = document.createElement("img");
    img.setAttribute("src", "");
    img.setAttribute("width", "220px");
    figure.appendChild(img);

    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `<h4>${titleCase(mobileModel.value)}</h4> <li>${details}</li>`;
    figure.appendChild(figcaption);

    imgHandler(mobileModel.value);
    function imgHandler(modelName) {
        if (modelName == 'iphone 13 mini') {
            img.src = "./images/Apple/iphone-13-mini.jpg";
            img.style.width = "190px";
        } else if (modelName == 'iphone 13') {
            img.src = "./images/Apple/iphone-13-green.jpg";
            img.style.width = "200px";
        } else if (modelName == 'iphone 13 pro') {
            img.src = "./images/Apple/iphone-13-pro.jpg";
            img.style.width = "230px";
        } else if (modelName == 'iphone 13 pro max') {
            img.src = "./images/Apple/iphone-13-pro-max.jpg";
        } else if (modelName == 'oppo reno6') {
            img.src = "./images/Oppo/OPPO Reno6.webp";
        } else if (modelName == 'reno6 pro 5g') {
            img.src = "./images/Oppo/OPPO Reno6 Pro 5G.webp";
        } else if (modelName == 'oppo f17') {
            img.src = "./images/Oppo/F17.webp";
        } else if (modelName == 'oppo f19 pro') {
            img.src = "./images/Oppo/F19-Pro.webp";
        } else if (modelName == 'galaxy a03') {
            img.src = "./images/Samsung/Galaxy-A03.jpg";
        } else if (modelName == 'galaxy a32') {
            img.src = "./images/Samsung/Galaxy-A32.png";
        } else if (modelName == 'galaxy s20 fe') {
            img.src = "./images/Samsung/Galaxy-S20 FE.jpg";
        } else if (modelName == 'galaxy s22 ultra') {
            img.src = "./images/Samsung/Galaxy-S22 Ultra.jpg";
        } else if (modelName == 'y33s') {
            img.src = "./images/Vivo/Vivo Y33s.jpg";
        } else if (modelName == 'y53s') {
            img.src = "./images/Vivo/Vivo Y53s.jpg";
        } else if (modelName == 'v23 5g') {
            img.src = "./images/Vivo/Vivo V23 5G.jpg";
        } else if (modelName == 'x70 pro') {
            img.src = "./images/Vivo/Vivo X70 Pro.jpg";
        }
    }
};


// Convert text in Title Case
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
}