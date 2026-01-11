<?php

$input = trim(fgets(STDIN));

if (is_numeric($input)) {
    echo "IS DIGIT";
}else {
    echo "ALPHA\n";
    if (ctype_upper($input)) {
        echo "IS CAPITAL";
    } else { // ctype_lower
        echo "IS SMALL";
    }

} 

