const app = getApp<IAppOption>()

Page({
  data:{
    filePath: '', // 保存文件地址到data
    fileName: '',
    userName: ''
  },

  fileNameDecide:function(e:any){
    this.setData({
      userID:e.detail.value
    })
    console.log(this.data.fileName)
  },

  ChooseFile:function(e:any){
    this.chooseFile()
  },

  UploadFile:function(e:any){
    this.uploadFile()
  },



  // 上传文件
  uploadFile: function() { 
    wx.uploadFile({ // 本地资源上传到服务器API
      url: 'https://www.weihongliang.club/pptserver/', // 指定服务器接口URL
      filePath: this.data.filePath, // 本地文件路径，即选择文件返回的路径
      name: 'file', // 上传文件的key，后台要用到
      header: { // 可额外添加字段，存于请求的body对象中
        'fileName': this.data.fileName,
        'userID': app.globalData.userID,
        'password':app.globalData.password,
        'action':"upload"
      },
      success: res=>{
        console.log(res);    
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 2000
        });      
      },
      fail: res=>{
        console.log(res);
        wx.showToast({
          title: '上传失败',
          duration: 2000
        });   
      },
      complete:res=>{
        console.log(res);
      }
    })
  },
  //选取文件
  chooseFile: function (){
    wx.chooseMessageFile({
      count: 1,
      type:'file',
      success:res => {
        var filename = res.tempFiles[0].name;
        this.setData({          
          filePath: res.tempFiles[0].path, // 保存文件地址到data
          fileName: filename // 保存文件名
        })
      }         
    })
  }
  
})