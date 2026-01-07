<?php
$input = trim(fgets(STDIN));
list($a, $b, $c) = array_map('intval', explode(' ', $input));
$max = max($a, $b, $c);
$min = min($a, $b, $c);
echo "$min $max\n";