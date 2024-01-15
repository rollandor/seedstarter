import type { PropsWithChildren } from "react";
import styles from '@/components/layout/Layout.module.scss';

export default function LayoutClient({children} : PropsWithChildren<unknown>) {
  return(
    <main className={styles.layout}>
      <section>{children}</section>
    </main>
  )
}