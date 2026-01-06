<?php
$input = trim(fgets(STDIN));
list($a, $b) = array_map('strval', explode(" ", $input));
$a = str_split($a);
$b = str_split($b);
$result = intval(end($a)) + intval(end($b));
echo $result . "\n";