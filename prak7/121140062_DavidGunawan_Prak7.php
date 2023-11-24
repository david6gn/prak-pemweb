<?php

// David Gunawan
// 121140062
// Praktikum Pemweb RB

class orang {
    public $nama;
    public $umur;
    public $kelamin;

    public function __construct($nama, $umur, $kelamin) {
        $this->nama = $nama;
        $this->umur = $umur;
        $this->kelamin = $kelamin;
    }

}

class mahasiswa extends orang {
    public $nim;

    public function __construct($nama, $umur, $kelamin ,$nim) {
        parent::__construct($nama, $umur, $kelamin);
        $this->nim = $nim;
    }


    public function infomahasiswa() {
        echo "Nama: {$this->nama} <br>";
        echo "Umur: {$this->umur} <br>";
        echo "Kelamin : {$this->kelamin} <br>";
        echo "NIM: {$this->nim} <br>";
    }

    public function updateNIM($nimbaru) {
        if (is_int($nimbaru)) {
            $this->nim = (int)$nimbaru;
        } else {
            throw new InvalidArgumentException("NIM yang sudah diinputkan bukan sebuah angka!");
        }
    }

    public function lihatNIM() {
        return $this->nim;
    }
}

$listmahasiswa = array();

$mahasiswa1 = new mahasiswa("David", 20, "laki-laki", 121140062);
$mahasiswa2 = new mahasiswa("Richard", 21, "laki-laki", 121140035);
$mahasiswa3 = new mahasiswa("Andreas", 22, "laki-laki", 121140017);
$mahasiswa4 = new mahasiswa("Yanti", 20, "perempuan", 121140120);

$listmahasiswa[] = $mahasiswa1;
$listmahasiswa[] = $mahasiswa2;
$listmahasiswa[] = $mahasiswa3;
$listmahasiswa[] = $mahasiswa4;


foreach ($listmahasiswa as $mahasiswa) {
    $mahasiswa->infomahasiswa();
    echo "<br>";
}

echo("Handling Error<br>");
echo("Update NIM Yanti dengan integer<br>");
try {
    $listmahasiswa[3]->updateNIM(121140085);
    echo ("NIM baru : " . $listmahasiswa[3]->lihatNIM());
} catch(Exception $e) {
    echo ("Error: ". $e->getMessage());
}
echo("<br><br>Update NIM Yanti dengan string<br>");
try {
    $listmahasiswa[3]->updateNIM("121140085");
    echo ("NIM baru : " . $listmahasiswa[3]->lihatNIM());
} catch(InvalidArgumentException $e) {
    echo ("Error: ". $e->getMessage());
}

echo("<br><br>Coba-coba regex");
$htmltext = '<p>Ini teks berwarna <span style="color: blue;">Biru</span><p>';
echo $htmltext;

$regex = '/<span style="color:\s*([^"]+)">/';
$newcolor = "red";
$regex1 = '/Biru/';
echo ("Ini teks yang sudah di regex replace teks dan warna");
$newhtmltext = preg_replace($regex, '<span style="color: '. $newcolor . ';">', $htmltext);
$newhtmltext = preg_replace($regex1, 'Merah', $newhtmltext);
echo $newhtmltext;
?>
