function submitProject() {

    let name = document.getElementById("input-projectname").value
    let startdate = document.getElementById("start-date").value
    let enddate = document.getElementById("end-date").value
    let description = document.getElementById("input-description").value
    let image = document.getElementById("input-image").value

    if (name === "") {
        return alert('Name harus diisi!')
    } else if (startdate == "") {
        return alert('Tanggal memulai proyek harus diisi!')
    } else if (enddate == "") {
        return alert('Tanggal menyelesaikan proyek harus diisi!')
    } else if (description == "") {
        return alert('Description harus diisi!')
    } else if (image == "") {
        return alert('Masukkan gambar proyek!')
    }

    let insdate = new Date(startdate)
    let inedate = new Date(enddate)

    let waktu = Math.abs(
        inedate.getMonth() -
          insdate.getMonth() +
          12 * (inedate.getFullYear() - insdate.getFullYear())
    )
    
    const nodejs_icon = '<img src="images/nodejs.png">';
    const reactjs_icon = '<img src="images/reactjs.png">';
    const socketio_icon = '<img src="images/socket_io.png">';
    const javascript_icon = '<img src="images/javascript.svg">';

    let nodejs = document.getElementById("node-js").checked ? nodejs_icon : "";
    let socketio = document.getElementById("next-js").checked ? socketio_icon : "";
    let reactjs = document.getElementById("react-js").checked ? reactjs_icon : "";
    let javascript = document.getElementById("typescript").checked ? javascript_icon : "";

    let multitech = document.querySelectorAll(".multitech:checked");
    if (multitech.length === 0) {
    return alert("Pilih Teknologi!");
    }

    image = URL.createObjectURL(image[0]);

    let Data = {
        name,
        waktu,
        description,
        nodejs,
        socketio,
        reactjs,
        javascript,
        image
    }

    console.log(Data)
}