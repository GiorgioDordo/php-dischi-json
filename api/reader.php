<?php
$music = file_get_contents("db/data-music.json");


header("Content-Type: application/json");
echo $music;