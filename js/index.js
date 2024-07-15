        function peringatan(){
            let namaDepan= document.getElementById("nama-depan").value
            let namaBelakang = document.getElementById("nama-belakang").value
            console.log(namaDepan + " " + namaBelakang)
            let namaLengkap =  namaDepan.concat(" ", namaBelakang);
            document.write("Nama Lengkap anda adalah " + namaLengkap)
        }