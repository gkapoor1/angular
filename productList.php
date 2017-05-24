<?php
// Array with names
$a[] = "iPhone7(1)";
$a[] = "OnePlus3T(2)";
$a[] = "Xiaomi Redmi Note-4(3)";
$a[] = "Samsung galaxy s7 edge(4)";
$a[] = "Redmi 3s Prime(5)";
$a[] = "Moto G5 Plus(21)";
$a[] = "HP Core i5 6th Gen(6)";
$a[] = "Lenovo G50-80 Core i3 5th Gen(7)";
$a[] = "Apple MacBook Air Core i5 5th Gen(8)";
$a[] = "Dell Inspiron Core i3 6th Gen(9)";
$a[] = "HP APU Quad Core A8 6th Gen(10)";
$a[] = "Dell Inspiron Core i3(21)";



/* $a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky"; */

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "No Such Product" : $hint;
?>