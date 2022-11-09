<template>
    <section>
        Filter
    </section>
    <section>
        <div class="controls">
            <button>Referesh</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul v-if="isCoaching">
            <li v-for="coach in filteredCoaches" :key="coach.id"> {{coach.firstName}} </li>
        </ul>
        <h3 v-else> no active members</h3>
    </section>
</template>

<script>
export default {
    computed: {
        filteredCoaches(){
            return this.$store.getters['coaches/coaches']
        },
        isCoaching(){
            return this.$store.getters['coaches/hasCoaches']
        }

    }
}
</script>