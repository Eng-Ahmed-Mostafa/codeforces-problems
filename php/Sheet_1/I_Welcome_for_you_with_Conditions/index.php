<?php
$input = trim(fgets(STDIN));
list($a, $b) = array_map('intval', explode(' ', $input));
$result = max($a, $b);
if ($result <= $a) {
    echo "Yes\n";
} else {
    echo "No\n";
}