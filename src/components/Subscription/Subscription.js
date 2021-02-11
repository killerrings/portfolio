import React from "react";
import { Button } from "../../globalStyes";
import {
  SubscriptionContainer,
  SubscriptionWrapper,
  SubscriptionHeading,
  SubscriptionSubHeading,
  SubscriptionSubText,
  Form,
  FormInput,
} from "./Subscription.elements";
const Subscription = () => {
  return (
    <SubscriptionContainer>
      <SubscriptionWrapper>
        <SubscriptionHeading>Subscription</SubscriptionHeading>
        <SubscriptionSubHeading>
          Subscribe to my newsletter to stay updated with the latest news
        </SubscriptionSubHeading>
        <SubscriptionSubText>
          You can unsubscribe at any time
        </SubscriptionSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your E-mail" />
          <Button fontBig> Subscribe</Button>
        </Form>
      </SubscriptionWrapper>
    </SubscriptionContainer>
  );
};

export default Subscription;
