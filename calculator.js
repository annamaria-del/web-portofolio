const birthDate = document.getElementById("birthDate");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");
const lifePathNumber = document.getElementById("lifePathNumber");
const lifePathTitle = document.getElementById("lifePathTitle");
const lifePathDescription = document.getElementById("lifePathDescription");

const lifePathData = {
    1: {
        title: "The Leader",
        description: "Angka 1 sering dikaitkan dengan kemandirian, keberanian, dan jiwa kepemimpinan."
    },
    2: {
        title: "The Peacemaker",
        description: "Angka 2 sering dikaitkan dengan kerja sama, kepekaan, dan kemampuan menjaga hubungan."
    },
    3: {
        title: "The Creative",
        description: "Angka 3 sering dikaitkan dengan kreativitas, ekspresi diri, dan kemampuan berkomunikasi."
    },
    4: {
        title: "The Builder",
        description: "Angka 4 sering dikaitkan dengan kedisiplinan, kestabilan, dan kerja keras."
    },
    5: {
        title: "The Adventurer",
        description: "Angka 5 sering dikaitkan dengan kebebasan, perubahan, rasa ingin tahu, dan petualangan."
    },
    6: {
        title: "The Nurturer",
        description: "Angka 6 sering dikaitkan dengan kepedulian, tanggung jawab, dan keharmonisan."
    },
    7: {
        title: "The Seeker",
        description: "Angka 7 sering dikaitkan dengan pemikiran mendalam, introspeksi, dan pencarian pengetahuan."
    },
    8: {
        title: "The Achiever",
        description: "Angka 8 sering dikaitkan dengan ambisi, manajemen, pencapaian, dan orientasi pada tujuan."
    },
    9: {
        title: "The Humanitarian",
        description: "Angka 9 sering dikaitkan dengan empati, kepedulian terhadap sesama, dan idealisme."
    },
    11: {
        title: "The Intuitive",
        description: "Angka 11 dalam numerologi sering disebut master number dan dikaitkan dengan intuisi serta inspirasi."
    },
    22: {
        title: "The Master Builder",
        description: "Angka 22 sering disebut master number dan dikaitkan dengan kemampuan membangun sesuatu yang besar dan terstruktur."
    },
    33: {
        title: "The Master Teacher",
        description: "Angka 33 sering disebut master number dan dikaitkan dengan kasih sayang, pelayanan, dan inspirasi."
    }
};

function calculateLifePath(date) {
    const digits = date.replace(/-/g, "").split("").map(Number);

    let total = digits.reduce((sum, digit) => sum + digit, 0);

    while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
        total = total
            .toString()
            .split("")
            .map(Number)
            .reduce((sum, digit) => sum + digit, 0);
    }

    return total;
}

calculateButton.addEventListener("click", function () {
    if (birthDate.value === "") {
        alert("Silakan masukkan tanggal lahir terlebih dahulu!");
        return;
    }

    const number = calculateLifePath(birthDate.value);
    const data = lifePathData[number];

    lifePathNumber.textContent = number;
    lifePathTitle.textContent = data.title;
    lifePathDescription.textContent = data.description;

    result.classList.remove("hidden");
});
