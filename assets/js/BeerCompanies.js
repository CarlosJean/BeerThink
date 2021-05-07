/* Declaraciones */
const serviceUrl = "../../BeerThink/services/service.BeerCompanies.php",
    slcCountry = $("#slcCountry"),
    btnSearch = $("#btnSearch"),
    frmBeerCompanies = $("#frmBeerCompanies"),
    dvCompanies = $("#dvCompanies"),
    dvCompaniesList = $("#dvCompaniesList"),
    companiesListHeader = $("#companiesListHeader")
    ;

/* Carga del documento */
$(document).ready(() => {
    getCountries();
});

/* Funciones */
const getCountries = () => {
    let options = { type: "GET", url: serviceUrl, data: { tip: "getCountries" }, res: "json" };
    $.ajax(options)
    .done(res => populateSelect(res))
    .fail(error => console.error(error));
}

const populateSelect = (json) => {
    let array = JSON
        .parse(json)
        .sort();

    slcCountry.append(new Option("[Select a country]", ""));
    array.forEach(country => {
        slcCountry.append(new Option(country, country));
    });
};

const drawCompaniesList = (json) => {
    let companies = JSON.parse(json);
    if (companies.length == 0) { dvCompanies.css('visibility', 'hidden'); return; }
    dvCompaniesList.empty(); //Limpiar div antes de mostrar datos nuevos.
    companies.forEach(company => {
        let companyName = company["name"],
            companyWebsite = company["website"],
            companyDescription = company["descript"],
            companyAddress = `${company["address1"]} ${company["city"]}, ${company["state"]}`;
        let listgroupItem = listGroupItem(companyName, companyWebsite, companyDescription, companyAddress);
        dvCompaniesList.append(listgroupItem);
    });

    let country = companies[0]["country"],
        newListHeader = `Companies list from ${country}`;

    companiesListHeader.text(newListHeader);
    dvCompanies.css('visibility', 'visible')
};

const listGroupItem = (companyName, companyWebsite, companyDescription, companyAddress) => {

    companyDescription = `${companyDescription.substring(0, 250)}...`; //Se recorta la descripción de la compañía.

    let a = $("<a/>", {
        class: "list-group-item list-group-item-action"
    })

    let dvListGroupItemHeader = $("<div/>", {
        class: "d-flex w-100 justify-content-between"
    });

    let h5 = $("<h5/>", {
        class: "mb-1",
        text: companyName
    });

    let smallCompanyWebsite = $("<small/>");

    let aWebsite = $("<a/>", {
        text: companyWebsite,
        href: companyWebsite,
        target: "_blank"
    })

    let p = $("<p/>", {
        class: "mb-1",
        text: `${companyDescription}`
    })

    let smallCompanyAddress = $("<small/>", {
        text: companyAddress
    })


    //Anexar cada elemento
    dvListGroupItemHeader.append(h5);
    smallCompanyWebsite.append(aWebsite);
    dvListGroupItemHeader.append(smallCompanyWebsite);

    a.append(dvListGroupItemHeader);
    a.append(p);
    a.append(smallCompanyAddress);

    return a;
}

/* Eventos */
btnSearch.click((e) => {
    e.preventDefault();

    let formData = frmBeerCompanies.serializeArray();
    formData.push({ name: "tip", value: "getCompanies" })

    let options = { type: "GET", url: serviceUrl, data: formData, res: "json" };
    $.ajax(options)
    .done(res => drawCompaniesList(res))
    .fail(error => console.error(error));
});