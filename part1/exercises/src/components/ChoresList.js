import React from 'react'
import styles from "./ChoresList.module.css";


export default function ChoresList () {
   return   <>
<h1  className={styles.choresHeading}> Chores List </h1> 
<ol className={styles.choresText}>
   <li>clean</li>
   <li>wash</li>
   <li>buy</li>
</ol>  
   </>
}