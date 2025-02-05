import styles from './SkillsStyles.module.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import python from '../../assets/python.png'
import java from '../../assets/java.png'

import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        {/* <h2 className='sectionDescription'>I Learn:</h2> */}
        <h1 className='sectionTitle'>some of my skills</h1>
        <div className={styles.skillList}>
            <SkillList className={styles.skillCard} src={html} skill='HTML'/>
            <SkillList className={styles.skillCard} src={css} skill='CSS'/>
            <SkillList className={styles.skillCard} src={javascript} skill='JavaScript'/>
            <SkillList className={styles.skillCard} src={react} skill='React'/>
            <SkillList className={styles.skillCard} src={python} skill='Python'/>
            <SkillList className={styles.skillCard} src={java} skill='Java'/>
        </div>
        {/* <hr /> */}
    </section>
  )
}

export default Skills