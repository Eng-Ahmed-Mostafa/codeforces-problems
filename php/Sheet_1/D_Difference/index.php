<?php 
$input = trim(fgets(STDIN));

list($a, $b, $c, $d) = array_map('intval', explode(" ", $input));

echo "Difference = " . (($a * $b) - ($c * $d)) . "\n";
