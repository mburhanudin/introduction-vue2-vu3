<template>
  <h1>Data Pemain</h1>
  <ul>
    <li v-for="pemain in dataPemain" :key="pemain.id">
      <div><strong>Nama :</strong> {{ pemain.name }}</div>
      <div><strong>Posisi :</strong> {{ pemain.posisi }}</div>
      <div style="margin: 15px 0px">
        <strong>Edit Nama :</strong><input type="text" v-model="pemain.name" />
      </div>
      <hr />
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const dataPemain = ref([
      {
        id: 1,
        name: "Manuel Neuer",
        posisi: "GK",
      },
      {
        id: 2,
        name: "David Alaba",
        posisi: "CB",
      },
      {
        id: 3,
        name: "Robert Lewandowski",
        posisi: "CF",
      },
    ]);

    return { dataPemain };
  },
};
</script>
