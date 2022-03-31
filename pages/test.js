import React from 'react'
import styles from "../styles/test.module.css"
const test = () => {
  return (
    <div className={styles.hero}>
                <div className={styles.elem1}>
                    <h1>Box 1</h1>
                    

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, culpa.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab obcaecati illo consequatur animi necessitatibus officia reiciendis ex? Quia error unde eligendi, itaque nisi rerum distinctio mollitia aspernatur, molestias rem voluptatem.
                    </p>
                    </div>
                <div className={styles.elem2}>
                <h1>Box 2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, culpa.</p>
                    </div>
                <div className={styles.elem3}>
                <h1>Box 3</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, culpa.</p>
                    </div>

    </div>
  )
}

export default test