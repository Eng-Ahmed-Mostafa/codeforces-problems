<?php
$input = trim(fgets(STDIN));
$radius = floatval($input);
$pi = 3.141592653;
$area = $pi * $radius * $radius;
printf("%.9f\n", $area);
// echo number_format($area, 9); // number_format sprit touthend by (,)
