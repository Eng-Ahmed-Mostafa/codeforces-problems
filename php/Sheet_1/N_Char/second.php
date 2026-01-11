<?php
$input = trim(fgets(STDIN));

if(ctype_upper($input)) {
    echo strtolower($input);
} else {
    echo strtoupper($input);
}