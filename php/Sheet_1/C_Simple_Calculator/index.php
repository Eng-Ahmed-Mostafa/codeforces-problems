<?php
$input = trim(fgets(STDIN));
$sperated = explode(' ', $input);
echo $sperated[0].' + '.$sperated[1] . ' = ' . ($sperated[0] + $sperated[1]) . "\n";
echo $sperated[0].' * '.$sperated[1] . ' = ' . ($sperated[0] * $sperated[1]) . "\n";
echo $sperated[0].' - '.$sperated[1] . ' = ' . ($sperated[0] - $sperated[1]) . "\n";