var app = new Vue({
    el:'#app',
    data: {
        message:"我就对司法鉴定酸辣粉就啊善良的咖啡机阿斯顿"
    },
    computed: {
        reverseMeg: function () {
            console.log('asdhfa',this.message)
            return this.message.split('').reverse().join('')
        }
    }
})