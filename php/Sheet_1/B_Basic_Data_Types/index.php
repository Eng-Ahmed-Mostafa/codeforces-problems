<?php
$input = trim(fgets(STDIN));
$sperated = explode(" ", $input);

foreach ($sperated as $value) {
    echo $value . "\n";
}