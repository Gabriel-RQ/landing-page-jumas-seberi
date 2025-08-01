import {
  PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
  PUBLIC_EMAILJS_KEY,
  PUBLIC_EMAILJS_SERVICE_ID,
  PUBLIC_EMAILJS_SUBSCRIPTION_TEMPLATE_ID,
} from "$env/static/public";
import emailjs from "@emailjs/browser";

export function sendEmail(
  event: SubmitEvent & {
    currentTarget: EventTarget & HTMLFormElement;
  },
  template: "contact" | "subscription",
  statusObject: { show: boolean; success: boolean }
) {
  event.preventDefault();
  emailjs
    .sendForm(
      PUBLIC_EMAILJS_SERVICE_ID,
      template === "contact"
        ? PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID
        : PUBLIC_EMAILJS_SUBSCRIPTION_TEMPLATE_ID,
      event.currentTarget,
      {
        publicKey: PUBLIC_EMAILJS_KEY,
      }
    )
    .then(() => {
      statusObject.show = true;
      statusObject.success = true;
    })
    .catch((error) => {
      statusObject.show = true;
      statusObject.success = false;
      console.error(error);
    });
  event.currentTarget.reset();
}
