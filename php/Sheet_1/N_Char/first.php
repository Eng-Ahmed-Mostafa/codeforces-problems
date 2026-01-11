<?php
$input = trim(fgets(STDIN));
$aCode = ord($input);
$result = "";

if ($aCode < 97) {
    $result = chr($aCode + 32);
} else {
    $result = chr($aCode - 32);
}

echo $result;