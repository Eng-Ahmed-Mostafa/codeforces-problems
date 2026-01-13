<?php
$input = floatval(trim(fgets(STDIN)));
$arr = [0,25,50,75,100];

for ($i = 0; $i < count($arr) - 1; $i++) {
    if ($input >= $arr[$i] && $input <= $arr[$i + 1]) {
        if ($i == 0) {
            echo "Interval [{$arr[$i]},{$arr[$i+1]}]";
        } else {
            echo "Interval ({$arr[$i]},{$arr[$i+1]}]";
        }
        exit;
    }
}

echo "Out of Intervals";
