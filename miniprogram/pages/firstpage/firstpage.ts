// index.ts
// 获取应用实例

const app = getApp<IAppOption>()

Page({
  //provide for picker
  data: {
    userID:"",
    password:""
  },

  userIdInput:function(e:any){
    this.setData({
      userID:e.detail.value
    })
    console.log(this.data.userID)
  },

  passwordInput:function(e:any){
    this.setData({
      password:e.detail.value
    })
    console.log(this.data.password)
  },

  successFcuntion:function(item:string ){
    wx.request({
      url:'https://www.weihongliang.club/pptserver/',
      header:{
        'action':"query",
        'userID':this.data.userID,
        'password':this.data.password,
        'content':item
      },
      success(res){
        let item_data:string=res.data as string
        app.globalData[item]=item_data
        console.log(item_data)
      }
    })
  },

  checkAndJump:function(e:any){
    let self=this
    wx.request({
      url:'https://www.weihongliang.club/pptserver/',
      header:{
        'action':"check",
        'userID':this.data.userID,
        'password':this.data.password
      },
      success(res){
        let data=res.data
        if (data=="Student") {
          let array:string[]=["School","Group","Name","Identity","password","userID"]
          array.forEach(self.successFcuntion)
        }
        
        console.log(app.globalData)
      }
    })
    
    wx.navigateTo({
      url:'../Student/Student'
    })

    console.log("fuck you")
  }



})
