<!-- Home Page -->
<template>
   <div class="d-flex align-center flex-column">
  <v-container>
  <v-col align="center">
  <v-avatar
  color="#000000"
  size="40">
  <img
        src="/v.png"
        alt="Vuetify.js"
        class="mx-auto"
  >
    </v-avatar>
    <v-row>
      <v-col>
    <p class="text-center text-button mx-5">
    My Carbon   
  </p>
  <p class="text-center text-subtitle-2 mx-5">
    6731503000   
  </p>
</v-col>
</v-row>
  </v-col>  

  <v-col></v-col>
  <!-- Carbon Point -->
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
  >
  <v-col>
  <p class="text-center text-button">
    My Carbon
    
  </p>

  <p class="text-center text-h4 font-weight-black my-auto">
   99,999
  </p>
</v-col>
  
  </v-card>
    <v-col>
<!-- LeafCoin -->
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
    color="#39B54A"
  >
    <template v-slot:title>
      Leaf Coin
    </template>

    <v-card-text>
      Leaf Coin
    </v-card-text>
  </v-card>
</v-col>
<!-- PunPoint -->
<v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
    color="#FFCA28"
  >
    <template v-slot:title>
      Pun Point
    </template>

    <v-card-text>
      Pun Point
    </v-card-text>
  </v-card>
  <!-- Activities -->
        <v-container>
        <!-- <v-col> -->
          
          <v-sheet 
          class="pa-6 text-white mx-auto"
          border="md"
          color= "#9CCC65"
          height="auto" 
          width="400"  
          rounded="lg">
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
  >
    <template v-slot:title>
      Act1
    </template>

    <v-card-text>
      Activities 1
    </v-card-text>
  </v-card>
  <v-col></v-col>
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
  >
    <template v-slot:title>
      Act2
    </template>

    <v-card-text>
      Activities 2
    </v-card-text>
  </v-card>  
  <v-col></v-col>
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
  >
    <template v-slot:title>
      Act3
    </template>

    <v-card-text>
      Activities 3
    </v-card-text>
  </v-card> 
  <!-- <v-col></v-col>
  <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
  >
    <template v-slot:title>
      Act4
    </template>

    <v-card-text>
      Activities 4
    </v-card-text>
  </v-card>   -->
  </v-sheet>


  <!-- Botton -->
  <v-container class="text-center">
<v-col>
  <v-btn
    class="mx-auto"
    width="400"
    height="40"
    rounded="lg"
    prepend-icon="mdi-home"
    color="#499745"
  >
   History
  </v-btn>
</v-col>

<v-col>
  <v-btn
    class="mx-auto"
    width="400"
    height="40"
    rounded="lg"
    prepend-icon="mdi-home"
    color="#499745"
  >
   Management
  </v-btn>
</v-col>
</v-container>
  </v-container>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
