const DISTANCE =150
const DURATION=500
const map=new WeakMap()

const ob=new IntersectionObserver((entries) =>{
    for(const entry of entries){
        if(entry.isIntersecting){
            const animation = map.get(entry.target)
            if(animation){
                animation.play()
                ob.unobserve(entry.target) 
            }
        }
    }
})

function isBelowViewport(el){
    const rect=el.getBoundingClientRect()
    return rect.top -DISTANCE>window.innerHeight
}

export const slowEnter={
    install(app){
        app.directive('slide',{
            mounted(el) {
                if(!isBelowViewport(el)){return}
                const animation=el.animate([{
                    transform:` translateY(${DISTANCE}px)`,
                    opacity:0.5
                },
                {
                    transform:` translateY(0)`,
                    opacity:1
                }],
                {
                    duration:DURATION,
                    easing:'ease-in-out',
                })
                animation.pause()
                ob.observe(el)
                map.set(el, animation)
                // 将动画添加到map中
            },
            unmounted(el) {
                ob.unobserve(el)
                // 停止观察
            },
        })
    }
}