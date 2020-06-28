import React, { Component } from 'react'
import axios from 'axios'

class Privacy extends Component {
  state = {
    firstName: ''
  }


render() {
return (
<div className="p-4 lg:p-12">
    <h1 className="text-4xl text-center mt-2">PRIVACY NOTICE</h1>
    <p className="font-bold text-center">Last updated June 13, 2020</p>

    <p className="mt-4">Thank you for choosing to be part of our community at Nutrition with Natalie (“company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at nutritionwithnataliehowley@gmail.com.</p>
    <br/>
    <p>When you visit our website <a href="https://nutritionwithnatalie.info">https://nutritionwithnatalie.info</a>, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.</p>
    <br/>
    <p>This privacy policy applies to all information collected through our website (such as <a href="https://nutritionwithnatalie.info">https://nutritionwithnatalie.info</a>), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the "Sites"). </p>
    <br/>
    <p className="font-bold">Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.  </p>

    <h2 className="text-2xl mt-4 mb-2 font-bold">TABLE OF CONTENTS</h2>
    <ul>
        <li><a href="#q-1">1. WHAT INFORMATION DO WE COLLECT?</a></li>
        <li><a href="#q-2">2. HOW DO WE USE YOUR INFORMATION?</a></li>
        <li><a href="#q-3">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></li>
        <li><a href="#q-4">4. WHO WILL YOUR INFORMATION BE SHARED WITH?</a></li>
        <li><a href="#q-5">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
        <li><a href="#q-6">6. DO WE USE GOOGLE MAPS?</a></li>
        <li><a href="#q-7">7. HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
        <li><a href="#q-8">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
        <li><a href="#q-9">9. DO WE COLLECT INFORMATION FROM MINORS?  </a></li>
        <li><a href="#q-10">10. WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
        <li><a href="#q-11">11. CONTROLS FOR DO-NOT-TRACK FEATURES </a></li>
        <li><a href="#q-12">12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
        <li><a href="#q-13">13. DO WE MAKE UPDATES TO THIS POLICY?</a></li>
        <li><a href="#q-14">14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</a></li>
    </ul>
    

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-1">1. WHAT INFORMATION DO WE COLLECT?</h2>
    <p className="font-bold">Personal information you disclose to us </p>
    <br/>
    <p className="italic">In Short: We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.  </p>
    <br/>
    <p>We collect personal information that you voluntarily provide to us when registering at the Sites expressing an interest in obtaining information about us or our products and services, when participating in activities on the Sites or otherwise contacting us.</p>
    <br/>
    <p>The personal information that we collect depends on the context of your interactions with us and the Sites, the choices you make and the products and features you use. The personal information we collect can include the following:</p>
    <br/>
    <p><span className="font-bold">Name and Contact Data</span>. We collect your first and last name, email address, postal address, phone number, and other similar contact data.</p>
    <br/>
    <p><span className="font-bold">Credentials</span>. We collect passwords, password hints, and similar security information used for authentication and account access.</p>
    <br/>
    <p><span className="font-bold">Payment Data</span>. We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions. </p>
    <br/>
    <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.  </p>
    <br/><br/>
    <h3 className="font-bold text-xl">Information automatically collected</h3> 
    <br/>
    <p>In Short: Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit our website.</p>
    <br/>
    <p>We automatically collect certain information when you visit, use or navigate the . This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our and other technical information. This information is primarily needed to maintain the security and operation of our , and for our internal analytics and reporting purposes. </p>
    <br/>
    <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
    <br/><br/>
    <h3 className="font-bold text-xl">Information collected from other sources</h3>
    <br/>
    <p>In Short: We may collect limited data from public databases, marketing partners, and other outside sources.</p>   
    <br/>
    <p>We may obtain information about you from other sources, such as public databases, joint marketing partners, as well as from other third parties. Examples of the information we receive from other sources include: social media profile information; marketing leads and search results and links, including paid listings (such as sponsored links).  </p>
    <br/>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-2">2. HOW DO WE USE YOUR INFORMATION?</h2>
    <p className="italic">In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.  </p>
    <br/>
    <p>We use personal information collected via our Sites for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests ("Business Purposes"), in order to enter into or perform a contract with you ("Contractual"), with your consent ("Consent"), and/or for compliance with our legal obligations ("Legal Reasons"). We indicate the specific processing grounds we rely on next to each purpose listed below.  </p>
    <br/>
    <p>We use the information we collect or receive:</p>
    <br/>
    <p>- <span className="font-bold">To facilitate account creation and logon process.</span>If you choose to link your account with us to a third party account *(such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process.</p>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-3">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?  </h2>
    <p className="italic">In Short: We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations. </p>
    <br/>
    <p>We may process or share data based on the following legal basis:</p>
    <br/>
    <ul>
        <li>- <span className="font-bold">Consent:</span> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</li>
        <br/>
        <li>- <span className="font-bold">Legitimate Interests:</span> We may process your data when it is reasonably necessary to achieve our legitimate business interests. </li>
        <br/>
        <li>- <span className="font-bold">Performance of a Contract:</span> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract. </li>
        <br/>
        <li>- <span className="font-bold">Legal Obligations:</span> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements). </li>
        <br/>
        <li>- <span className="font-bold">Vital Interests:</span> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
    </ul>
    <br/>
    <p>More specifically, we may need to process your data or share your personal information in the following situations:   </p>
    <br/>
    <ul>
        <li>- <span className="font-bold">Vendors, Consultants and Other Third-Party Service Providers.</span> We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the , which will enable them to collect data about how you interact with the over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</li>  
        <br/>
        <li>- <span className="font-bold">Business Transfers.</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.  </li>
        <br/>
    </ul>
    <br/>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-4">4. WHO WILL YOUR INFORMATION BE SHARED WITH?  </h2>
    <p className="italic">In Short:  We only share information with the following third parties. </p>
    <p>We only share and disclose your information with the following third parties. We have categorized each party so that you may be easily understand the purpose of our data collection and processing practices. If we have processed your data based on your consent and you wish to revoke your consent, please contact us. </p>
    <br/>
    <ul>
        <li>
            <p className="font-bold">- Affiliate Marketing Programs</p>
            <p className="ml-3">MyProtein</p>
        </li>
        <br/>
        <li>
            <p className="font-bold">- Content Optimisation </p>
            <p className="ml-3">Vimeo video</p>
        </li>
        <br/>
        <li>
            <p className="font-bold">- Functionality and Infrastructure Optimisation </p>
            <p className="ml-3">Cloud Firestore</p>
        </li>
        <br/>
        <li>
            <p className="font-bold">- Social Media Sharing and Advertising </p>
            <p className="ml-3">Facebook social plugins and Twitter social plugins</p>
        </li>
        <br/>
        <li>
            <p className="font-bold">- Web and Mobile Analytics</p>
            <p className="ml-3">Google Analytics</p>
        </li>
    </ul>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-5">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
    <p className="italic">In Short: We may use cookies and other tracking technologies to collect and store your information.  </p>
    <br/>
    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.</p>
    
    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-6">6. DO WE USE GOOGLE MAPS? </h2>
    <p className="italic">In Short: Yes, we use Google Maps for the purpose of providing better service.</p>
    <br/>
    <p>This website, mobile application, or Facebook application uses Google Maps APIs. You may find the Google Maps APIs Terms of Service <a href="https://developers.google.com/maps/terms">here</a>. To better understand Google’s Privacy Policy, please refer to this <a href="https://policies.google.com/privacy">link</a>.  </p>
    <br/>
    <p>By using our Maps API Implementation, you agree to be bound by Google’s Terms of Service. You agree to allow us to obtain or cache your location. You may revoke your consent at anytime.</p>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-7">7. HOW LONG DO WE KEEP YOUR INFORMATION? </h2>
    <p className="italic">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.  </p>
    <br/>
    <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
    <br/>
    <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-8">8. HOW DO WE KEEP YOUR INFORMATION SAFE? </h2>
    <p className="italic">In Short: We aim to protect your personal information through a system of organisational and technical security measures.</p>
    <br/>
    <p>We have implemented appropriate technical and organisational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Sites is at your own risk. You should only access the services within a secure environment. </p>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-9">9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
    <p className="italic">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
    <br/>
    <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Sites, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Sites. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at nutritionwithnataliehowley@gmail.com. </p>
    <br/>
    
    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-10">10. WHAT ARE YOUR PRIVACY RIGHTS? </h2>
    <p className="italic">In Short: In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>
    <br/>
    <p>In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws. </p>
    <br/>
    <p>If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.</p>
    <br/>
    <p>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm </a></p>
    <br/><br/>
    <h3 className="font-bold text-xl">Account Information </h3> 
    <br/>
    <p>If you would at any time like to review or change the information in your account or terminate your account, you can:  </p>
    <br/>
    <p className="ml-4">■  Contact us using the contact information provided.   </p>
    <br/>
    <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.     </p>
    <br/>
    <p><span className="font-bold">Cookies and similar technologies:</span> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Sites. To opt-out of interest-based advertising by advertisers on our Sites visit <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>.</p>
    <br/>
    <p><span className="font-bold">Opting out of email marketing:</span> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-related emails that are necessary for the administration and use of your account. To otherwise opt-out, you may:  </p>
    <br/>
    <p className="ml-4">■  Contact us using the contact information provided.</p>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-11">11. CONTROLS FOR DO-NOT-TRACK FEATURES  </h2>
    <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy. </p>
 
    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-12">12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
    <p className="italic">In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.  </p>
    <br/>
    <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below. </p>
    <br/>
    <p>If you are under 18 years of age, reside in California, and have a registered account with the Sites, you have the right to request removal of unwanted data that you publicly post on the Sites. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Sites, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-13">13. DO WE MAKE UPDATES TO THIS POLICY?</h2>
    <p className="italic">In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.</p>
    <br/>
    <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information. </p>

    <h2 className="text-2xl mt-4 mb-2 font-bold" id="q-14">14. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
    <p>If you have questions or comments about this policy, you may email us at nutritionwithnataliehowley@gmail.com or by post to:</p>
    <br/>
    <p>Nutrition with Natalie</p>
    <p>Ronda de Sant Pere, 7</p>
    <p>Barcelona, Barcelona 08010</p>
    <p>Spain</p>
    <br/>
    <p>Phone: 612523277</p>
    <p>nutritionwithnataliehowley@gmail.com</p>
    <br/>
    <p>These terms of use were created using Termly’s Terms and Conditions Generator.</p>
</div>
    )
  }
}


export default Privacy