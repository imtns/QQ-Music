/*QQ音乐移动端
黄鑫 Json
Github:imtns.github.com
2017.08.31
*/
(function () {
    //获取数据
    fetch('json/Data.json').then(data => data.json()).then(renderJSON)
    function renderJSON(json) {
        console.log(json);
        RenderList(json.data);
    }
    function RenderList(data) {
        Object.keys(data).forEach(name => {
            switch (name) {
                case 'slider': {
                    var slides = data.slider.map(slide => { return { picUrl: slide.picUrl, id: slide.id, linkUrl: slide.linkUrl } });
                    new Slider({ el: '.swiper-container', slides });
                    break;
                }
                case 'radioList': {
                    document.querySelector('.radioBox .list').innerHTML = data.radioList.map(list =>
                        `<div class="item">
                            <div class="media">
                                <img data-src="${list.picUrl}" src="" class="lazyload"  />
                                <span class="icon_play icon"></span>
                            </div>
                            <div class="songInfo">
                                <h3 class="info">${list.Ftitle}</h3>
                            </div>
                         </div>`
                    ).join('')
                    break;
                }
                case 'songList': {
                    document.querySelector('.hotSongBox .list').innerHTML = data.songList.map(list =>
                        `<div class="item">
                            <div class="media">
                                <img data-src="${list.picUrl}" src="" class="lazyload" />
                                <span class="icon_play icon"></span>
                            </div>
                            <div class="songInfo">
                                <h3 class="songDesc">${list.songListDesc}</h3>
                                <p class="singer">${list.songListAuthor}</p>
                            </div>
                         </div>`
                    ).join('')
                    break;
                }
            }
        })
    }
})()