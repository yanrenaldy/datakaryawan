import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import axios from "axios";
import ColoredLine from "../../components/ColoredLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function ViewData() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dataDiri, setdataDiri] = useState([]);
  const [dataPendidikan, setdataPendidikan] = useState([]);
  const [dataPekerjaan, setdataPekerjaan] = useState([]);
  const [dataRiwayatPekerjaan, setdataRiwayatPekerjaan] = useState([]);
  const [dataSusunanKeluarga, setdataSusunanKeluarga] = useState([]);
  const [pasFoto, setpasFoto] = useState([]);
  const dataState = {
    tingkat: location.state.tingkat,
    nama: location.state.nama,
  };

  useEffect(() => {
    let isMounted = true;
    axios
      .get(API_URL + "datadiri/" + dataState.nama)
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataDiri(data);
      });
    axios
      .get(API_URL + "datapendidikan/" + dataState.nama)
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataPendidikan(data);
      });
    axios
      .get(API_URL + "datapekerjaan/" + dataState.nama)
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataPekerjaan(data);
      });
    axios
      .get(API_URL + "datariwayatpekerjaan/" + dataState.nama)
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataRiwayatPekerjaan(data);
      });
    axios
      .get(API_URL + "datasusunankeluarga/" + dataState.nama)
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataSusunanKeluarga(data);
      });
    axios
      .get(API_URL + "pasfoto/" + dataState.nama)
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setpasFoto(data);
      });
    return () => {
      isMounted = false;
    };
  }, [dataState.nama]);

  const nonAktifkan = () => {
    Swal.fire({
      title: "Yakin untuk menonaktifkan?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          tglNonAktif: "(" + new Date().toLocaleString() + ")",
          nama: dataState.nama,
          disable: true,
        };
        axios
          .put(API_URL + "datapekerjaan/" + dataState.nama, data)
          .then((res) => {
            Swal.fire("Saved!", "", "success").then((res) => {
              window.location.reload();
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Perubahan data dibatalkan", "", "info");
      }
    });
  };

  const hapusItem = () => {
    Swal.fire({
      title: "Yakin untuk menghapus?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(API_URL + "datadiri/" + dataState.nama).catch((error) => {
          console.log(error);
        });

        axios
          .delete(API_URL + "datapekerjaan/" + dataState.nama)
          .catch((error) => {
            console.log(error);
          });

        axios
          .delete(API_URL + "datapendidikan/" + dataState.nama)
          .catch((error) => {
            console.log(error);
          });

        axios
          .delete(API_URL + "datariwayatpekerjaan/" + dataState.nama)
          .catch((error) => {
            console.log(error);
          });

        axios
          .delete(API_URL + "datasusunankeluarga/" + dataState.nama)
          .then((res) => {
            Swal.fire("Berhasil dihapus!", "", "success").then((res) => {
              navigate("/datakaryawan", { state: dataState.tingkat });
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Perubahan data dibatalkan", "", "info");
      }
    });
  };

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
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() =>
              navigate("/datakaryawan", { state: dataState.tingkat })
            }
          />
        </Col>
        <Col xs={10}>
          <h5>Data {dataState.nama}</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          {dataDiri.map((dataDiri, index) => (
            <div>
              <h5 className="mt-3">Data Pribadi</h5>
              <Row key={index}>
                <Col sm={2} xs={3} className="mb-3">
                  Nama
                </Col>
                <Col sm={8} xs={9} className="mb-3">
                  : {dataDiri.nama}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  Jenis Kelamin
                </Col>
                <Col sm={8} xs={9} className="mb-3">
                  : {dataDiri.jenisKelamin}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  Status
                </Col>
                <Col sm={8} xs={9} className="mb-3">
                  : {dataDiri.status}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  TTL
                </Col>
                <Col sm={10} xs={9} className="mb-3">
                  : {dataDiri.tempatLahir}, {dataDiri.tanggalLahir}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  Alamat
                </Col>
                <Col sm={10} xs={9} className="mb-3">
                  : {dataDiri.alamat}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  NIK
                </Col>
                <Col sm={10} xs={9} className="mb-3">
                  : {dataDiri.nik}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  No Handphone
                </Col>
                <Col sm={10} xs={9} className="mb-3">
                  : 0{dataDiri.noHP}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  Nama Ayah
                </Col>
                <Col sm={10} xs={9} className="mb-3">
                  : {dataDiri.namaAyah}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  Nama Ibu
                </Col>
                <Col sm={10} xs={9} className="mb-3">
                  : {dataDiri.namaIbu}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3}>
                  Alamat Orangtua
                </Col>
                <Col sm={10} xs={9}>
                  : {dataDiri.alamatOrtu}
                </Col>
              </Row>

              <ColoredLine color="black" />
            </div>
          ))}
          {dataPekerjaan.map((dataPekerjaan, index) => (
            <div>
              <Row key={index}>
                <Col className="mb-3">
                  <h5>Keterangan Pekerjaan</h5>
                </Col>
              </Row>
              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  No. SK Pertama
                </Col>
                <Col sm={10} xs={9} className="mb-3">
                  : {dataPekerjaan.noSkPertama}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3} className="mb-3">
                  Jabatan
                </Col>
                <Col sm={10} xs={9} className="mb-3">
                  : {dataPekerjaan.jabatan}
                </Col>
              </Row>

              <Row>
                <Col sm={2} xs={3}>
                  Status Pekerjaan
                </Col>
                <Col sm={10} xs={9}>
                  : {dataPekerjaan.statusPekerjaan} {dataPekerjaan.tglNonAktif}
                </Col>
              </Row>
            </div>
          ))}
        </Col>

        <Col sm={2}>
          <Row>
            <Col xs={3}></Col>
            {pasFoto.map((pasFoto, index) => (
              <Col xs={6} sm={12} key={index}>
                <Image
                  src={pasFoto.userimg}
                  className="user-img mt-3"
                  rounded
                  fluid
                />
              </Col>
            ))}
            <Col xs={3}></Col>
          </Row>
          <Row>
            <Col>
              {dataPekerjaan.map((dataPekerjaan, index) => (
                <div className="d-grid gap-2 mt-2" key={index}>
                  <Button
                    variant="primary"
                    onClick={() =>
                      navigate("/uploadimg", {
                        state: {
                          nama: dataState.nama,
                          tingkat: dataState.tingkat,
                        },
                      })
                    }
                  >
                    Upload Foto
                  </Button>
                  <Button
                    variant="primary"
                    onClick={nonAktifkan}
                    disabled={dataPekerjaan.disable}
                  >
                    Nonaktifkan
                  </Button>
                  <Button variant="danger" onClick={hapusItem}>
                    Hapus
                  </Button>
                </div>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>

      {dataPendidikan.map((dataPendidikan, index) => (
        <div key={index}>
          <ColoredLine color="black" />
          <h5>Pendidikan</h5>
          <h6>Formal</h6>
          <Table>
            <thead>
              <tr>
                <th>Tingkat Pendidikan</th>
                <th>Nama Sekolah/Universitas</th>
                <th>Jurusan</th>
                <th>No Ijazah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TK</td>
                <td>{dataPendidikan.namaTK}</td>
                <td>-</td>
                <td>{dataPendidikan.noIjazahTK}</td>
              </tr>
              <tr>
                <td>SD</td>
                <td>{dataPendidikan.namaSD}</td>
                <td>-</td>
                <td>{dataPendidikan.noIjazahSD}</td>
              </tr>
              <tr>
                <td>SMP</td>
                <td>{dataPendidikan.namaSMP}</td>
                <td>-</td>
                <td>{dataPendidikan.noIjazahSMP}</td>
              </tr>
              <tr>
                <td>SMA</td>
                <td>{dataPendidikan.namaSMA}</td>
                <td>{dataPendidikan.jurusanSMA}</td>
                <td>{dataPendidikan.noIjazahSMA}</td>
              </tr>
              <tr>
                <td>S1</td>
                <td>{dataPendidikan.namaS1}</td>
                <td>{dataPendidikan.jurusanS1}</td>
                <td>{dataPendidikan.noIjazahS1}</td>
              </tr>
              <tr>
                <td>S2</td>
                <td>{dataPendidikan.namaS2}</td>
                <td>{dataPendidikan.jurusanS2}</td>
                <td>{dataPendidikan.noIjazahS2}</td>
              </tr>
            </tbody>
          </Table>

          <h6>Non Formal</h6>
          <Table>
            <thead>
              <tr>
                <th>Tahun</th>
                <th>Jenis Kegiatan</th>
                <th>Tempat Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dataPendidikan.nonFormal1}</td>
                <td>{dataPendidikan.jenisNonFormal1}</td>
                <td>{dataPendidikan.tempatNonFormal1}</td>
              </tr>
              <tr>
                <td>{dataPendidikan.nonFormal2}</td>
                <td>{dataPendidikan.jenisNonFormal2}</td>
                <td>{dataPendidikan.tempatNonFormal2}</td>
              </tr>
              <tr>
                <td>{dataPendidikan.nonFormal3}</td>
                <td>{dataPendidikan.jenisNonFormal3}</td>
                <td>{dataPendidikan.tempatNonFormal3}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}

      {dataRiwayatPekerjaan.map((dataRiwayatPekerjaan, index) => (
        <div key={index}>
          <ColoredLine color="black" />
          <h5 className="mt-3">Riwayat Pekerjaan</h5>

          <Table bordered hover>
            <thead>
              <tr>
                <th>Thn s/d Thn</th>
                <th>Jabatan</th>
                <th>Nama Perusahaan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dataRiwayatPekerjaan.tahunPekerjaanE1}</td>
                <td>{dataRiwayatPekerjaan.jabatanE1}</td>
                <td>{dataRiwayatPekerjaan.namaPerusahaanE1}</td>
              </tr>
              <tr>
                <td>{dataRiwayatPekerjaan.tahunPekerjaanE2}</td>
                <td>{dataRiwayatPekerjaan.jabatanE2}</td>
                <td>{dataRiwayatPekerjaan.namaPerusahaanE2}</td>
              </tr>
              <tr>
                <td>{dataRiwayatPekerjaan.tahunPekerjaanE3}</td>
                <td>{dataRiwayatPekerjaan.jabatanE3}</td>
                <td>{dataRiwayatPekerjaan.namaPerusahaanE3}</td>
              </tr>
              <tr>
                <td>{dataRiwayatPekerjaan.tahunPekerjaanE4}</td>
                <td>{dataRiwayatPekerjaan.jabatanE4}</td>
                <td>{dataRiwayatPekerjaan.namaPerusahaanE4}</td>
              </tr>
              <tr>
                <td>{dataRiwayatPekerjaan.tahunPekerjaanE5}</td>
                <td>{dataRiwayatPekerjaan.jabatanE5}</td>
                <td>{dataRiwayatPekerjaan.namaPerusahaanE5}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}

      {dataSusunanKeluarga.map((dataSusunanKeluarga, index) => (
        <div key={index}>
          <ColoredLine color="black" />
          <h5 className="mt-3">Susuan Keluarga</h5>
          <h6>1. Suami/Istri</h6>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Tempat Tanggal Lahir</th>
                <th>Tanggal Menikah</th>
                <th>Gereja</th>
                <th>Alamat</th>
                <th>Pekerjaan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dataSusunanKeluarga.namaSuamiIstri}</td>
                <td>
                  {dataSusunanKeluarga.tempatLahir},{" "}
                  {dataSusunanKeluarga.tanggalLahir}
                </td>
                <td>{dataSusunanKeluarga.tglMenikah}</td>
                <td>{dataSusunanKeluarga.gereja}</td>
                <td>{dataSusunanKeluarga.alamatSI}</td>
                <td>{dataSusunanKeluarga.pekerjaanSI}</td>
              </tr>
            </tbody>
          </Table>
          <h6>2. Anak</h6>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Nama Anak</th>
                <th>Tempat Tanggal Lahir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dataSusunanKeluarga.anak1}</td>
                <td>{dataSusunanKeluarga.ttlanak1}</td>
              </tr>
              <tr>
                <td>{dataSusunanKeluarga.anak2}</td>
                <td>{dataSusunanKeluarga.ttlanak2}</td>
              </tr>
              <tr>
                <td>{dataSusunanKeluarga.anak3}</td>
                <td>{dataSusunanKeluarga.ttlanak3}</td>
              </tr>
              <tr>
                <td>{dataSusunanKeluarga.anak4}</td>
                <td>{dataSusunanKeluarga.ttlanak4}</td>
              </tr>
              <tr>
                <td>{dataSusunanKeluarga.anak5}</td>
                <td>{dataSusunanKeluarga.ttlanak5}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
}

export default ViewData;
