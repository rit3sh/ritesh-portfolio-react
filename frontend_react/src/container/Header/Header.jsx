import React from "react"
import { motion } from "framer-motion"

import { AppWrap } from "../../wrapper"
import { images } from "../../constants"
import "./Header.scss"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const Header = () => (
  <div className='app__header app__flex'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className='p-text'>Hello, I am</p>
            <h1 className='head-text'>Ritesh</h1>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>Full Stack Developer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className='app__header-img'
    >
      <img src={images.profile} alt='profile_bg' />

      <motion.div
        className='box'
        animate={{
          scale: [0.5, 1, 1, 0.5, 0.5],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["51%", "51%", "50%", "50%", "51%"],
          background: ["#DDD", "#FFF", "#DDD", "#FFF", "#DDD"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
    >
      {[images.react, images.node, images.azure, images.csharp].map(
        (circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='profile_bg' />
          </div>
        )
      )}
    </motion.div>
  </div>
)

export default AppWrap(Header, "home")
