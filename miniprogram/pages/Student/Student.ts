const app = getApp<IAppOption>()

Page({
  data:{
    filePath: '', // �����ļ���ַ��data
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



  // �ϴ��ļ�
  uploadFile: function() { 
    wx.uploadFile({ // ������Դ�ϴ���������API
      url: 'https://www.weihongliang.club/pptserver/', // ָ���������ӿ�URL
      filePath: this.data.filePath, // �����ļ�·������ѡ���ļ����ص�·��
      name: 'file', // �ϴ��ļ���key����̨Ҫ�õ�
      header: { // �ɶ�������ֶΣ����������body������
        'fileName': this.data.fileName,
        'userID': app.globalData.userID,
        'password':app.globalData.password,
        'action':"upload"
      },
      success: res=>{
        console.log(res);    
        wx.showToast({
          title: '�ϴ��ɹ�',
          icon: 'success',
          duration: 2000
        });      
      },
      fail: res=>{
        console.log(res);
        wx.showToast({
          title: '�ϴ�ʧ��',
          duration: 2000
        });   
      },
      complete:res=>{
        console.log(res);
      }
    })
  },
  //ѡȡ�ļ�
  chooseFile: function (){
    wx.chooseMessageFile({
      count: 1,
      type:'file',
      success:res => {
        var filename = res.tempFiles[0].name;
        this.setData({          
          filePath: res.tempFiles[0].path, // �����ļ���ַ��data
          fileName: filename // �����ļ���
        })
      }         
    })
  }
  
})