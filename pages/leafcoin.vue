<!-- Home Page -->
<template>
    <div class="d-flex align-center flex-column">
   <v-container>
    <!-- Profile -->
    <v-col align="center">
  <v-avatar icon="mdi-vuetify"
  color="#000000"
  size="45"
  >
  SE
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
 <!-- LeafCoin -->
 <v-col>
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
   </v-card></v-col>
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
   <v-col></v-col>
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
   </v-card>  

   <v-col></v-col>
   <v-card
     class="mx-auto"
     width="400"
     prepend-icon="mdi-home"
   >
     <template v-slot:title>
       Act5
     </template>
 
     <v-card-text>
       Activities 5
     </v-card-text>
   </v-card>  
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
 
 <!-- <v-col>
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
 </v-col> -->
 </v-container>
   </v-container>
   </v-container>
 </div>
 </template>
 
 <script>
 export default {
   name: 'LeafCoinPage'
 }
 </script>
 