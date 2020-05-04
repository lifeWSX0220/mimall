export default {
    saveUsername(context,username){
        context.commit('saveUsername',username);
    },
    savecartCount(context,count){
        context.commit('savecartCount',count);
    }
}