<template>
  <div class="container-all">
    <div class="flex-container-all">
        <div class="first-section">
          <div class="logo-contenido">
            <h4><span class="red">ttt</span> twoto<span class="tango">tango</span><span class="point">.</span></h4>
          </div>
          <div class="static-contenido">
            <h4>Networking <br> <span>Matching connections</span></h4>
            <h5>{{contador}}</h5>
          </div>
        </div>
        <div class="second-section">
          <div class="stadisticas">
            <h4>Networkers</h4>
            <h5>TOP 5 Sectors / industries</h5>
            <div class="initial-stats">
              <div class="single-scale">
                <h2>11%</h2>
                <h3>Agriculture / Food & beverage</h3>
                <div class="indicator">
                  
                </div>
              </div>
              <div class="single-scale">
                <h2>4%</h2>
                <h3>Technology & innovation</h3>
                <div class="indicator1">
                  
                </div>
              </div>
              <div class="single-scale">
                <h2>9%</h2>
                <h3>Tourism</h3>
                <div class="indicator2">
                  
                </div>
              </div>
              <div class="single-scale">
                <h2>2%</h2>
                <h3>Oli & Gas</h3>
                <div class="indicator3">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="meetings">
            <h4>Bussiness Meetings</h4>
            <div class="nummbe-icon">
              <i class="fas fa-hands"></i>
              <h5>{{meeting}}</h5>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style>

  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  i{
    color: #fff;
  }

  .container-all{
    width: 100%;
    height:  100vh;
    background: #131657;
  }

  .flex-container-all{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: nowrap;
  }

  .first-section, .second-section{
    width: 50%;
  }

  .logo-contenido{
    width: 100%;
    text-align: left;
    padding: 50px 35px;
  }

  .logo-contenido h4{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 65px;
    font-weight: 500;
  }

  .red{
    color: #E61614;
    font-weight: 600 !important;
  }

  .tango{
    font-weight: 600 !important;
  }

  .static-contenido{
    width: 100%;
    text-align: left;
    padding: 40px 80px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .static-contenido h4{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 500;
  }

  .static-contenido h5{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 170px;
    font-weight: 600;
  }

  .meetings{
    width: 100%;
    padding: 40px 80px;
    text-align: left;
  }

  .meetings h4{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 500;
  }

  .nummbe-icon{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px 10px;
  }

  .nummbe-icon i{
    background: #DF1D14;
    padding: 40px 35px;
    font-size: 50px;
    border-radius: 50%;
  }

  .nummbe-icon h5{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 95px;
    font-weight: 600;
    margin-left: 20px;
  }

  .stadisticas{
    width: 100%;
    height: 58vh;
    padding: 50px 25px;
    text-align: left;
  }

  .stadisticas h4{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 500;
  }

  .stadisticas h5{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: 500;
  }

  .initial-stats{
    width: 100%;
    text-align: left;
  }

  .single-scale{
    width: 80%;
    height: auto;
    display: flex;
    padding-bottom: 15px;
    padding-top: 20px;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #fff;
  }

  .single-scale h2{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 23px;
    font-weight: 500;
    margin-left: 10px;
    z-index: 40;
  }

  .single-scale h3{
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 19px;
    font-weight: 500;
    margin-left: 20px;
    z-index: 40;
  }

  .indicator{
    position: absolute;
    width: 190px;
    background: #DF1D14;
    height: 40px;
    border-radius: 10px;
  }

  .indicator1{
    position: absolute;
    width:90px;
    background: #DF1D14;
    height: 40px;
    border-radius: 10px;
  }
  .indicator2{
    position: absolute;
    width: 130px;
    background: #DF1D14;
    height: 40px;
    border-radius: 10px;
  }

  .indicator3{
    position: absolute;
    width: 60px;
    background: #DF1D14;
    height: 40px;
    border-radius: 10px;
  }
</style>

<script>
  export default{
    data(){
      return{
        contador: 1230,
        meeting: 35,
      }
    },
    methods:{

    },
    mounted(){
      var self = this;
      setInterval(function () {
        self.contador = self.contador + 1;
      }, 3000);

      setInterval(function () {
        self.meeting = self.meeting + 1;
      }, 8000);
    }
  }
</script>