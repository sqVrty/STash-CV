import { useTranslation } from "react-i18next";

import ContactBlock from "./ContactBlock";

import {
  TelegramIcon,
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
} from "../../assets/icons";

import classes from "./ContactMeModalContent.module.scss";

export default function ContactMeModalContent() {
  const { t } = useTranslation();

  return (
    <div className={classes.contactBlocksContainer}>
      <ContactBlock
        socialName="Telegram"
        icon={<TelegramIcon width={20} height={20} />}
        contact="@sqvrty"
      />
      <ContactBlock
        socialName="WhatsApp"
        icon={<WhatsAppIcon width={20} height={20} />}
        contact="+7(989)049-17-01"
      />
      <ContactBlock
        socialName={t("modals.contactModal.phone")}
        icon={<PhoneIcon width={20} height={20} />}
        contact="+7(989)049-17-01"
      />
      <ContactBlock
        socialName={t("modals.contactModal.mail")}
        icon={<MailIcon width={20} height={20} />}
        contact="sergeu-tash@yandex.ru"
      />
    </div>
  );
}
