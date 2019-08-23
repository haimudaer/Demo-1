<template>
  <div class="f-div">
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p class="titleBox">征信截止时间</p>
        </div>
        <div class="weui-cell__ft" @click="openTime">{{dateTime}}</div>
      </a>
    </div>
    <div class="weui-cells weui-cells_checkbox">
      <label class="weui-cell weui-check__label" for="s11">
        <div class="weui-cell__hd">
          <input type="radio" class="weui-check" name="checkbox1" id="s11" :checked="checked"
                 v-on:change="changeCheck($event)">
          <i class="weui-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p>
            <img src="../../assets/prove/icon_order.png" alt="">
            2018072318163748
          </p>
          <p>1200.00元</p>
          <p>2018年07月23日在新网银行微信平台借款</p>
        </div>
      </label>
      <label class="weui-cell weui-check__label" for="s12">
        <div class="weui-cell__hd">
          <input type="radio" name="checkbox1" class="weui-check" id="s12" :checked="checked"
                 v-on:change="changeCheck($event)">
          <i class="weui-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p>
            <img src="../../assets/prove/icon_order.png" alt="">
            2018072318163748
          </p>
          <p>1200.00元</p>
          <p>2018年07月23日在新网银行微信平台借款</p>
        </div>
      </label>
    </div>
    <div class="weui-cells">
      <div class="weui-cell already-prove">
        <div class="weui-cell__bd">
          <p class="titleBox">已开具的订单</p>
        </div>
        <div class="weui-cell__ft" @click="changeUnfold"><img ref="imgFold" src="../../assets/prove/icon_next.png" alt=""></div>
      </div>
    </div>
    <div class="weui-cells weui-cells_checkbox unfold-cells" v-show="unfold" ref="unfolds">
      <label class="weui-cell weui-check__label" for="s111">
        <div class="weui-cell__hd">
          <input type="radio" class="weui-check" name="checkbox1" id="s111" :checked="checked"
                 v-on:change="changeCheck($event)">
          <i class="weui-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p>
            <img src="../../assets/prove/icon_order.png" alt="">
            2018072318163748
          </p>
          <p>1200.00元</p>
          <p>2018年07月23日在新网银行微信平台借款</p>
        </div>
      </label>
      <label class="weui-cell weui-check__label" for="s121">
        <div class="weui-cell__hd">
          <input type="radio" name="checkbox1" class="weui-check" id="s121" :checked="checked"
                 v-on:change="changeCheck($event)">
          <i class="weui-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p>
            <img src="../../assets/prove/icon_order.png" alt="">
            2018072318163748
          </p>
          <p>1200.00元</p>
          <p>2018年07月23日在新网银行微信平台借款</p>
        </div>
      </label>
    </div>
    <div :class="!nextStatus ? 'next-event' : 'ok-next-event' ">下一步</div>
  </div>

</template>

