import * as MailComposer from "expo-mail-composer";
import constants from "../utility/constants";

const sendMail = async (email) => {
  let isMailAvailable = await MailComposer.isAvailableAsync();
  if (isMailAvailable === true) {
    let result = await MailComposer.composeAsync({
      recipients: [email],
    });
  } else {
    alert(constants.email_not_configured);
  }
};

export default {
  sendMail,
};
