const app = Vue.createApp({
                            data(){
                                     return{
                                              user:{
                                                   },
                                              weatherData:{
                                                            weather_data:{
                                                                          location:{
                                                                                    city:'london',
                                                                                    province:'ontario',
                                                                                    country:'canada',
                                                                                    temperature:null,
                                                                                    wind:null,
                                                                                    discription:null,
                                                                                  }

                                                                        }
                                                            
                                                          },
                                              defineWords:{
                                                          }
                                           };
                                  },
                              created(){
                                          this.fetchuser();
                                          this.fetchweatherData();
                                       },
                              methods: {
                                         fetchuser(){
                                                          fetch('https://comp6062.liamstewart.ca/random-user-data')
                                                          .then(responce=>responce.json())
                                                          .then(data => {
                                                                            this.user = data;
                                                                        })
                                                          .catch(error => {
                                                                              console.log(error);
                                                                          });

                                                    },
                                          fetchweatherData(){
                                                                fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.weatherData.weather_data.location.city}&province=${this.weatherData.weather_data.location.province}&country=${this.weatherData.weather_data.location.country}`)
                                                                .then(response => response.json())
                                                                .then(data => {
                                                                                  this.weatherData = data;
                                                                              })
                                                                .catch(error => {
                                                                                  console.log(error);
                                                                                });
                                                            },    
                                          fetchdefineWords(){
                                                              let url = 'https://comp6062.liamstewart.ca/api/define?word=' + this.defineWords.word;
                                                              console.log(url);
                                                              fetch(url)
                                                                  .then(response => {
                                                                      return response.json();
                                                                  })
                                                                  .then(data => {
                                                                                    this.defineWords = data;
                                                                                })
                                                                  .catch(error => {
                                                                      console.log(error);
                                                                  });
                                                          }

                                        }
                                        
                                       
                          });
                          app.mount('#app');