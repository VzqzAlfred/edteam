            /* Ejercicio 5: Uploader Drag & Drop con AJAX y PHP */

const d = document,
  $main = d.querySelector("main"),
  $dropZone = d.querySelector(".drop-zone");


const upLoader = file => {
    //console.log(file);
    const xhr = new XMLHttpRequest(),
    formData = new FormData();

    formData.append("file",file);

    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

        } else{
            let message = xhr.statusText || "Ocurrió un error."
            console.log(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open("POST", "./assets/uploader.php");
    xhr.setRequestHeader("enc-type", "multipart/form-data");
    xhr.send(formData);
}


const progressUpload = file => {
    const $progress = d.createElement("progress"),
    $span = d.createElement("span");

    $progress.value = 0;
    $progress.max = 100;

    $main.insertAdjacentElement("beforeend", $progress);
    $main.insertAdjacentElement("beforeend", $span);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("progress", e => {
        //console.log(e);
        let progress = parseInt((e.loaded * 100) / e.total);
        $progress.value = progress;
        $span.innerHTML = `<b>${file.name} -- ${progress}%</b>`
    });

    fileReader.addEventListener("loadend", e => {
        upLoader(file);
        setTimeout(() => {
            $main.removeChild($progress);
            $main.removeChild($span);
        }, 5000);
    });
}


$dropZone.addEventListener("dragover", e => {
    //console.log(e)
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("is-active");
});

$dropZone.addEventListener("dragleave", e => {
    //console.log(e);
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("is-active")
});

$dropZone.addEventListener("drop", e => {
    //console.log(e);
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("is-active")

    const files = Array.from(e.dataTransfer.files);

    files.forEach( el => {
        progressUpload(el);
    } )
});