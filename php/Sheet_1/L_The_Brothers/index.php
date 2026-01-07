<?php
$input1 = trim(fgets(STDIN));
list($a1, $b1) = explode(' ', $input1);
$input2 = trim(fgets(STDIN));
list($a2, $b2) = explode(' ', $input2);
if ($b1 === $b2) {
    echo "ARE Brothers\n";
} else {
    echo "NOT\n";
}