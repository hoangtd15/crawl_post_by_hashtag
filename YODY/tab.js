function scrollTab() {
  var lastScrollHeight = 0;
  var time = 0
  var id = window.setInterval(autoScroll, 100);
  function autoScroll() {
    if (time > 100) {
      clearInterval(id);
      chrome.runtime.sendMessage({complete: "done"}, function(response) {
      });
    }
    var sh = document.documentElement.scrollHeight;
    if (sh != lastScrollHeight) {
      lastScrollHeight = sh;
      document.documentElement.scrollTop = sh;
      time = 0
    }
    else {
      time++
    }
    console.log(time)
  }
}

function getPost() {
  var values = []
  var feeds = document.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t gs1a9yip lhclo0ds btwxx1t3 sv5sfqaa o22cckgh obtkqiv7 fop5sh7t")
  var feed = feeds[0]
  var posts = feed.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb hybvsw6c io0zqebd m5lcvass fbipl8qg nwvqtn77 k4urcfbm ni8dbmo4 stjgntxs sbcfpzgs")
  console.log(posts[0])
  for (var i = 0; i < posts.length; i++) {
    var value = []
    var post = posts[i]
    var postShare = post.getElementsByClassName("hqeojc4l")
    var links = post.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl oo9gr5id gpro0wi8 lrazzd5p")
    var link = links[0].href
    if (postShare.length < 1 && !link.toUpperCase().includes("YODY")) {
      var times = post.getElementsByClassName("b6zbclly myohyog2 l9j0dhe7 aenfhxwr l94mrbxd ihxqhq3m nc684nl6 t5a262vz sdhka5h4")
      var time = ""
      for (var j = 1; j < times.length; j++) {
        time = time + (times[j].innerHTML)
      }
      value.push(time.replaceAll('=', ''))
      
      value.push(link)
      
      if(link.includes("vanity")){
        value.push(link)
      }
      else{
      
      //post thông thường
      var photos = post.getElementsByClassName("oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso pmk7jnqg i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l i09qtzwb n7fi1qx3 j9ispegn kr520xx4 tm8avpzi")
      var photo = photos[0]
      var postId = ""
      var photos2 = post.getElementsByClassName("oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 a8c37x1j mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l tm8avpzi")
      var photo2 = photos2[0]
      var postId2 = ""
      var photos3 = post.getElementsByClassName("oajrlxb2 g5ia77u1 gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 q9uorilb p7hjln8o qjjbsfad fv0vnmcu w0hvl6rk ggphbty4 jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l i2p6rm4e jnigpg78 byekypgc awjy3rxs")
      var photo3 = photos3[0]
      var postId3 = ""
      var photos5 = post.getElementsByClassName("oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso pmk7jnqg i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l i09qtzwb n7fi1qx3 j9ispegn kr520xx4")
      var photo5 = photos5[0]
      var postId5 = ""
      if(photo != undefined){
        postId = photo.href
        if(postId.includes("set=pcb.")){
          value.push(postId.substring(postId.indexOf("set=pcb.")+8,postId.indexOf("&__")))
        }else if(postId.includes("set=a.")){
          value.push(postId.substring(postId.indexOf("set=a.")+6,postId.indexOf("&__")))
        }else if(postId.includes("commerce")){
          value.push(postId)
        }
      }else if(photo2 != undefined){
        postId2 = photo2.href
        if(postId2.includes("set=pcb.")){
          value.push(postId2.substring(postId2.indexOf("set=pcb.")+8,postId2.indexOf("&__")))
        }else if(postId2.includes("set=a.")){
          value.push(postId2.substring(postId2.indexOf("set=a.")+6,postId2.indexOf("&__")))
        }else if(postId2.includes("commerce")){
          value.push(postId2)
        }
      }else if(photo3 != undefined){
        postId3 = photo3.href
        value.push(postId3)
      }else if(photo5 != undefined){
        postId5 = photo5.href
        if(postId5.includes("set=pcb.")){
          value.push(postId5.substring(postId5.indexOf("set=pcb.")+8,postId5.indexOf("&__")))
        }else if(postId.includes("set=a.")){
          value.push(postId5.substring(postId5.indexOf("set=a.")+6,postId5.indexOf("&__")))
        }else if(postId5.includes("commerce")){
          value.push(postId5)
        }
      }
      // post 1 bài bán hàng
    //   var photos3 = post.getElementsByClassName("oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 a8c37x1j mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l tm8avpzi")
    //   var photo3 = photos3[0]
    //   try{
    //     if(photo3!= undefined && photo3.href.includes("commerce")){
    //         value.push(photo3.href)
    //       }
    //       linkphoto = photo.href
    //    if(linkphoto.includes("commerce")){
    //     value.push(linkphoto)
    //   }
    //   else if(linkphoto.includes("video")){
    //     var linkphoto = photo.href
    //     linkphoto.split("/").map(pcb =>{
    //       if(pcb.includes("pcb.")){
    //         value.push(pcb.split(".")[1])
    //       }
    //     })
    //   }
    //   else{
    //   linkphoto.split("&").map(pcb =>{
    //     if(pcb.includes("set=pcb.") || pcb.includes("set=a.")){
    //       value.push(pcb.split(".")[1])
    //     }
    //   })
    // }
    // }catch(e){
    //   try{
    //     photos = post.getElementsByClassName("oajrlxb2 g5ia77u1 gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 q9uorilb p7hjln8o qjjbsfad fv0vnmcu w0hvl6rk ggphbty4 jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l i2p6rm4e jnigpg78 byekypgc awjy3rxs")
    //     photo = photos[0]
    //     linkphoto = photo.href
    //     value.push(linkphoto)
    //   }catch(e2){
    //     try{
    //     // post 1 ảnh
    //     photos = post.getElementsByClassName("oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 a8c37x1j mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l tm8avpzi")
    //     photo = photos[0]
    //     linkphoto = photo.href
    //     linkphoto.split("&").map(pcb =>{
    //     if(pcb.includes("set=a.")){
    //       value.push(pcb.split(".")[1])
    //     }
    //   })
    // }catch(e3){
    //   try{
    //     // post có video
    //   photos = post.getElementsByClassName("oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso pmk7jnqg i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l i09qtzwb n7fi1qx3 j9ispegn kr520xx4")
    //     photo = photos[0]
    //     linkphoto = photo.href
    //   if(linkphoto.includes("video")){
    //     linkphoto.split("/").map(pcb =>{
    //       if(pcb.includes("pcb.")){
    //         value.push(pcb.split(".")[1])
    //       }
    //     })
    //   }else{
    //   linkphoto.split("&").map(pcb =>{
    //     if(pcb.includes("set=pcb.") || pcb.includes("set=a.")){
    //       value.push(pcb.split(".")[1])
    //     }
    //   })
    // }}
    // catch(e4){
    //   value.push("error")
    // }
    // }
    //   }
    // }
  }

      // var linkPosts = post.getElementsByTagName("a")
      // for(var m = 0; m < linkPosts.length; m++){
      //   console.log(linkPosts[m].href)
      // }

      var likes = post.getElementsByClassName("gpro0wi8 pcp91wgn")
      try {
        var like = likes[0].innerHTML
        value.push(like)
      }
      catch (err) {
        value.push(0)
      }
      try{
      var shares = post.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ht8s03o8 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v knj5qynh m9osqain")
      // try {
        var share = shares[shares.length - 1].innerHTML
        var n = share.includes("lượt chia sẻ")
        if (n) {
          var a = share.replaceAll("lượt chia sẻ", "")
          value.push(a)
        } else {
          value.push(0)
        }
      }
      catch (err) {
        console.log(err)
        value.push(0)
      }
      values.push(value)
    }
  }
  console.log(values)
  
  return values
}

chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  if (request.scroll == "yody") {
    scrollTab();
  }
  if (request.getdata == "yody") {
    var value = getPost();
    sendResponse({ values: value })
  }
})