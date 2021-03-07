            /* Ejercicio 3: Uploader con AJAX */

const d = document,
  $main = d.querySelector("main"),
  $file = d.getElementById("files");

const upLoader = file => {
    //console.log(file);
    const xhr = new XMLHttpRequest(),
    formData = new FormData();

    formData.append("file",file);

    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);
            console.log(json);

        } else{
            let message = xhr.statusText || "Ocurrió un error."
            console.log(`Error ${xhr.status}: ${message}`);
        }
    });


    xhr.open("POST", "./assets/uploader.php");
    xhr.setRequestHeader("enc-type", "multipart/form-data");
    xhr.send(formData);
}

d.addEventListener("change", e => {
    if(e.target === $file){
        //console.log(e.target.files);
        const files = Array.from(e.target.files);
        files.forEach(elemento => upLoader(elemento)); 
    }
})