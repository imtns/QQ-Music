class Slider{
    constructor(options={}){
        this.$el = options.el;
        this.$slides = options.slides;
        this.render();
    }
    render(){
        document.querySelector('.swiper-container .swiper-wrapper').innerHTML = this.$slides.map(slide=> 
            `<div class="swiper-slide" id="${slide.id}" link="${slide.linkUrl}"><img src="${slide.picUrl}"></div>`
        ).join('');
        new Swiper(this.$el, {
            loop: true,
            autoplay:1500,
            pagination: '.swiper-pagination',
        });    
    }
    
}
        
