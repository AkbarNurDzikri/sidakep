"use client";

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { ISuketDomisili } from "../form-config/i-suket-domisili";

// Styling
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
  },
  header: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subHeader: {
    textAlign: "center",
    fontSize: 10,
    marginBottom: 8,
  },
  underline: {
    marginVertical: 10,
    borderBottom: "1 solid black",
  },
  title: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    textDecoration: "underline",
    marginBottom: 2,
  },
  titleNumber: {
    textAlign: "center",
    marginBottom: 12,
  },
  section: {
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  cellLabel: {
    width: "35%",
    fontWeight: "bold",
  },
  cellValue: {
    width: "65%",
  },
  paragraph: {
    marginBottom: 12,
    textAlign: "justify",
  },
  boldNote: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

const formatDate = (birthDate?: Date | string) => {
  if (!birthDate) return "";
  const date = new Date(birthDate);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const SuketDomisiliPDF = ({ data }: { data: ISuketDomisili }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text>KETUA RT 025 RW 011</Text>
        <Text>PERUM MAP</Text>
        <Text>DESA PASIRJENGKOL</Text>
      </View>
      <Text style={styles.subHeader}>
        Jl. Manunggal XIX Pasir Ela No... Tlp. (0267) ....Kode Pos 41355
        KARAWANG
      </Text>
      <View style={styles.underline} />

      {/* Judul */}
      <Text style={styles.title}>SURAT KETERANGAN</Text>
      <Text style={styles.titleNumber}>Nomor: 005 / RT / PSJ / VI / 2025</Text>

      {/* Pembuka */}
      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Yang bertandatangan di bawah ini Ketua RT 25 Perumahan Mutiara Alam
          Permai Desa Pasirjengkol Kecamatan Majalaya Kabupaten Karawang, dengan
          ini menerangkan bahwa:
        </Text>
      </View>

      {/* Data Diri */}
      <View style={styles.section}>
        {[
          ["Nama", data.name],
          ["KTP/NIK", data.nationId],
          ["Jenis Kelamin", data.gender],
          [
            "Tempat, Tanggal Lahir",
            `${data.birthPlace}, ${formatDate(data.birthDate)}`,
          ],
          ["Agama", data.religion],
          ["Status Perkawinan", data.maritalStatus],
          ["Pekerjaan", data.occupation],
        ].map(([label, value]) => (
          <View style={styles.row} key={label}>
            <Text style={styles.cellLabel}>{label}</Text>
            <Text style={styles.cellValue}>: {value}</Text>
          </View>
        ))}
      </View>

      {/* Alamat Lama */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.cellLabel}>Alamat Sebelum</Text>
          <Text style={styles.cellValue}>
            : {data.oldAddress}, RT {data.oldRT} RW {data.oldRW}
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "37%",
            },
          ]}
        >
          <Text>
            Kel. {data.oldKel}, Kec. {data.oldKec}
          </Text>
          <Text>
            Kab. {data.oldKab}, Prov. {data.oldProv}
          </Text>
        </View>
      </View>

      {/* Alamat Sekarang */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.cellLabel}>Alamat Sekarang</Text>
          <Text style={styles.cellValue}>
            : {data.newAddress}, RT {data.newRT} RW {data.newRW}
          </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "37%",
            },
          ]}
        >
          <Text>
            Kel. {data.newKel}, Kec. {data.newKec}
          </Text>
          <Text>
            Kab. {data.newKab}, Prov. {data.newProv}
          </Text>
        </View>
      </View>

      {/* Keterangan */}
      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Nama tersebut di atas benar saat ini tinggal di lingkungan kami RT 25
          RW 11 Dusun Babakan Cirangon Desa Pasirjengkol Kecamatan Majalaya
          Kabupaten Karawang.
        </Text>

        <Text style={styles.boldNote}>
          Surat Keterangan ini berlaku 3 (tiga) bulan sejak tanggal dikeluarkan.
        </Text>

        <Text style={styles.paragraph}>
          Demikian Surat Keterangan ini kami buat dengan sebenarnya dan dapat
          dipergunakan sebagaimana mestinya. Bagi pihak yang berkepentingan agar
          menjadi tahu dan maklum adanya.
        </Text>
      </View>
    </Page>
  </Document>
);
