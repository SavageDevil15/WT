<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    <style>

        .rootContent {
            position: absolute;
            left: 50%;
            top: 35%;
            width: 80%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background-color: rgb(237, 237, 237);
            padding: 20px;
        }

        .billContent {
            border: 2px solid black;
            padding: 30px;
        }

    </style>

</head>

<body>

    <?php
        
        $unitsConsumed = $_POST["unitsTxt"];
        $totalCost = 0;

        $ratePer50Units = 3.50;
        $ratePer150Units = 4.00;
        $ratePer250Units = 5.20;
        $rateHigherThan250Units = 6.50;

        if ($unitsConsumed <= 0)
        {
            // Server Validation
            echo '<div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Invalid Units Entered... Try Again .. You will be redirected !!!</h4></div>';

            echo '<script type="text/javascript">
                setTimeout(function(){
                location.href = "index.html";
                }, 2000);
                </script>';
            
            die();
        }
        else
        {
            if ($unitsConsumed <= 50)
                $totalCost = $ratePer50Units * $unitsConsumed;
            if ($unitsConsumed <= 150 && $unitsConsumed > 50)
                $totalCost = $ratePer150Units * ($unitsConsumed - 50) + (50 * $ratePer50Units);
            if ($unitsConsumed <= 250 && $unitsConsumed > 150)
                $totalCost = $ratePer250Units * ($unitsConsumed - 150) + (100 * $ratePer150Units) + (50 * $ratePer50Units);
            if ($unitsConsumed > 250)
                $totalCost = $rateHigherThan250Units * ($unitsConsumed - 250) + (100 * $ratePer250Units) + (100 * $ratePer150Units) + (50 * $ratePer50Units);   
        }
    ?>

    <div class="container-fluid rootContent">
        <figure>
            <img src="images/bill-heading.png" alt="Error While Displaying Image !!!" class="img-fluid">
        </figure>
        <div class="billContent text-center"></div>
    </div>

    <script type="text/javascript">

        $(document).ready(function() {

            // Month
            const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let month = monthArray[new Date().getMonth()];

            $(".billContent").append("<h4><strong>Month : " + month + "<strong></h4>");
            $(".billContent").append("<br><h5>User ID : 121256XXXX </h5>");
            $(".billContent").append("<h5>User Name : Atharv Natu </h5>");
            $(".billContent").append("<h5>Contact Number : 9881890683 </h5><hr>");
            $(".billContent").append("<br><h3><strong>Amount To Pay : &#8377; <?php echo $totalCost;?> </strong></h3>");

        });

    </script>
    
</body>
</html>




