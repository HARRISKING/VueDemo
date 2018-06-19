var app = new Vue({
    el: "#app",
    data: {
        message: "hello harrisking"
    }
})

var app2 = new Vue({
    el: '#app2',
    data:{
        message: '页面加在于 ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen:true
    }
})

var app4 = new Vue({
    el:'#app4',
    data:{
        todos: [
            {text: "饿问问"},
            {text: "通过天堂"},
            {text: "体育教育家"}
        ]
    }
})

var app5 = new Vue({
    el:'#app5',
    data: {
        message: 'harrisking is so handsome!'
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
 
var app6 = new Vue({
    el:'#app6',
    data: {
        message: 'gdfdsfasef'
    }
})


Vue.component('todo-list',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            {id:0, text:'蔬菜'},
            {id:1, text:'酸奶'},
            {id:2, text:'鸡蛋'}
        ]
    }
})