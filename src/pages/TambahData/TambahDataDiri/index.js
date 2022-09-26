import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function TambahDataDiri() {
  const navigate = useNavigate();
  const [dataDiri, setdataDiri] = useState({
    nama: "",
    jenisKelamin: "",
    status: "",
    tempatLahir: "",
    tanggalLahir: "2000-08-17",
    alamat: "",
    nik: "",
    noHP: "",
    namaAyah: "",
    namaIbu: "",
    alamatOrtu: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setdataDiri((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/tambahdatapendidikan", {state: dataDiri})
  }

  return (
    <div>
      <Row
        style={{
          paddingTop: "25px",
          marginLeft: "-20px",
          paddingLeft: "15px",
          paddingBottom: "20px",
          backgroundColor: "aqua",
        }}
      >
        <Col xs={1}>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
        </Col>
        <Col xs={10}>
          <h5>Tambah Data</h5>
        </Col>
      </Row>

      <div style={{ padding: "15px" }}>
        <form onSubmit={onSubmit}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <h5 className="mt-4">Data Diri</h5>
            <Grid item sm={12} xs={12}>
              <TextField
                required
                id="nama"
                name="nama"
                label="Nama"
                fullWidth
                variant="standard"
                inputProps={{ maxLength: 200 }}
                value={dataDiri.nama}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="jenisKelamin">Jenis Kelamin</InputLabel>
                <Select
                  labelId="jenisKelamin-label"
                  id="jenisKelamin"
                  name="jenisKelamin"
                  variant="standard"
                  value={dataDiri.jenisKelamin}
                  onChange={onChange}
                >
                  <MenuItem value="Laki-Laki">Laki-Laki</MenuItem>
                  <MenuItem value="Perempuan">Perempuan</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="status">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  name="status"
                  variant="standard"
                  value={dataDiri.status}
                  onChange={onChange}
                >
                  <MenuItem value="Belum Menikah">Belum Menikah</MenuItem>
                  <MenuItem value="Menikah">Menikah</MenuItem>
                  <MenuItem value="Cerai Mati">Cerai Mati</MenuItem>
                  <MenuItem value="Cerai Hidup">Cerai Hidup</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="tempatLahir"
                name="tempatLahir"
                label="Tempat Lahir"
                inputProps={{ maxLength: 150 }}
                fullWidth
                variant="standard"
                value={dataDiri.tempatLahir}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="tanggalLahir"
                label="Tanggal Lahir"
                name="tanggalLahir"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                value={dataDiri.tanggalLahir}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                required
                multiline
                rows={3}
                id="alamat"
                name="alamat"
                label="Alamat"
                inputProps={{ maxLength: 300 }}
                fullWidth
                variant="standard"
                value={dataDiri.alamat}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="nik"
                name="nik"
                label="NIK/No. KTP"
                fullWidth
                type="number"
                variant="standard"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 20);
                }}
                value={dataDiri.nik}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="noHP"
                name="noHP"
                label="No Handphone"
                fullWidth
                type="number"
                variant="standard"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 20);
                }}
                value={dataDiri.noHP}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="namaAyah"
                name="namaAyah"
                label="Nama Ayah"
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
                value={dataDiri.namaAyah}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="namaIbu"
                name="namaIbu"
                label="Nama Ibu"
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
                value={dataDiri.namaIbu}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                required
                multiline
                rows={3}
                id="alamatOrtu"
                name="alamatOrtu"
                variant="standard"
                label="Alamat Orang Tua"
                fullWidth
                inputProps={{ maxLength: 300 }}
                value={dataDiri.alamatOrtu}
                onChange={onChange}
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mb-3 mt-4 "
            >
              Selanjutnya
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default TambahDataDiri;
