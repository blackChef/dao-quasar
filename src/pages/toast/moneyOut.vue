<template>
  <div>
    <q-btn label="我要转账" color="primary" @click="show = true" />
    <q-dialog v-model="show">
      <div>
        <div class="popupSureInfor">钱包转账</div>
        <div class="rollOut rollOutAddress">
          <span>转出地址</span>
          <input
            type="text"
            v-model="user"
            @change="lookActive"
            placeholder="请输入 +ERC20 钱包地址/DAO ID"
          />
        </div>
        <div class="rollOut rollOutMoney">
          <span>转出金额(单位NES)</span>
          <input
            type="text"
            v-model="val"
            @change="lookActive"
            :placeholder="layerInfo && '可转出余额'+totalMoney"
          />
          <i @click="val=totalMoney">全部</i>
        </div>
        <div class="rollOutBtn" :class="{'active':val!='' && user!=''}" @click="payTo">确定</div>
        <div class="rollOutDes">所有基于区块链的交易都需要手续费，该手续费将自动扣除。</div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      show: false,
      title: "转账成功",
      content: "你也可以在「我的主页」中查看刚刚转账的信息",
      val: "",
      contract: "",
      user: "",
      layerInfo: {},
      totalMoney: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    taost_cancel() {
      this.$q.notify("已取消");
    },
    taost_confirm() {
      this.$q.notify("删除成功");
    }, // 转账
    payTo: async function() {
      let self = this;
      console.log(this.layerInfo);
      let url = "protected/user/token/transfer";

      //注释掉接口
      //   let dat = {
      //     contract: this.layerInfo.post.contract.contract,
      //     to_user: Number(this.user),
      //     value: this.val
      //   };
      //   const respay = await axios.post("//" + url, dat);

      const respay = { code: 0 };
      if (respay.code == 0) {
        // self.closeModel();
        // self.$toast({
        //   text: "转账成功！"
        //   // type:""
        // });
      } else {
        // this.closeModel();
        // alert(respay.message);
      }
    },
    lookActive: function() {}
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
</style>