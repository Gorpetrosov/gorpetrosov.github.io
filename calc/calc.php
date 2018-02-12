<?php
//var_dump($_POST["first"][0]);
if(count($_POST)>0){
$first = $_POST["first"];
$second = $_POST["second"];
if(empty($first)||empty($second)){
    $msg = "enter all fields";
}elseif (!is_numeric($first)||!is_numeric($second)){
    $msg = "Please enter digits only";
}elseif (ctype_space($first)||ctype_space($second)){
    $msg = "There is cant be space";
}else{
    if (isset($_POST["arith"]) && ($_POST["arith"] == 'plus')) {
        if((($_POST["first"][0])=="-")||($_POST["second"][0]=="-")){
//            $first = 0 - (int) $first;
//            $second = 0 - (int)$second;
            $msg = $first + $second;
        }else {
            $msg = ($first) + ($second);
        }
    }
    if (isset($_POST["arith"]) && ($_POST["arith"] == 'minus')) {
        $msg = ($first) - ($second);
    }
    if (isset($_POST["arith"]) && ($_POST["arith"] == 'asterix')) {
        $msg = (int)($first) * (int)($second);
    }
    if (isset($_POST["arith"]) && ($_POST["arith"] == 'divide')) {
        if ($first == 0) {
            $msg = "You cant divide in 0";
        } else {

            $msg = (int)($first) / (int)($second);
        }
    }
    if (isset($_POST["arith"]) && ($_POST["arith"] == 'percent')) {
        $msg = ((int)($first) / (int)($second)) * 100 . "%";
    }
}
}else{
    $msg ="enter data please!";
    $first = "";
    $second = "";
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="calc.css">
    <title>Document</title>
</head>
<body>
<div class="whole">
<div class="inter">
    <form action="calc.php" method="post">
        <input type="text" name="first" title="number" id="first" value="<?= $first ?>">
        <select id="browsers" title="options" name="arith">
            <option  value="plus">+</option>
            <option  value="minus">-</option>
            <option  value="asterix">*</option>
            <option  value="divide">/</option>
            <option  value="percent">%</option>
        </select>
        <input type="text" name="second" title="number" id="second" value="<?= $second ?>">
        <input type="submit" value="CALCULATE">
    </form>
</div>
<div class="result">
    <p><?php echo $msg; ?></p>
</div>
</div>
</body>
</html>
