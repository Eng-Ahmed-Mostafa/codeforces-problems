<?php
$input = trim(fgets(STDIN));
$num = intval($input);
$years = intdiv($num, 365);
$months = intdiv($num % 365, 30);
$days = ($num % 365) % 30;

echo "$years years\n";
echo "$months months\n";
echo "$days days\n";