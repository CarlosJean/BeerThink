<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>.::Beer Think::.</title>
    <!-- Styles -->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <!-- Beer companies -->
    <link rel="stylesheet" href="./assets/css/beerCompanies.css?<?php echo time();?>">
    <!-- End of Styles -->
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <form method="POST" id="frmBeerCompanies">
                    <div class="form-group">
                        <div class="row justify-content-center">
                            <label for="slcCountry" class="col-sm-12">Country</label>
                            <select name="country" id="slcCountry" class="form-control col-sm-12" required></select>
                            <button type="submit" id="btnSearch" class="btn btn-success col-sm-3">Search</button>          
                        </div>
                    </div>
                </form>   
            </div>
            <div class="col-sm-12" id="dvCompanies">
                <div class="row">
                    <div class="col-sm-12"><h2 id="companiesListHeader">Companies list</h2><hr></div>
                    <div class="col-sm-12" id="dvCompaniesList" class="list-group"></div>                    
                </div>
            </div>
        </div>         
    </div>
</body>
<!-- Scripts -->
<!-- JQuery -->
<script src="./assets/js/jquery-3.6.0.min.js"></script>
<!-- Logic -->
<script src="./assets/js/BeerCompanies.js?<?php echo time();?>"></script>
<!-- End of scripts -->
</html>