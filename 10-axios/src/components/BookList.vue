<template>
    <div>
        <input type="text" placeholder="Search by title" v-model="search_title"/>
        <ul>
            <li v-for="(b,i) in results" v-bind:key='i'>{{b.title}}</li>
        </ul>
        <h2>Total page count of all search results = {{totalPages}}</h2>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data:function(){
        return {
            books:[],
            search_title:''
        }
    },
    methods:{
     
    },
    computed: {
        results:function(){
            let filteredResults = this.books.filter((book)=>{
                return book.title.toLowerCase().includes(this.search_title.toLowerCase())
            })
            return filteredResults;
        },
        totalPages:function(){
            let reducer = (accumulatedTotal, eachBook) => {
                return eachBook.pages + accumulatedTotal;
            }

            let totalPages = this.results.reduce(reducer, 0);
            return totalPages;
        }
    },
    // we use created for initialization
    created:async function() {
        console.log("Component created")
         let response = await axios.get('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
            console.log(response.data);
            this.books = response.data;
    },
    mounted:function(){
        console.log('mounted')
    }
}
</script>

<style scoped>

</style>