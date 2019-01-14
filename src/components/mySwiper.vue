<template>
    <div class="swiper_box">
        <swiper class="swiper" :autoplay="true" :circular="true" current=0 interval=3000 :indicator-dots="true">
            <block v-for="(item,index) in list" :key="index">
                <swiper-item class="item">
                    <image lazy-load="true" mode="aspectFit" :src="item.imgUrl" class="slide-image"></image>
                </swiper-item>
            </block>
        </swiper>
    </div>
</template>
<script>
  export default {
    name: "mySiwper",
    data() {
      return {
        //   list:[
        //       {id:1,imgUrl:"https://mycos2019-1258421018.cos.ap-guangzhou.myqcloud.com/duoduo/mmexport1497956870028.jpg"}
        //   ]
      }
    },
    mounted(){
        console.log('123');
    },
    props: ['list']
  }
</script>
<style lang="scss" scoped>
.swiper_box{
    position:relative;
    height: 100%;
    .swiper{
        height: 100%;
        width: 100%;
        .item{
            width: 100%;
            height: 100%;
            .slide-image{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
}
</style>