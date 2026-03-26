import WhoAmI from "./whoAmI";
import Places from "./places";
import OpenSource from "./openSource";
import ContactForm from "./contactForm";
import { Footer } from "./FooterLinks";

export default function RightColumn(){
  return (
			<>
				<WhoAmI />
				{/* <WhatIUse /> */}
				<Places />
				<OpenSource />
				<ContactForm />
				<Footer />
			</>
		);
}