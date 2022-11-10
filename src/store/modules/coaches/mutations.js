export default {
    registerNewCoach(state, payload){
        console.log('mutation')
        state.coaches.push(payload)
    }
}
