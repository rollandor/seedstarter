import React from "react";
import styles from "@/components/layout/modal/Modal.module.scss"

type Prop = {
  active: any,
  setActive: any,
  children: any,
}

const Modal = ({active, setActive, children}: Prop) => {
  return(
    <div className={ active ? styles["modal"] + " " + styles.active : styles["modal"] } onClick={() => setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal;