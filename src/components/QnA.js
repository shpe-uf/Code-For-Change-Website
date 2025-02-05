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
        <AccordionItem header="What is a hackathon? Will there be actual hacking?" >
        A hackathon is an event where students "hack" together and create an app, website, game, etc. in 24-48 hours. There will be no malicious "hacking".
        </AccordionItem>

        <AccordionItem header="Is the event free to attend??" >
        Yes! Food will be provided for the duration of the event. We will also have merch and prizes!
        </AccordionItem>

        <AccordionItem header="When do applications open?" >
          Regsistration is now open until February 19th!
        </AccordionItem>

        <AccordionItem header="Are you sending out acceptances? Is there a deadline to apply? Is there a waitlist?" >
        We will send out acceptances 5 days before the event.  Applications will be closing on February 19th, but we will have a waitlist the day of the event for any local hackers who want to fill the spots of any accepted hackers who do not end up attending.
        </AccordionItem>

        <AccordionItem header="Where is the event?">
          Code for Change is hosted at the University of Florida! The event will be hosted in Newell Hall while workshops will be hosted in Turlington Hall.
        </AccordionItem>

        <AccordionItem header="Who can attend?">
        This event is open to any collge student 18 years old and above!
        </AccordionItem>

        <AccordionItem header="What is the team size limit?" >
        You can be on teams of up to 4. We have a team building channel in our discord if you're looking to find new team members!
        </AccordionItem>

        <AccordionItem header="Are there travel reimbursements?" >
          We are not able to provide travel reimbursements at this time.
        </AccordionItem>

        <AccordionItem header="When can we start working on our project? Can I work on a previous project?" >
        You cannot start until after opening ceremony. You may come up with ideas, but are not allowed to start coding. You cannot work on a previous project, but can use frameworks if you clearly credit them in your readme and differentiate what you made vs what you used
        </AccordionItem>

        <AccordionItem header="What kind of activities will there be?" >
        We will post the event schedule closer to the even date. We will host workshops, info sessions, and networking events for you to meet other hackers!.</AccordionItem>
        </Accordion>

       
    </div>
  </div>
  );
}
