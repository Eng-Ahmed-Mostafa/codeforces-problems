<?php
$input = trim(fgets(STDIN));
$first_digit = intval($input[0]);

if ($first_digit % 2 === 0) {
    echo "EVEN\n";
} else {
    echo "ODD\n";
}