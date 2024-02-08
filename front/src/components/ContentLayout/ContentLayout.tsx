import React from "react";
import styles from "@/components/ContentLayout/contentLayout.module.scss";

/**
 * Component wrapping the all components except navbar
 * It needs to take specific width
 * 
 * @param param0 component
 * @returns 
 */
const ContentLayout = ({ children }: any) => {
  return (
    <div className={styles['content__layout']}>
      {children}
    </div>
  );
};

export default ContentLayout;