<?php
$input = trim(fgets(STDIN));
list($a, $b) = array_map('floatval', explode(' ', $input));

$result = $a / $b;
echo "floor $a / $b = " . floor($result) . "\n";
echo "ceil $a / $b = " . ceil($result) . "\n";
echo "round $a / $b = " . round($result) . "\n";