<template>
<section class="ui">
    <button :class="{'active':currentGroup.label === group.label}" v-for="group in sightWords" @click="currentGroup = group; shuffledSightWords = shuffle(group.list); current = 0; currentWord = shuffledSightWords[0];">{{group.label}}</button>
</section>
  <div @click="changeCurrent">{{currentWord}}</div>
</template>

<script setup>
import { ref } from 'vue'
const sightWords  = [
    {
        label:'Pre Kindergarten',
        list: ['a', 'and', 'away', 'big', 'blue', 'can', 'come', 'down', 'find', 'for', 'funny', 'go', 'help', 'here', 'I', 'in', 'is', 'it', 'jump', 'little', 'look', 'make', 'me', 'my', 'not', 'one', 'play', 'red', 'run', 'said', 'see', 'the', 'three', 'to', 'two', 'up', 'we', 'where', 'yellow', 'you']
    },
    {
        label:'Kindergarten',
        list: ['all', 'am', 'are', 'at', 'ate', 'be', 'black', 'brown', 'but', 'came', 'did', 'do', 'eat', 'four', 'get', 'good', 'have', 'he', 'into', 'like', 'must', 'new', 'no', 'now', 'on', 'our', 'out', 'please', 'pretty', 'ran', 'ride', 'saw', 'say', 'she', 'so', 'soon', 'that', 'there', 'they', 'this', 'too', 'under', 'want', 'was', 'well', 'went', 'what', 'white', 'who', 'will', 'with', 'yes']
    },
    {
        label:'Grade 1',
        list: ['after', 'again', 'an', 'any', 'as', 'ask', 'by', 'could', 'every', 'fly', 'from', 'give', 'going', 'had', 'has', 'her', 'him', 'his', 'how', 'just', 'know', 'let', 'live', 'may', 'of', 'old', 'once', 'open', 'over', 'put', 'round', 'some', 'stop', 'take', 'thank', 'them', 'then', 'think', 'walk', 'were', 'when']
    },
    {
        label:'Grade 2',
        list:['always', 'around', 'because', 'been', 'before', 'best', 'both', 'buy', 'call', 'cold', 'does', 'don’t', 'fast', 'first', 'five', 'found', 'gave', 'goes', 'green', 'its', 'made', 'many', 'off', 'or', 'pull', 'read', 'right', 'sing', 'sit', 'sleep', 'tell', 'their', 'these', 'those', 'upon', 'us', 'use', 'very', 'wash', 'which', 'why', 'wish', 'work', 'would', 'write', 'your']
    },
    {
        label:'Grade 3',
        list:['about', 'better', 'bring', 'carry', 'clean', 'cut', 'done', 'draw', 'drink', 'eight', 'fall', 'far', 'full', 'got', 'grow', 'hold', 'hot', 'hurt', 'if', 'keep', 'kind', 'laugh', 'light', 'long', 'much', 'myself', 'never', 'only', 'own', 'pick', 'seven', 'shall', 'show', 'six', 'small', 'start', 'ten', 'today', 'together', 'try', 'warm']
    },
    {
        label:'Nouns',
        list:['apple', 'baby', 'back', 'ball', 'bear', 'bed', 'bell', 'bird', 'birthday', 'boat', 'box', 'boy', 'bread', 'brother', 'cake', 'car', 'cat', 'chair', 'chicken', 'children', 'Christmas', 'coat', 'corn', 'cow', 'day', 'dog', 'doll', 'door', 'duck', 'egg', 'eye', 'farm', 'farmer', 'father', 'feet', 'fire', 'fish', 'floor', 'flower', 'game', 'garden', 'girl', 'goodbye', 'grass', 'ground', 'hand', 'head', 'hill', 'home', 'horse', 'house', 'kitty', 'leg', 'letter', 'man', 'men', 'milk', 'money', 'morning', 'mother', 'name', 'nest', 'night', 'paper', 'party', 'picture', 'pig', 'rabbit', 'rain', 'ring', 'robin', 'Santa', 'Claus', 'school', 'seed', 'sheep', 'shoe', 'sister', 'snow', 'song', 'squirrel', 'stick', 'street', 'sun', 'table', 'thing', 'time', 'top', 'toy', 'tree', 'watch', 'water', 'way', 'wind', 'window', 'wood']
    }
    
];
let current = ref(0);
let currentGroup = ref(sightWords[0]);
let shuffledSightWords = shuffle(currentGroup.value.list);
let currentWord = ref(shuffledSightWords[0]);
function shuffle(array) {
    console.log(array)
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
    if(current.value == currentGroup.value.list.length) {
        current.value = 0;
        shuffledSightWords = shuffle(currentGroup.value.list);
    }
    currentWord.value = shuffledSightWords[current.value];
}
</script>

<style lang="scss" scoped>
.ui {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    justify-content: center;
    button {
        padding:12px;
        font-size: 1.2rem;
        &.active {
            opacity: 1;
            background:#2c3e50;
            color:#fff;
        }
    }
}
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