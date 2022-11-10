export default {
    registerCoach(context, data){
        const coach = {
            id: new Date().toISOString(),
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        console.log('action')
        context.commit('registerNewCoach', coach , { root : true})
        console.log(context)
        console.log(coach)
    },
}