<?php
$input = trim(fgets(STDIN)); // error use fgets not fgets 
$signal = '+';
foreach (str_split($input) as $char) {
    if (!is_numeric($char)) { 
        $signal = $char;
    }
}

$numbers = explode($signal, $input);

if($signal === '+') {
    // $result = array_sum($numbers);
    $result = $numbers[0] + $numbers[1];
} elseif($signal === '-') {
    $result = $numbers[0] - $numbers[1];
} elseif($signal === '*') {
    // $result = array_product($numbers);
    $result = $numbers[0] * $numbers[1];
} elseif($signal === '/') {
    $result = intval($numbers[0] / $numbers[1]);
}

echo $result;