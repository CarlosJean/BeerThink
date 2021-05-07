<?php

require_once '../data/data.BeerCompanies.php';
extract($_REQUEST);

if ($tip == "getCountries") {    
    $companiesData = BeerCompanies::getData();     
    $companies = json_decode($companiesData, true);
    echo countries($companies);
}

if ($tip == "getCompanies") {
    $companiesData = BeerCompanies::getData();     
    $companies = json_decode($companiesData, true);
    echo companiesByCountry($companies, $country);
}

function countries($companies){
    $countries =  array();
    foreach ($companies as $key => $company) {
        $country = $company["country"];
        $countryExists = in_array($country,$countries);
        if (!$countryExists) { array_push($countries,$country); }
    }
    return json_encode($countries);
}

function companiesByCountry($companies, $country){
    $data = array();
    foreach ($companies as $key => $company) {
       if ($company["country"] == $country) { array_push($data, $company); }
    }
    return json_encode($data);
}
