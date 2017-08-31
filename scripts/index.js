(function () {
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
                    new Slider({el:'.swiper-container',slides});
                    break;
                }
                case 'radioList': {

                    break;
                }
                case 'songList': {

                    break;
                }
            }
        })
    }
})()