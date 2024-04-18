const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "fir-test-a9528.firebaseapp.com",
    projectId: "fir-test-a9528",
    storageBucket: "fir-test-a9528.appspot.com",
    messagingSenderId: "629505375898",
    appId: "1:629505375898:web:f9caabf91c52c50950e923",
    measurementId: "G-RC1J39M158"
    };

    const app = firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage();

    const inp = document.querySelector(".inp");
    const progressbar = document.querySelector(".progress");
    const img = document.querySelector(".img");
    const img2 = document.querySelector(".img2");
    const img3 = document.querySelector(".img3");
    const fileData = document.querySelector(".filedata");
    const loading = document.querySelector(".loading");
    const loading2 = document.querySelector(".loading2");
    const loading3 = document.querySelector(".loading3");
    let file;
    let fileName;
    let progress;
    let isLoading = false;
    let uploadedFileName;

    const selectImage = () => {
    inp.click();
    };

    const getImageData = (e) => {
    file = e.target.files[0];
    fileName = Math.round(Math.random() * 9999) + file.name;
    if (fileName) {
        fileData.style.display = "block";
    }
    fileData.innerHTML = fileName;
    };

    const uploadImage = () => {
    loading.style.display = "block";
    const storageRef = storage.ref().child("myimages");
    const folderRef = storageRef.child(fileName);
    const uploadtask = folderRef.put(file);

    uploadtask.on(
        "state_changed",
        (snapshot) => {
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress = Math.round(progress);
        progressbar.style.width = progress + "%";
        progressbar.innerHTML = progress + "%";
        uploadedFileName = snapshot.ref.name;
        },
        (error) => {
        console.log(error);
        },
        () => {
        storage
            .ref("myimages")
            .child(uploadedFileName)
            .getDownloadURL()
            .then((url) => {
            localStorage.setItem("uploadedImageUrl", url); 
            img.setAttribute("src", url);
            loading.style.display = "none";
            })
            .catch((error) => {
            console.error('Error getting download URL:', error);
            });
        }
    );
    };

    const uploadImage2 = () => {
        loading2.style.display = "block";
        const storageRef = storage.ref().child("myimages");
        const folderRef = storageRef.child(fileName);
        const uploadtask = folderRef.put(file);

        uploadtask.on(
            "state_changed",
            (snapshot) => {
            progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progress = Math.round(progress);
            progressbar.style.width = progress + "%";
            progressbar.innerHTML = progress + "%";
            uploadedFileName = snapshot.ref.name;
            },
            (error) => {
            console.log(error);
            },
            () => {
            storage
                .ref("myimages")
                .child(uploadedFileName)
                .getDownloadURL()
                .then((url) => {
                localStorage.setItem("uploadedImageUrl2", url); 
                img2.setAttribute("src", url);
                loading2.style.display = "none";
                })
                .catch((error) => {
                console.error('Error getting download URL:', error);
                });
            }
        );
    };


    const uploadImage3 = () => {
        loading3.style.display = "block";
        const storageRef = storage.ref().child("myimages");
        const folderRef = storageRef.child(fileName);
        const uploadtask = folderRef.put(file);

        uploadtask.on(
            "state_changed",
            (snapshot) => {
            progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progress = Math.round(progress);
            progressbar.style.width = progress + "%";
            progressbar.innerHTML = progress + "%";
            uploadedFileName = snapshot.ref.name;
            },
            (error) => {
            console.log(error);
            },
            () => {
            storage
                .ref("myimages")
                .child(uploadedFileName)
                .getDownloadURL()
                .then((url) => {
                localStorage.setItem("uploadedImageUrl3", url); 
                img3.setAttribute("src", url);
                loading3.style.display = "none";
                })
                .catch((error) => {
                console.error('Error getting download URL:', error);
                });
            }
        );
    };    

    // 페이지 로드 시 로컬 스토리지에서 이미지 URL을 가져와서 이미지 표시
    window.onload = function() {
        const uploadedImageUrl = localStorage.getItem("uploadedImageUrl");
        if (uploadedImageUrl) {
            img.setAttribute("src", uploadedImageUrl);
        }
        
        const uploadedImageUrl2 = localStorage.getItem("uploadedImageUrl2");
        if (uploadedImageUrl2) {
            img2.setAttribute("src", uploadedImageUrl2);
        }

        const uploadedImageUrl3 = localStorage.getItem("uploadedImageUrl3");
        if (uploadedImageUrl3) {
            img3.setAttribute("src", uploadedImageUrl3);
        }    
    };