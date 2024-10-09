const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "http://localhost/php-dischi-json/api/reader.php",
            music: []
        }
    },
    methods: {
        getMusic(url) {
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    this.music = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },
    created() {
        this.getMusic(this.apiUrl);
    }
}).mount("#app")