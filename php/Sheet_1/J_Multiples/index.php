<?php
$input = trim(fgets(STDIN));
list($a, $b) = array_map('intval', explode(' ', $input));
$max = max($a, $b);
$min = min($a, $b);
if ($max % $min === 0) {
    echo "Multiples";
} else {
    echo "No Multiples";
}