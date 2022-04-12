import React, {useState, useRef} from "react";
import styles from "./FormCodingBootcamp.module.css";

export default function NameForm() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };
  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };
  const suratKesungguhan = useRef("");
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError);
  const regexNama = /^[A-Za-z ]*$/;
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "nama") {
      if (!regexNama.test(value)) {
        setErrorMassage({...errorMassage, [name]: "Nama Lengkap Harus Berupa Huruf"});
      } else {
        setErrorMassage({...errorMassage, [name]: ""});
      }
    }
    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMassage({...errorMassage, [name]: "Email Tidak Sesuai"});
      } else {
        setErrorMassage({...errorMassage, [name]: ""});
      }
    }
    if (name === "noHandphone") {
      if (value.length < 9 || value.length > 14) {
        setErrorMassage({...errorMassage, [name]: "No Handphone Tidak Sesuai"});
      } else {
        setErrorMassage({...errorMassage, [name]: ""});
      }
    }
    setData({...data, [name]: value});
  };

  const handleSubmit = (e) => {
    if (errorMassage.nama !== "" || errorMassage.email !== "" || errorMassage.noHandphone !== "") {
      console.log("HEREEE");
      alert(`Data Pendaftar Tidak Sesuai`);
    } else {
      console.log("HEREE1");
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`);
      resetForm();
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(baseData);
    suratKesungguhan.current.value = "";
    setErrorMassage(baseError);
  };

  return (
    <>
      <h1 style={{textAlign: "center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
      <form onSubmit={handleSubmit} className={styles.centerForm} data-testid="form">
        <label>
          Nama Lengkap:
          <input
            required
            className={styles.input}
            type="text"
            name="nama"
            value={data.nama}
            onChange={handleChange}
            data-testid="nama"
          />
        </label>
        <label>
          Email: <br />
          <input
            required
            className={styles.input}
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            data-testid="email"
          />
        </label>
        <label>
          No Handphone: <br />
          <input
            type="number"
            name="noHandphone"
            value={data.noHandphone}
            onChange={handleChange}
            data-testid="noHandphone"
          />
        </label>
        <label>
          Latar Belakang Pendidikan: <br />
          <input
            required
            type="radio"
            name="pendidikan"
            value="IT"
            checked={data.pendidikan === "IT"}
            onChange={handleChange}
            data-testid="pendidikanIT"
          />
          IT
          <input
            type="radio"
            name="pendidikan"
            value="Non IT"
            checked={data.pendidikan === "Non IT" ? true : false}
            onChange={handleChange}
            data-testid="pendidikanNonIT"
          />
          Non IT
        </label>
        <br />
        <label>
          Kelas Coding yang Dipilih: <br />
          <select required type="text" name="kelas" value={data.kelas} onChange={handleChange}>
            <option disabled value="">
              Pilih Salah Satu Program
            </option>
            <option value="golang" data-testid="golang">
              Coding Backend with Golang
            </option>
            <option value="reactjs" data-testid="reactjs">
              Coding Frontend with ReactJS
            </option>
            <option value="fullstack" data-testid="fullstack">
              Fullstack Developer
            </option>
          </select>
        </label>
        <label>
          Foto Surat Kesungguhan:
          <input
            required
            type="file"
            name="suratKesungguhan"
            ref={suratKesungguhan}
            onChange={handleChange}
            data-testid="fileDropzone"
            id="fileDropzone"
          />
        </label>
        <label>
          Harapan Untuk Coding Bootcamp Ini: <br />
          <textarea
            type="text"
            name="harapan"
            value={data.harapan}
            onChange={handleChange}
            data-testid="text-harapan"
          />
        </label>

        <ul>
          {Object.keys(errorMassage).map((key) => {
            if (errorMassage[key] !== "") {
              return (
                <li className={styles.errorMassage} key={key}>
                  {errorMassage[key]}
                </li>
              );
            }
            return null;
          })}
        </ul>
        <br />
        <br />
        <input type="submit" value="Submit" data-testid="data-submit" />
        <button className={styles.buttonReset} onClick={resetForm}>
          Reset
        </button>
      </form>
    </>
  );
}
