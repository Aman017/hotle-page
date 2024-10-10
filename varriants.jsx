export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction ===
                'right' ? -88 : 0,

            transition: {
                type: 'tween',
                duration: 1.4,
                delay: delay,
                ease: [0, 25, 0.25, 0.25, 0.75]
            },

        },
        show:{
            y:0,
            x:0,
            opacity:1,
        }

    }
}