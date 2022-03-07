<template>
  <div @click="changeCurrent">{{shuffledSightWords[current]}}</div>
</template>

<script setup>
import { ref } from 'vue'
const sightWords  = [
    'like',
    'a',
    'i',
    'he',
    'and',
    'in',
    'that',
    'of',
    'is',
    'it',
    'to',
    'can',
    'the',
    'was',
    'big',
    'no',
    'he',
    'said',
    'go',
    'my',
    'and',
    'yes',
    'he',
    'seen',
    'went'
];
let shuffledSightWords = shuffle(sightWords);
let current = ref(0);

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function changeCurrent(){
    current.value++;
    if(current.value == shuffledSightWords.length) {
        current.value = 0;
        shuffledSightWords = shuffle(sightWords);
    }
}
</script>

<style lang="scss" scoped>
div {
    position: absolute;
    top:0;
    left:0;
    display:flex;
    width:100%;
    height:100%;
    align-items: center;
    justify-content: center;
    font-size: 10em;
    user-select: none;    
    @media (min-width:500px) {
        font-size: 20em;
    }
    @media (min-width:500px) {
        font-size: 25em;
    }
}

</style>