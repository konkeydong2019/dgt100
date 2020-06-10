<?php
$target_dir = "/files/" . $_GET["dir"] . "/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));


if ($_FILES["fileToUpload"]["size"] > 256000000) {
    echo "Max filesize is 256mb";
    $uploadOk = 0;
}

if ($uploadOk == 0 && file_exists($target_file)) {
    echo "Sorry, your file was not uploaded. A file of the same name already exists.";

} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded. Redirecting.";
        sleep(5);
        header('Location: https://konkeydong2019.github.io/dgt100/');
    } else {
        echo "niggerous file detected. compress the image, cunt.";
    }
}



?>