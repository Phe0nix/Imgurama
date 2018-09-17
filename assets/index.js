function mainFunc(){
    var demo1 = document.querySelector(".demo1"), img, vid, li,
        demo2 = document.querySelector(".demo2"),
        demo3 = document.querySelector(".demo3"),
        demo4 = document.querySelector(".demo4"),
        param = {
            section: "hot",
            sort: "viral",
            window: "day",
            //page: 20,
            //perPage: 20,
            showViral: true,
            showMature: true,
            albumPreviews: true
        },
        url = `https://api.imgur.com/3/gallery/${param.section}/${param.sort}/${param.window}?showViral=${param.showViral}&mature=${param.showMature}&album_previews=${param.albumPreviews}`,
        settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "GET",
            "headers": {
                "Authorization": "Client-ID cb0076c137f11a4"
            }
        };
    demo1.innerHTML = 'Loading';
    fetch(url, settings)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.data);
        demo1.innerHTML = '';
        data.data.forEach((el, i) => {
            function images(x, domNode){
                var x1 = x.link.slice(0, x.link.lastIndexOf(".")),
                    x2 = x.link.slice(x.link.lastIndexOf("."),x.link.length),
                    addLink = x1+"m"+x2;
                li = document.createElement("div");
                li.setAttribute("class", "item");
                img = document.createElement("img");
                ((x.type==="image/jpeg" || x.type==="image/png"
                || x.type==="image/jpg") && (x.width>600) )
                ?img.setAttribute("src", addLink)
                :img.setAttribute("src", x.link);
                li.appendChild(img);
                domNode.appendChild(li);
            }
            function videos(x, domNode){
                li = document.createElement("div");
                li.setAttribute("class", "item");
                vid = document.createElement("video");
                vid.setAttribute("src", x.link);
                vid.setAttribute("controls", true);
                li.appendChild(vid);
                domNode.appendChild(li);
            }
            if(i>0 && i<=10){
                if(el.images){
                    el.images.forEach(el=>{
                        if(el.type==="image/png" || el.type==="image/jpg" 
                        || el.type==="image/jpeg"
                        || el.type==="image/gif"){
                            images(el, demo1);
                        }
                        if(el.type==="video/mp4"){
                            videos(el, demo1);
                        }
                    })
                }
                else{
                    if(el.type==="image/png" || el.type==="image/jpg"
                    || el.type==="image/jpeg"
                    || el.type==="image/gif"){
                        images(el, demo1);
                    }
                    else{
                        videos(el, demo1);
                    }
                }
            }
            else if(i>10 && i<=20){
                if(el.images){
                    el.images.forEach(el=>{
                        if(el.type==="image/png" || el.type==="image/jpg" 
                        || el.type==="image/jpeg"
                        || el.type==="image/gif"){
                            images(el, demo2);
                        }
                        if(el.type==="video/mp4"){
                            videos(el, demo2);
                        }
                    })
                }
                else{
                    if(el.type==="image/png" || el.type==="image/jpg"
                    || el.type==="image/jpeg"
                    || el.type==="image/gif"){
                        images(el, demo2);
                    }
                    else{
                        videos(el, demo2);
                    }
                }
            }
            else if(i>20 && i<=30){
                if(el.images){
                    el.images.forEach(el=>{
                        if(el.type==="image/png" || el.type==="image/jpg" 
                        || el.type==="image/jpeg"
                        || el.type==="image/gif"){
                            images(el, demo3);
                        }
                        if(el.type==="video/mp4"){
                            videos(el, demo3);
                        }
                    })
                }
                else{
                    if(el.type==="image/png" || el.type==="image/jpg"
                    || el.type==="image/jpeg"
                    || el.type==="image/gif"){
                        images(el, demo3);
                    }
                    else{
                        videos(el, demo3);
                    }
                }
            }
            else if(i>30 && i<=40){
                if(el.images){
                    el.images.forEach(el=>{
                        if(el.type==="image/png" || el.type==="image/jpg" 
                        || el.type==="image/jpeg"
                        || el.type==="image/gif"){
                            images(el, demo4);
                        }
                        if(el.type==="video/mp4"){
                            videos(el, demo4);
                        }
                    })
                }
                else{
                    if(el.type==="image/png" || el.type==="image/jpg"
                    || el.type==="image/jpeg"
                    || el.type==="image/gif"){
                        images(el, demo4);
                    }
                    else{
                        videos(el, demo4);
                    }
                }
            }
            else{
                console.log("end of data");
            }
        });
    })
    .catch(err=>console.log(err));
}

mainFunc();