<?php
$input = trim(fgets(STDIN));
$n = intval($input);
function summation($n) {
    return ($n * ($n + 1)) / 2;
}
$result = summation($n);
echo "$result";