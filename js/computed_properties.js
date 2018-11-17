new Vue({
    el:'#main',
    data:{
        nombre:'',
        edad:'',
        sexo:'',
        correoe:''
    },

    methods:{
        enviarDatos:function () {
            if(this.nombre && this.edad && this.sexo && this.correoe){
                alert("Enviando datos....");
            }else {
                alert("Rellene todos los campos.");
            }
        }

    },

    computed:{
        todaLaInformacion: function () {
            return this.nombre && this.edad && this.sexo && this.correoe;
        }
    }
});