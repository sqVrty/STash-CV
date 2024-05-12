import ContactBlock from "./ContactBlock";

import { COLORS } from "../../assets/colors";
import { TelegramIcon, WhatsAppIcon, PhoneIcon } from "../../assets/svg's";

import classes from "./ContactMeModalContent.module.scss";

export default function ContactMeModalContent() {
  return (
    <div className={classes.contactBlocksContainer}>
      <ContactBlock
        socialName="Telegram"
        icon={<TelegramIcon fill={COLORS.gray} width={20} height={20} />}
        contact="@sqvrty"
      />
      <ContactBlock
        socialName="WhatsApp"
        icon={<WhatsAppIcon fill={COLORS.gray} width={20} height={20} />}
        contact="+7(989)049-17-01"
      />
      <ContactBlock
        socialName="Phone"
        icon={<PhoneIcon fill={COLORS.gray} width={20} height={20} />}
        contact="+7(989)049-17-01"
      />
    </div>
  );
}
