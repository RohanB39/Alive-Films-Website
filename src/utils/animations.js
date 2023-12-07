import { delay } from "framer-motion";

export const containerVarients = (delay = 0)=> ({
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
            delay
        }
    }
})

export const tagVarients = {
    "offscreen": {
        opacity: 0,
        y: 10
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
        }
    }
}

export const titleVarients = {
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.2,
        }
    }
}

export const desVarients = {
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.6,
            delay: .2
        }
    }
}

export const featureVarients = {
    "offscreen": {
        scale: 0.5
    },
    "onscreen": {
        scale: 1,
        transition: {
            type: "spring",
            duration: 1.5,
        },
    },
}

export const leftSildeAnimation = {
    "offscreen": {
        opacity: 0,
        x: -100
    },
    "onscreen": {
        opacity: 1,
        x: 0,
        transition: {
            type: "ease-in",
            duration: 1,
            delay: .7,
        },
    }
}