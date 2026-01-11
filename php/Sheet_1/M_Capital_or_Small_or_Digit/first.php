<?php

$input = trim(fgets(STDIN));
$aCode = ord($input);

if ($aCode >= 48 && $aCode <= 57) {
    echo "IS DIGIT";
}else {
    echo "ALPHA\n";
    if ($aCode >= 65 && $aCode <= 90) {
        echo "IS CAPITAL";
    }else if($aCode >= 97 && $aCode <= 122) {
        echo "IS SMALL";
    }
}