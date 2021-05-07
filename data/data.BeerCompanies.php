<?php
require_once '../core/global.php';

class BeerCompanies{
    static function getData(){
        return file_get_contents(DATA_URL);
    }
}