import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./media/chevron.png";
import styles from "./styles.module.css";


export default function QnA() {

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
           <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
          {header}
         
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <h1 className={styles.title}>FAQ</h1>
      </div>
      
    <div className={styles.accordion}>
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header="What is Lorem Ipsum?" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem header="Where does it come from?">
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
        </AccordionItem>

        <AccordionItem header="Why do we use it?">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet
          ante. Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>

        <AccordionItem header="What is Lorem Ipsum?" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem header="What is Lorem Ipsum?" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem header="What is Lorem Ipsum?" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>
      </Accordion>
    </div>
  </div>
  );
}