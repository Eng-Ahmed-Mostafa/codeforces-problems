<?php

$input = trim(fgets(STDIN));
$aCode = ord($input);

if ($aCode < 65) {
    echo "IS DIGIT";
}else {
    echo "ALPHA\n";
    if($aCode < 97) {
        echo "IS CAPITAL";
    }else {
        echo "IS SMALL";
    }
}