<script>
    import weui from 'weui.js'

    export default {
        name: "home",
        data() {
            return {
                //当前时间  this.getDates(new Date())[0] + "年" + this.getDates(new Date())[1] + "月" + this.getDates(new Date())[2] + "日"
                dateTime: "请选择",
                checked: false,
                unfold: false,//已开具的列表是否展开 false收起  true 展开
                nextStatus: false, //下一步状态 初始为false
                choiseOrder:""
            }
        },
        methods: {
            openTime: function () {
                let that = this;
                //初始化日期插件
                weui.datePicker({
                    start: 2016,      // 起始时间
                    end: new Date(),       // 结束时间
                    // end:new Date().getFullYear(),       // 结束时间
                    defaultValue: that.getDates(new Date()),   // 文档说默认当前值、但tm没用啊。fuck~
                    onChange: function (result) {
                    },
                    onConfirm: function (result) {
                        result[1] = result[1] < 10 ? "0" + result[1] + "月" : result[1] + "月";
                        result[2].label = result[2].value < 10 ? "0" + result[2].label : result[2].label;
                        // console.log("++++++++++++++");
                        // console.log(result);
                        let dt = result[0].label + result[1] + result[2].label;
                        that.dateTime = dt;
                    }
                });
                //更改日期插件的默认样式
                let el = document.getElementsByClassName("weui-half-screen-dialog__ft");
                let elHd = document.getElementsByClassName("weui-half-screen-dialog__hd");
                let title = document.getElementsByClassName("weui-half-screen-dialog__title");
                let closeEl = document.getElementsByClassName("weui-icon-btn");
                let itemEl = document.getElementsByClassName("weui-picker__bd");
                let cel = el[0].childNodes[1];
                let pel = el[0].parentNode;
                title[0].innerHTML = "选择日期";
                title[0].style.cssText = "color:#999999;";
                pel.style.cssText = "border-radius:0;padding:0;";
                el[0].style.cssText = "padding:0;position:absolute;top:0;right:0;";
                cel.style.cssText = "font-size:15px;width:60px;padding:0px 15px;" +
                    "background-color:#EDEDED;color:#10BD4D;margin:0;line-height:40px;";
                elHd[0].style.cssText = "font-size:15px;height:40px;background-color:#EDEDED;";
                closeEl[0].classList.remove("weui-icon-btn_close");
                closeEl[0].style.cssText = "font-size:15px;width:30px;color:#10BD4D;margin:0 15px;height:40px;line-height:40px;";
                closeEl[0].innerHTML = "取消";
                itemEl[0].style.cssText = "font-size:16px;";
                // console.log(itemEl)
            },
            //获取当前年月日返回[]
            getDates: function (dt) {
                let str = [];//存储时间的数组
                //获取年
                let year = dt.getFullYear();
                //获取月
                let month = dt.getMonth() + 1;
                //获取日
                let day = dt.getDate();
                month = month < 10 ? "0" + month : month;
                day = day < 10 ? "0" + day : day;
                str.push(year, month, day);
                return str;
            },
            changeCheck: function (e) {
                console.log(e);
                console.log(e.target.checked)
                this.nextStatus = true
            },
            changeUnfold:function () {
                if (!this.unfold){
                    console.log(this.$refs.imgFold);
                    this.$refs.imgFold.style.cssText = "transform:rotate(-180deg);transition:.5s;";
                    this.$refs.unfolds.style.cssText = "transition:5s;";
                    this.unfold = true;
                }else {
                    this.$refs.imgFold.style.cssText = "transform:rotate(0deg);transition:.5s;";
                    this.$refs.unfolds.style.cssText = "transition:5s;";
                    this.unfold = false;
                }
            }
        },
        created() {
            console.log(this.getDates(new Date()))
        },
        mounted() {

        },
        watch: {
            checked: function (val) {
                console.log(val)
            }
        }
    }
</script>

<style scoped lang="less">

  .f-div {
    .weui-cells_checkbox:before{
      border: none;
      height: 0;
    }
    .weui-cells {
      margin-top: 0;
      .weui-cell_access {
        padding: .14rem .20rem;
        font-size: .16rem;
        .weui-cell__bd {
          .titleBox {
            color: #333333;
            font-size: .16rem;
          }
        }
        .weui-cell__ft {
          color: #CCCCCC;
        }
      }
    }
    >:nth-child(3){
      margin-top: .12rem;
      box-shadow: 0 1px 8px rgba(0,0,0,0.1);
      z-index: 2;
    }
    .already-prove{
      padding: .14rem .2rem;
      .weui-cell__bd{
        p{
          font-size: .16rem;
        }
      }
      .weui-cell__ft{
        display: flex;
        align-items: center;
      }
    }
  }
  .weui-check__label {
    padding: .1rem .2rem .2rem;
    &:before{
      left: 0;
    }
    .weui-cell__bd {
      :nth-child(1) {
        color: #999999;
        font-size: .12rem;
        //8.23添加
        display: flex;
        align-items: center;
        :nth-child(1){
          margin-right: .05rem;
        }
      }
      :nth-child(2) {
        font-size: .20rem;
        color: #333333;
        margin: .11rem 0 .04rem 0;
      }
      :nth-child(3) {
        color: #999999;
        font-size: .14rem;
      }
    }
  }

  .weui-cells_checkbox .weui-icon-checked:before {
    font-size: .22rem;
  }
  .select-all {
    :nth-child(1) {
      :nth-child(2) {
        :nth-child(1) {
          font-size: .20rem;
          color: #333333;
        }
      }
    }
  }
  .weui-btn_primary{
    position: fixed;
    bottom: 0;
  }
  /*下一步样式*/
  .next-event{
    width:3.35rem;
    height:.44rem;
    background:rgba(204,204,204,1);
    border-radius:.22rem;
    font-size: .16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .22rem auto;
    color: #FFFFFF;
  }
  .ok-next-event{
    background:rgba(16,189,77,1);
    border:1px solid rgba(25,161,96,1);
    width:3.35rem;
    height:.44rem;
    border-radius:.22rem;
    font-size: .16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .22rem auto;
    color: #FFFFFF;
  }
  .weui-cells_checkbox .weui-icon-checked:before{
    content: "\a0"; /*不换行空格*/
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #C0C3CC;
    /*line-height: 1;*/
    /*float: left;*/
  }
  .weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before{
    content: "\a0"; /*不换行空格*/
    background-color: #01cd78;
    background-clip: content-box;
    padding: 6px;
    width: 10px;
    height: 10px;
    /*border-radius: 50%;*/
  }
</style>
