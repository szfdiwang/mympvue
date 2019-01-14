<template>
  <div class="container">
    <div class="bg-swiper">
      <my-swiper :list="list"></my-swiper>
    </div>
    <div class="bg_music" v-if="isPlay" @tap="audioPlay">
      <image src="../../static/img/music_icon.png" class="musicImg music_icon"></image>
      <image src="../../static/img/music_play.png" class="music_play pauseImg"></image>
    </div>
    <div class="bg_music" v-else @tap="audioPlay">
      <image src="../../static/img/music_icon.png" class="musicImg"></image>
      <image src="../../static/img/music_play.png" class="music_play playImg"></image>
    </div>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->

  </div>
</template>

<script>
  import tool from "@/common/index"
  import mySwiper from "@/components/mySwiper"
  const audioCtx = wx.createInnerAudioContext();
  export default {
    data() {
      return {
        isPlay: true,
        list: []
      };
    },
    onShow() { // 小程序生命周期
      const that = this
      that.isPlay = true
      that.getMusic();
      
    },
    components:{
      mySwiper
    },
    methods: {
      audioPlay() {
        const that = this
        if (that.isPlay) {
          audioCtx.pause()
          that.isPlay = false
          tool.showToast2sec('您已暂停音乐播放~')
        } else {
          audioCtx.play()
          that.isPlay = true
          tool.showToast2sec('背景音乐已开启~')
        }
      },
      toCount() {
        console.log(123);
        wx.switchTab({
          url: "/pages/gift/main"
        });
      },
      getMusic() {
        let that = this;
        const db = wx.cloud.database();
        const music = db.collection('music');
        music.get().then(res => {
          console.log(res);
          let musicUrl = res.data[0].mama;
          audioCtx.src = musicUrl;
          audioCtx.loop = true;
          audioCtx.play();
          that.getPhoto();
        })
      },
      getPhoto(){
        let that = this;
        const db = wx.cloud.database();
        const photo = db.collection('duoduo');
        photo.get().then(res=>{
          console.log(res);
          that.list = res.data;//[0].imgUrl;
        })
      }
    },

    created() {
      // 调用应用实例的方法获取全局数据
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;

    @keyframes musicRotate {
      from {
        rotate: 0deg;
      }

      to {
        rotate: 360deg;
      }

      ;
    }

    @keyframes musicStart {
      from {
        rotate: 20deg;
      }

      to {
        rotate: 0deg;
      }
    }

    @keyframes musicStop {
      from {
        rotate: 0deg;
      }

      to {
        rotate: 20deg;
      }
    }

    .bg_music {
      position: fixed;
      top: 0;
      right: 0rpx;
      width: 100rpx;
      // height: 10rpx;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .musicImg {
        width: 60rpx;
        height: 60rpx;
      }

      .music_icon {
        animation: musicRotate 3s linear infinite
      }

      .music_play {
        width: 28rpx;
        height: 60rpx;
        margin-left: -10rpx
      }

      .playImg {
        animation: musicStart 0.8s linear forwards;
      }

      .pauseImg {
        animation: musicStop 0.8s linear forwards;
      }
    }
    .bg-swiper{
      width: 375px;
      height: 300px;
    }
  }
</style>